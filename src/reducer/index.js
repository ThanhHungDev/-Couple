import {combineReducers} from 'redux';

///thêm các reducer funtion cần được combine vào đây
import DetectClientReducer from "./detect.js";
import CRAFT_LAYOUTS from "./home-page.js";
import themes from "./theme.js";
import userChat from './user-chat.js';
//// khởi tạo 1 biến biểu diễn REDUCER ALL 
const Reducer = combineReducers({
    client : DetectClientReducer,
    CRAFT_LAYOUTS : CRAFT_LAYOUTS,
    themes : themes,
    userChat : userChat
});
export default Reducer;