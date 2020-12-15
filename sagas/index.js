import { spawn } from "redux-saga/effects";
import tvShow from "./tvShow";

export default function* rootSaga() {
  yield spawn(tvShow);
}
