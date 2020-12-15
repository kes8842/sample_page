  
import { spawn } from "redux-saga/effects";
import translate from "./translate/translate";

export default function* rootSaga() {
  yield spawn(translate);
}