

if(!themesDefault){
  themesDefault = '[]'
}
var themes = JSON.parse(themesDefault);
import TYPE from "../action/type.js";
export default function (state = themes, action) {
  switch (action.type) {
    case TYPE.HOME.CHNAGE_THEME:
      return action.payload;
    default:
      return state;
  }
}