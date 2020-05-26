'use strict'

var local      = "localhost",
    local_ip   = "127.0.0.1",
    local_port = 3000

var CONFIG = {
    SERVER : {
        PORT : local_port,
        DOMAIN : local,
        IP : local_ip,
        PROTOCOL: function(){
            if( local_port == 443 ){
                return "https://"
            }
            return  "http://"
        }, 
        ASSET : () => {
            let port_url = ''
            let protocol = ''
            if( local_port == 443 ){
                protocol = "https://"
            }else{
                protocol = "http://"
                port_url = ':'+ local_port
            }

            return protocol + local + port_url;
        }
    }, 
    database : {
        mysql : {
            username: 'root',
            password: '',
            database_name: 'ebudezain',
            host: local_ip,
            dialect: 'mysql',
            logging : false
        },
        mongodb : 'mongodb://127.0.0.1:27017/realtime'
    },
    TimeExpireAccessToken : 30 * 60,
    salt : 5,
    IS_ENVIROMENT_PRODUCT : true,
    WEBPUSH: { 
        PUBLIC_KEY: 'BIUnprvdEEntYAgrOBaI_MAaWK8qtRtgfM_RKnSGglsI1NAZUcycI7yJ6YL2ZEoqmKG9dSQ3AtX0-2mS6j_7epE',
        PRIVATE_KEY: 'OAGhOjAuZ5WqNOm7hdqNeo-SSJqGApaXivfY5ps0Eiw'
    },
    EVENT : {
        CONNECTTION      : 'connection',
        DISCONNECT       : 'disconnect',
        SEND_MESSAGE     : 'send-message',
        GET_CHANNEL      : 'get-channel',
        RESPONSE_MESSAGE : 'response-message',
        RESPONSE_CHANNELS: 'response-channel',
        REQUEST_GET_CHANEL: "request-get-channel"
    }
}
module.exports = CONFIG;