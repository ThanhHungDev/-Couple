
var EVENT = CONFIG_EVENT
exports.socketListenner = function( socket, dispatch ){

    socket.on(EVENT.REQUEST_GET_CHANEL, () => {
        console.log("đã vào " + EVENT.REQUEST_GET_CHANEL)
        if (typeof(Storage) !== 'undefined') {
            var user = JSON.parse(localStorage.getItem('user'));
            if( user && user.id ){
                socket.emit(EVENT.GET_CHANNEL, { x : "hùng đẹp trai" })
            }
        }
    });
    
}