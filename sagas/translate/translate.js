import { all, fork, takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import {
  CALL_TRANS_API,
  callTransPai,
  updateResult,
} from "../../store/action/translate/translateAction";

const test = async (source, target, value) => {
  const data = await axios.get(
    `http://localhost:3002/api/papago?text=${value}&source=${source}&target=${target}`
  );
  return data?.data?.message?.result?.translatedText;
};

function* callTransApi(action) {
  try {
    yield delay(100); // 1초를 기다립니다.
    console.log(action)
    const { value, source, target } = action;
    const result = yield call(test, source, target, value);
    yield put(updateResult({ value: result }));
  } catch (e) {
    console.log(e);
    yield put(updateResult({ value: "none" }));
  }
}

export default function* tvShowSaga() {
  yield all([takeLatest("CALL_TRANS_API", callTransApi)]);
}