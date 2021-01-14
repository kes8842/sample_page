
import { fork, spawn, all } from "redux-saga/effects";
import translate from "./translate/translate";
import login from "./login/login-saga";

export default function* rootSaga() {
  yield fork(translate)
  yield fork(login)
}