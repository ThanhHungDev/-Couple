
var EVENT = CONFIG_EVENT
exports.socketListenner = function( socket, dispatch ){

    socket.on(EVENT.REQUEST_GET_CHANEL, () => {
        console.log("đã vào " + EVENT.REQUEST_GET_CHANEL)
        
    });
    socket.on(EVENT.RESPONSE_MESSAGE, data => {
        console.log("đã vào " + EVENT.RESPONSE_MESSAGE, data)
    })
}