import { combineReducers } from "redux";
import { translateReducer } from "./translate/trans-reducer";

export default combineReducers({
  translate: translateReducer,
});