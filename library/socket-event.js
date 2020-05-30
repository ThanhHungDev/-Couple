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
        // console.log(socket.adapter.rooms); 
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
        
        var { access, channels } = data
        if(channels && channels.length ){
            

            TokenAccess.findOne({ token : access })
            .populate("user")
            .then( tokenAccess => {
                if(!tokenAccess){
                    throw new Error("not have token")
                }
                var lteDate = (new Date).getTime() - (new Date(tokenAccess.period)).getTime()
                if( lteDate >= CONFIG.TimeExpireAccessToken * 1000 ){
                    throw new Error("token period")
                }
                var lstMailAdmin = CONFIG.ACCOUNT_ADMIN.map( account => account.email )
                if( lstMailAdmin.includes(tokenAccess.user.email) ){
                    console.log("admin login can join all ")
                    return Channel.find({})
                }else{
                    return Channel.find({ _id : { $in : channels }})
                }
            })
            .then( channelDbs => {
                channelDbs.map(channel => {
                    console.log(channel.name)
                    socket.join( channel.name );
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
        var { id, access, message, client, channel } = data,
        { 'user-agent' : userAgent } = socket.request.headers,
        detect = { ... client , userAgent }

        /// check user auth
        Promise.all([ checkTokenAccess(id, access, detect), checkChannel(id, channel) ])
        .then(([ isAuth, channelData ]) => {

            if( isAuth && channelData ){
                /// send-message
                saveMessage(id, message, channelData)
                io.in(channel).emit(EVENT.RESPONSE_MESSAGE, { user : id, message, channel: channelData.name })
            }
        })
        .catch( err => console.log("have err "))
    })
}

async function checkChannel(userId, channel ){
    return Channel.findOne({ user : mongoose.Types.ObjectId(userId), channel })
    .then( channelResult => {
        if( !channelResult ){
            return false
        }
        return channelResult
    })
    .catch( err => false)
}
async function checkTokenAccess(userId, token, detect ){
    return TokenAccess.findOne({ user : mongoose.Types.ObjectId(userId), token })
    .then( tokenResult => {
        if( !tokenResult ){
            return false
        }
        console.log(tokenResult.period)
        var diffTime = Math.abs(new Date - tokenResult.period),
            tim      = CONFIG.TimeExpireAccessToken
        console.log(diffTime + " " + tim , " time")
        return true
    })
    .catch( err => false)
}
async function saveMessage(userId, body, channel){
    var newMessage = new Message({
        user : userId,
        body,
        channel: [ channel._id ]
    })
    return newMessage.save()
    .then(message => message )
    .catch( err => { console.log(err, "err save new"); return false })
}