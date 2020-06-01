import TYPE from "./type"
export function setterSocket(socket){
    
    return {
        type : TYPE.SOCCKET.SET_SOCKET_IO,
        payload : socket
    }
}
export function setterUser( user ){
    
    return {
        type : TYPE.USER.SETTER_USER,
        payload : user
    }
}

export function setterChannels( channels ){
    
    return {
        type : TYPE.CHANNEL.SETTER_CHANNEL,
        payload : channels
    }
}

export function addMessage( message ){
    
    return {
        type : TYPE.CHANNEL.ADD_MESSAGE,
        payload : message
    }
}

export function addMessageSendToMe( message ){
    
    return {
        type : TYPE.CHANNEL.ADD_MESSAGE_SEND_TO_ME,
        payload : message
    }
}


export function changeChannelActive( channelName ){
    
    return {
        type : TYPE.CHANNEL.SET_ACTIVE,
        payload : channelName
    }
}
