
if(!userDefault){
  userDefault = []
}
var userChatDefault = JSON.parse(userDefault);
import TYPE from "../action/type.js";
export default function (state = userChatDefault, action) {
  switch (action.type) {
    case TYPE.CHAT.CHANGE_USER_CHAT_DEFAULT:
      return state.map( item => {
        if(item.id === action.payload) {
          return { ...item, isActive : true }
        }
        return { ...item, isActive : false }
      })
    case TYPE.CHANNEL.SETTER_CHANNEL:
      return action.payload
    default:
      return state;
  }
}