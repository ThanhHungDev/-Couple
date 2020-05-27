var user = null
if (typeof(Storage) !== 'undefined') {
    user = JSON.parse(localStorage.getItem('user'))
}

import TYPE from "../action/type.js";
export default function (state = user, action) {
    switch (action.type) {
        case TYPE.USER.SETTER_USER:
            return action.payload
        default:
            return state;
    }
}