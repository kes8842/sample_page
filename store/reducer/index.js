import { combineReducers } from "redux";
import { translateReducer } from "./translate/trans-reducer";
import { loginReducer } from "./login/login-reducer";


export default combineReducers({
  translate: translateReducer,
  login: loginReducer
});