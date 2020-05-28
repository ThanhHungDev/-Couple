import TYPE from "./type"
export function setterSocket(socket){ console.log("run setterSocket ")
    return {
        type : TYPE.SOCCKET.SET_SOCKET_IO,
        payload : socket
    }
}
export function setterUser( user ){console.log("run setterUser ")
    return {
        type : TYPE.USER.SETTER_USER,
        payload : user
    }
}