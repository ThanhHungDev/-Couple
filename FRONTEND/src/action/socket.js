var { addMessage, addMessageSendToMe } = require("../action")
var EVENT = CONFIG_EVENT
exports.socketListenner = function( socket, dispatch ){

    socket.on(EVENT.REQUEST_GET_CHANEL, () => {
        console.log("đã vào " + EVENT.REQUEST_GET_CHANEL)
        
    });
    socket.on(EVENT.RESPONSE_MESSAGE, data => {
        console.log("đã vào " + EVENT.RESPONSE_MESSAGE, data)
        var { user, message, style, attachment, channel } = data 
        if (typeof(Storage) !== 'undefined') {
            var userLocal = JSON.parse(localStorage.getItem('user'))
            if( userLocal && userLocal._id == user ){
                return false
            }else{
                dispatch( addMessageSendToMe({ type: false, content: message, style, attachment, channel }) )
                return false
            }
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
        }
        
    })
}