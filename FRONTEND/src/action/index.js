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