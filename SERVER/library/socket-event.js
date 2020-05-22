var EVENT = {
    CONNECTTION                        : 'connection',
    AUTHENTICATION                     : 'AUTHENTICATION',
    DISCONNECT                         : 'disconnect',
    CHANNEL_MESSAGE                    : 'CHANNEL_MESSAGE',
    SOCKET_LISTEN_JOIN_CHANNEL_COMMENT : "SOCKET_LISTEN_JOIN_CHANNEL_COMMENT",
    SOCKET_RESPONSE_JOIN_CHANNEL       : "SOCKET_RESPONSE_JOIN_CHANNEL",
    CHANNEL_MESSAGE_RESPONSE           : "CHANNEL_MESSAGE_RESPONSE",
    SOCKET_LISTEN_GET_LIST_NOTIFICATION: "SOCKET_LISTEN_GET_LIST_NOTIFICATION",
    NOTIFICATION_RESPONSE              : "NOTIFICATION_RESPONSE",
}

var io;

module.exports = function(_io) {
    io = _io
    socketConnecting()
};

function socketConnecting(){

    io.sockets.on("connection",function(socket){
        // console.log(socket.adapter.rooms); 
        console.log("have connect: " + socket.id);
        // /////////////////////////////////////////////////////
        try {
            disconnect(socket);
        } catch (err) {
            console.log( err );
        }
        ////////////////////////////////////////////////////////
    });
}

function disconnect(socket){
    socket.on( EVENT.DISCONNECT, function () {
        console.log( EVENT.DISCONNECT + socket.id)
        socket.leaveAll();
        console.log(socket.adapter.rooms);
    });
}

function authentication(socket){
    socket.on( EVENT.AUTHENTICATION, async data => {
        console.log(`${EVENT.AUTHENTICATION} socket` + data)
        /// variable input
        var { id, access, client } = data,
        { 'user-agent' : user_agent } = socket.request.headers,
        detect = { ... client , user_agent }

        /// đăng kí tiến trình 1
        //// check authen ở đây 
        //....
        /// đăng kí tiến trình 2
        /// lấy cho user cái chanel tương ứng và nếu không có chanel nào thì tạo cho họ
//.....
        /// cho 2 tuyến trình chạy cùng lúc thì ta cần đợi
        let user = await check_auth;
        let channel = await get_channel;
        /// lưu ý: khi auth đúng, mặc định ta luôn có channel đc trả ra
        ///  nên sẽ join socket id vào channel
        if( user ){
            socket.join( channel );
            /// set data user cho socket
            socket.user_infor = user
            socket.channel = channel
            /// bây giờ mình phải lấy tất cả user trong cùng 1 room/channel?
            var list_user_infor = []
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