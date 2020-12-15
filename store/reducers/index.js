import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { translateReducer } from "./translate/translateReducer";

export default combineReducers({
  post: postReducer,
  translate: translateReducer,
});
