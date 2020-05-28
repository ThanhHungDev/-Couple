
var EVENT = CONFIG_EVENT
exports.socketListenner = function( socket, dispatch ){

    socket.on(EVENT.REQUEST_GET_CHANEL, () => {
        console.log("đã vào " + EVENT.REQUEST_GET_CHANEL)
        
    });
    
}

exports.getChannelMessage = function( socket, data ){
    console.log( socket, 'go to getChannelMessage ')
    socket.emit(EVENT.REQUEST_GET_CHANEL, data)
}