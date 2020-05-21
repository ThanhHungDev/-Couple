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