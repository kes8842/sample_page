import { combineReducers } from "redux";
import { translateReducer } from "./translate/translateReducer";

export default combineReducers({
  translate: translateReducer,
});