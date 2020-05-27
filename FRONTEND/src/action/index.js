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