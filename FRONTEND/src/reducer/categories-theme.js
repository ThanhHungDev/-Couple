

if(!categoriesThemesDefault){
    categoriesThemesDefault = '[]'
  }
  var categoriesTheme = JSON.parse(categoriesThemesDefault);
  import TYPE from "../action/type.js";
  export default function (state = categoriesTheme, action) {
    switch (action.type) {
      case TYPE.HOME.CHNAGE_THEME:
        return action.payload;
      default:
        return state;
    }
  }