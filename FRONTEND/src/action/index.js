import TYPE from "./type"
export function setterSocket(socket){
    return {
        type : TYPE.SOCCKET.SET_SOCKET_IO,
        payload : socket
    }
}