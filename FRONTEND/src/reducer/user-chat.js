
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
    case TYPE.CHANNEL.ADD_MESSAGE:
      return state.map( channel => {
        if(channel.isActive === true) {
          return { ...channel, message : [ ...channel.message, action.payload] }
        }
        return channel
      })
    case TYPE.CHANNEL.ADD_MESSAGE_SEND_TO_ME:
      return state.map( channel => {
        if(channel.id === action.payload.channel) {
          return { ...channel, message : [ ...channel.message, action.payload] }
        }
        return channel
      })
    case TYPE.CHANNEL.SHOW_TYPING_USER:
      return state.map( channel => {
        if(channel.id === action.payload.channel) {
          
          return { ...channel, message : [ ...channel.message, action.payload], typing: true }
        }
        return channel
      })
    case TYPE.CHANNEL.HIDDEN_TYPING_USER:
      return state.map( channel => {
        if(channel.id === action.payload.channel) {
          return { ...channel, message : [ ...channel.message, action.payload], typing: false }
        }
        return channel
      })
    default:
      return state;
  }
}