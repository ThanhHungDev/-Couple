var { addMessage, addMessageSendToMe, showTypingUser } = require("../action")
var EVENT = CONFIG_EVENT
exports.socketListenner = function( socket, instanceApp ){

    socket.on(EVENT.REQUEST_GET_CHANEL, () => {
        console.log("đã vào " + EVENT.REQUEST_GET_CHANEL)
        
    });
    socket.on(EVENT.RESPONSE_MESSAGE, data => {
        console.log("đã vào " + EVENT.RESPONSE_MESSAGE, data)
        var { user, message, style, attachment, channel, detect } = data 
        if (typeof(Storage) !== 'undefined') {
            var userLocal = JSON.parse(localStorage.getItem('user'))
            if( userLocal && userLocal._id == user ){
                var { browser, browserMajorVersion, browserVersion, os, osVersion } = detect
                var clientServerSend = { browser, browserVersion, browserMajorVersion, os, osVersion }
                var { client } = instanceApp.props
                console.log(JSON.stringify(clientServerSend), JSON.stringify(client))
                if( JSON.stringify(clientServerSend) == JSON.stringify(client) ){
                    return false
                }
            }
            instanceApp.props.dispatch( addMessageSendToMe({ type: false, content: message, style, attachment, channel }) )
            return false
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
        }
        
    })
    socket.on(EVENT.RESPONSE_TYPING, data => {
        console.log("vaof EVENT.RESPONSE_TYPING" + EVENT.RESPONSE_TYPING)
        var { user, channel } = data 
        if (typeof(Storage) !== 'undefined') {
            var userLocal = JSON.parse(localStorage.getItem('user'))
            if( userLocal && userLocal._id == user ){
                return false
            }else{
                console.log("cos theer show typing ")
                if(timeoutTyping){
                    clearTimeout(timeoutTyping)
                }
                var domTyping = document.getElementById("js-typing")
                if(domTyping.getAttribute("channel") == channel)
                domTyping.classList.add("show")
                /// scroll bottom 
                var inputMessage = document.getElementById("js-is-write-message")
                if(inputMessage.classList.contains("writing")){
                    document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
                }
                var timeoutTyping = setTimeout(function() {
                    var domTyping = document.getElementById("js-typing")
                    if(domTyping.getAttribute("channel") == channel)
                    domTyping.classList.remove("show")
                }, 10000);
                return false
            }
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
        }
        
    })
}