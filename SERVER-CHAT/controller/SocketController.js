'use strict'

var { EVENT } = require("../configs")
var io;
var REDIS;
var db        = require("../models");
// /////////////////////////////////////////////////////////////////////
/**
 * vì cần socket chạy tiến trình song song
 * I. trả về cho client 1 emit authentication_response mang thông tin các user trong 1 phòng
 * 1. xác thực người dùng là 1 promise 
 * 2. tìm kiếm channel tương ứng cũng là 1 promise
 * II. set timeout cho token để nó có thể chat không gián đoạn
 */
var SOCKET_LISTEN_AUTHENTICATION = function( socket ){
    socket.on(EVENT.AUTHENTICATION, async data => {
        console.log(`${EVENT.AUTHENTICATION} socket` + data);
        /// variable define default
        var response = { status : 204 , message : "server handle authentication" , data : [] };
        /// variable input
        var { id, access } = data.authentication, { client } = data;
        var user_agent = socket.request.headers['user-agent'] ? socket.request.headers['user-agent'] : '' ;
        var client = { ... data.client , user_agent };
        var key_redis = METHOD.renderKeyRedis( id , client );
        /// đăng kí tiến trình 1
        var check_auth = METHOD.redisGetPromise( key_redis , REDIS )
        .then( result => METHOD.checkAuthentication( result , id, access , client , validator))
        .catch(error => false);
        /// đăng kí tiến trình 2
        var get_channel = METHOD.redisGetListChannelKey( REDIS )
        .then(list_key =>  METHOD.getListChannelObjectByLstKey( list_key , REDIS , io , id ))
        .then(list_channel_obj => METHOD.findChannel( list_channel_obj, { REDIS , id : socket.id } ))
        .catch( error => false);
        /// cho 2 tuyến trình chạy cùng lúc thì ta cần đợi
        let auth = await check_auth;
        let channel = await get_channel;
        /// lưu ý: khi auth đúng, mặc định ta luôn có channel đc trả ra nên sẽ join socket id vào channel
        console.log(auth);
        if( auth ){
            socket.join( channel );
            /// set data user cho socket
            socket.user_infor = data.authentication.user_infor;
            socket.channel = channel;
            /// bây giờ mình phải lấy tất cả user trong cùng 1 room/channel?
            var list_user_infor = [];
            /// thông qua mỗi room/channel, mình đều lấy đc list socket id đang onl
            var list_socketid_in_room = io.sockets.adapter.rooms[channel].sockets;
            /// mình dùng thủ thuật để giải quyết bài toán trên bằng hàm : io.sockets.connected[socketid]
            /// loop id in list and connect to socket of id then get infor
            for (var socketid in list_socketid_in_room ) { 
                var client_socket = io.sockets.connected[socketid];
                list_user_infor.push(client_socket.user_infor);
            }
            response.status = 200;
            response.data = [{
                online : list_user_infor,
                channel : channel,
                socket : socket.id
            }];
            io.in(channel).emit( 'authentication_response' , response );
            /// lưu token đó gắn với channel trong 30p để khi 1 user chat 
            /// sẽ gửi thông tin token lên server thì check điều kiện cần là 
            /// token có đang thực sự dùng channel đó không?
            /// điều kiện đủ là token còn thời gian sống không
            REDIS.set( key_redis , access , 'EX', (CONFIG.TimeExpireAccessToken * 60), (err , status ) => {
                if(err){
                    response = { status : 204 , message : "server refesh token fail" , data : [] };
                    io.in(channel).emit( 'server_fail' , response );
                }
                response = { status : 200 , message : "server refesh token ready" , data : [] };
                io.in(channel).emit( 'ready_refesh' , response );
            });
            REDIS.set( access , channel , 'EX', (CONFIG.TimeExpireAccessToken * 60) , (err , status ) => {
                if(err){
                    response = { status : 204 , message : "server refesh token fail" , data : [] };
                    io.in(channel).emit( 'server_fail' , response );
                }
                response = { status : 200 , message : "server refesh channel ready" , data : [] };
                io.in(channel).emit( 'ready_set_channel' , response );
            });
        }else{
            response.status = 403;
            response.auth = data.authentication;
            socket.emit( 'authentication_response' , response );
        }
    })
}
const redisGetValueAsync = async key_redis => {
    return new Promise(function(resolve, reject) {
        REDIS.get( key_redis, (err , value ) => {
            if(err || value == null){
                resolve({ code: 404, data : null});
            }
            resolve({ code: 200, data : value});
        });
    });
}
const redisSetValueAsync = function( key, value ){
    return new Promise(function( resolve, reject ){
        REDIS.set( key, value, err => {
            if(err){
                console.log( err.message );
                resolve(false);
            }
            resolve(true);
        });
    })
}
const redisSetValueSync = function( key, value ){
    REDIS.set( key, value, err => {
        if(err){
            console.log( "redisSetValueSync " + err.message );
        }
    });
}
const renderChanelCommentBySlug = function( slug ){
    var prefix = "CHANNEL_COMMENT_";
    var channel = prefix + slug;
    return channel;
}
const getSlugByChannelComment = function( channel_comment_name ){
    var prefix = "CHANNEL_COMMENT_";
    var slug = channel_comment_name.replace(prefix, '');
    return slug;
}
const getOrCreateChanelCommentAsync = async function( slug ){
    var isExistSlug = await db.isExistSlug(slug);
    if(!isExistSlug){
        return false;
    }
    var channel = renderChanelCommentBySlug(slug);
    var data_channel = await redisGetValueAsync( channel );
    if( data_channel.code == 200 && data_channel.data ){
        return channel;
    }
    var insert_channel = await redisSetValueAsync( channel, true );
    if( insert_channel ){
        return channel;
    }
    return false;
}
const renderKeyRedis = function (id, client) {
        id      = parseInt(id);
    var key_obj = { id, ...client };
    return JSON.stringify(key_obj);
}
var SOCKET_LISTEN_GET_LIST_NOTIFICATION = function(socket){
    socket.on(EVENT.SOCKET_LISTEN_GET_LIST_NOTIFICATION, async data => {
        console.log(`${EVENT.SOCKET_LISTEN_GET_LIST_NOTIFICATION} socket`);
        /// variable input
        var { id, access } = data;
        var user_agent = socket.request.headers['user-agent'] ? socket.request.headers['user-agent'] : '' ;
        var client = { ... data.client , user_agent };
        var key_redis = renderKeyRedis( id, client );
        /// register process 1 : check auth
        var authenticationPromise = redisGetValueAsync( key_redis ).then( result => result )
        .catch(err => { console.log( err.message); return { code : 500, data : false }});
        /// register process 2 : get notification
        var totalNotificationPromise = db.NOTIFICATION.total(parseInt(id) || 0 )
        .catch(err => { console.log( err.message); return false});
        /// run process realtime
        let auth         = await authenticationPromise;
        let totalNotification = await totalNotificationPromise;
        if( auth.code == 200 && auth.data == access ){
            /// set response to socket
            var response = {
                code   : 200,
                message: "kết nối channel thành công",
                data   : totalNotification
            };
            socket.emit( EVENT.NOTIFICATION_RESPONSE, response );
        }else{
            /// set response to socket
            var response = {
                code   : 403,
                message: "kết nối channel không thành công",
                data   : 0
            };
            socket.emit( EVENT.NOTIFICATION_RESPONSE, response );
        }
    });
}
var SOCKET_LISTEN_JOIN_CHANNEL_COMMENT = function(socket){
    socket.on(EVENT.SOCKET_LISTEN_JOIN_CHANNEL_COMMENT, async data => {
        console.log(`${EVENT.SOCKET_LISTEN_JOIN_CHANNEL_COMMENT} socket`);
        /// variable input
        var { id, access, slug } = data;
        var user_agent = socket.request.headers['user-agent'] ? socket.request.headers['user-agent'] : '' ;
        var client = { ... data.client , user_agent };
        var key_redis = renderKeyRedis( id, client );
        /// register process 1 : check auth
        var authenticationPromise = redisGetValueAsync( key_redis ).then( result => result )
        .catch(err => { console.log( err.message); return { code : 500, data : false }});
        /// register process 2 : get chanel comment nếu có hoặc thêm mới chanel comment
        var channelPromise = getOrCreateChanelCommentAsync( slug )
        .catch(err => { console.log( err.message); return false});
        /// run process realtime
        let auth = await authenticationPromise;
        let channel = await channelPromise;
        if( auth.code == 200 && auth.data == access ){
            socket.join( channel );
            /// set response to socket
            var response = {
                code   : 200,
                message: "kết nối channel thành công",
                data   : channel
            };
            socket.emit( EVENT.SOCKET_RESPONSE_JOIN_CHANNEL, response );
        }else{
            /// set response to socket
            var response = {
                code   : 403,
                message: "kết nối channel không thành công",
                data   : channel
            };
            socket.emit( EVENT.SOCKET_RESPONSE_JOIN_CHANNEL, response );
        }
    });
}
var SOCKET_LISTEN_CHANNEL_SEND_MESSAGE = function(socket){
    socket.on( EVENT.CHANNEL_MESSAGE, async data => {
        console.log(`${EVENT.CHANNEL_MESSAGE} socket` + data);
        /// variable define default
        var response = { code: 204, message: "server handle ChannelMessage", data: [] };
        /// variable input
        /// reply, block_id is id of comment 
        var { id, access, md, message, channel, user_infor, post_id, reply, block_id } = data;
        var user_agent = socket.request.headers['user-agent'] ? socket.request.headers['user-agent'] : '' ;
        var client = { ... data.client , user_agent };
        var key_redis = renderKeyRedis( id, client );
        var authenticationPromise = redisGetValueAsync( key_redis ).then( result => result )
        .catch(err => { console.log( err.message); return { code : 500, data : false }});
        let auth = await authenticationPromise;
        if( message.replace(/ /g,"") && auth.code == 200 && auth.data == access ){
            /// save
            reply    = parseInt(reply) || 0;
            block_id = parseInt(block_id) || 0;
            var comment = { content_md: md, content_html: message, user_account_id: id, index: post_id, type_index: 'post', reply, block_id };
            var comment_result = await db.COMMENT.save(comment).catch( err => false );
            if( !comment_result ){
                ///response data
                response.code = 500;
                response.data = { id, message, user_infor, comment_result };
                io.in(channel).emit( EVENT.CHANNEL_MESSAGE_RESPONSE , response );
                return;
            }
            ///response data
            response.code = 200;
            response.data = { id, message, user_infor, comment_result };
            io.in(channel).emit( EVENT.CHANNEL_MESSAGE_RESPONSE , response );
            if( reply ){
                var user_replied_id = await db.COMMENT.getUserByCommentId(reply);
                console.log( user_replied_id + " --- " + reply )
                var notification = { user_account_id: user_replied_id, content : user_infor.name + ' đã nhắc bạn trong 1 bình luận ', custom : { slug: getSlugByChannelComment(channel), comment : comment_result, user_infor }}
                db.NOTIFICATION.save(notification).catch( err => false );
            }
            return;
        }
        response.code = 403;
        response.data = { id, message, user_infor };
        socket.emit( EVENT.CHANNEL_MESSAGE_RESPONSE , response );
        return;
    })
}
var SOCKET_LISTEN_DISCONNECT = function(socket){
    socket.on( EVENT.DISCONNECT, function () {
        console.log( EVENT.DISCONNECT + socket.id)
        socket.leaveAll();
        console.log(socket.adapter.rooms);
    });
}
var LISTENER_CONNECTION = function (socket) {
    // console.log(socket.adapter.rooms); 
    console.log("have connect: " + socket.id);
    // /////////////////////////////////////////////////////////////////////
    try {
        SOCKET_LISTEN_JOIN_CHANNEL_COMMENT(socket);
        SOCKET_LISTEN_AUTHENTICATION(socket);
        SOCKET_LISTEN_CHANNEL_SEND_MESSAGE(socket);
        SOCKET_LISTEN_DISCONNECT(socket);
        SOCKET_LISTEN_GET_LIST_NOTIFICATION(socket);
    } catch (err) {
        console.log( err );
    }
    //////////////////////////////////////////////////////////
}
module.exports = {
    EVENT,
    LISTENER_CONNECTION,
    run : function(_io){
        io = _io;
        _io.on( EVENT.CONNECTTION , LISTENER_CONNECTION );
    },
    setREDIS : function(_REDIS) { REDIS = _REDIS; }
}