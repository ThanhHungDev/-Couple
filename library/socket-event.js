var io,
CONFIG      = require("../config"),
mongoose    = require("mongoose"),
TokenAccess = require("../model/TokenAccess"),
Message     = require("../model/Message"),
Channel     = require("../model/Channel"),
EVENT       = CONFIG.EVENT

module.exports = function(_io) {
    io = _io
    socketConnecting()
};

function socketConnecting(){

    io.sockets.on( EVENT.CONNECTTION ,function(socket){
        console.log(socket.adapter.rooms); 
        console.log("have connect: " + socket.id + " " + CONFIG.EVENT.REQUEST_GET_CHANEL);
        
        // /////////////////////////////////////////////////////
        try {
            disconnect(socket)
            joinChannel(socket)
            sendMessageChat(socket)
        } catch (err) {
            console.log( err )
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
function joinChannel( socket ){
    socket.on(EVENT.JOIN_CHANNEL, async data => {

        var { access, channels, browser, browserMajorVersion, 
            browserVersion, os, osVersion} = data,
            { 'user-agent' : userAgent } = socket.request.headers,
            detectClient                        = { browser, browserMajorVersion, browserVersion, os, osVersion, userAgent }
        if(channels && channels.length ){

            var now = new Date
            var diffTime = now.getTime() - (CONFIG.TimeExpireAccessToken * 1000)
            // console.log( now )
            // console.log( diffTime )
            var gteDate = new Date( diffTime )
            // console.log( gteDate )
            TokenAccess.findOne({ token : access, period: { $gte: gteDate }, detect: JSON.stringify({...detectClient }) })
            .populate("user")
            .then( tokenAccess => {
                if(!tokenAccess){
                    console.log(access , "access join channel but not select show")
                    throw new Error("not have token")
                }
                var lstMailAdmin = CONFIG.ACCOUNT_ADMIN.map( account => account.email )
                if( lstMailAdmin.includes(tokenAccess.user.email) ){
                    console.log("admin login can join all ")
                    var diffTimeAccessChannel = now.getTime() - (CONFIG.TimeExpireAccessChannel * 1000)
                    var gteDate = new Date( diffTimeAccessChannel )
                    return Channel.find({ online : { $gte : gteDate }})
                }else{
                    return Channel.find({ _id : { $in : channels }})
                }
            })
            .then( channelDbs => {
                channelDbs.map(channel => {
                    console.log("join socket " +socket.id +" vào " + channel.name)
                    socket.join( channel.name );
                    channel.online = new Date
                    channel.save()
                })
            })
            .catch( error => {
                console.log( error )
            })
        }
    })
}

function sendMessageChat(socket){
    socket.on( EVENT.SEND_MESSAGE, async data => {
        console.log(`${EVENT.SEND_MESSAGE} socket` + data)
        /// variable input
        var { message, channelId, access, browser, browserMajorVersion, 
            browserVersion, os, osVersion } = data,
        { 'user-agent' : userAgent } = socket.request.headers,
        detectClient = { browser, browserMajorVersion, 
            browserVersion, os, osVersion , userAgent }

        /// check user auth
        var now = new Date
        var diffTime = now.getTime() - (CONFIG.TimeExpireAccessToken * 1000)
        // console.log( now )
        // console.log( diffTime )
        var gteDate = new Date( diffTime )
        // console.log( gteDate )
        var userIdSendMessage = null
        TokenAccess.findOne({ token : access, period: { $gte: gteDate }, detect: JSON.stringify({...detectClient }) })
        .populate("user")
        .then( tokenAccess => {
            if(!tokenAccess){
                console.log(access , "access send message to channel but not select show")
                throw new Error("not have token")
            }
            //// auth có
            userIdSendMessage = tokenAccess.user._id
            return Channel.findOne({ _id: channelId, user: userIdSendMessage })
        })
        .then( channelResult => {
            if( !channelResult ){
                console.log(channelId , "channel send message to channel but not select show")
                throw new Error("not have channel")
            }
            saveMessage(userIdSendMessage, message, channelResult._id)
            console.log(" emit : " + EVENT.RESPONSE_MESSAGE + " / " + channelResult.name)
            io.in(channelResult.name).emit(EVENT.RESPONSE_MESSAGE, { user : userIdSendMessage, message, channel: channelResult._id })
        })
        .catch( error => {
            console.log( error )
        })
    })
}

async function saveMessage(userId, message, channelId){
    var newMessage = new Message({
        user : userId,
        body: message,
        channel: channelId
    })
    return newMessage.save()
    .then(message => message )
    .catch( err => { console.log(err, "err save new"); return false })
}