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
    TimeExpireAccessToken : 30,
    salt : 5,
    IS_ENVIROMENT_PRODUCT : true
}
module.exports = CONFIG;