import TYPE from "./type"
export function setterSocket(socket){
    console.log(socket , " set socket ")
    return {
        type : TYPE.SOCCKET.SET_SOCKET_IO,
        payload : socket
    }
}
export function setterUser( user ){
    console.log(user , " set user ")
    return {
        type : TYPE.USER.SETTER_USER,
        payload : user
    }
}

export function setterChannels( channels ){
    console.log(channels , " set channels ")
    return {
        type : TYPE.CHANNEL.SETTER_CHANNEL,
        payload : channels
    }
}

export function addMessage( message ){
    console.log(message , " addMessage ")
    return {
        type : TYPE.CHANNEL.ADD_MESSAGE,
        payload : message
    }
}

export function addMessageSendToMe( message ){
    console.log(message , " addMessageSendToMe ")
    return {
        type : TYPE.CHANNEL.ADD_MESSAGE_SEND_TO_ME,
        payload : message
    }
}

export function showTypingUser( userChannel ){
    console.log(userChannel , " showTypingUser ")
    return {
        type : TYPE.CHANNEL.SHOW_TYPING_USER,
        payload : userChannel
    }
}
export function hiddenTypingUser( userChannel ){
    console.log(userChannel , " hiddenTypingUser ")
    return {
        type : TYPE.CHANNEL.HIDDEN_TYPING_USER,
        payload : userChannel
    }
}