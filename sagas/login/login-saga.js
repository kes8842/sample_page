import { all, fork, takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";
import action from "../../store/action";

const { loginAction } = action

const loginApi = async (id, password, success, fail) => {
    console.log('sdsd')
    const result = await axios.post('http://localhost:3002/login-api/', { id, password })

    const { user, auth, message } = result?.data

    if (auth) {
        window.location.href = '/'
    } else if (user) {
        success()
    } else if (message) {
        fail(message)
    }
};

const checkLogin = async () => {
    const result = await axios.get('http://localhost:3002/login-api/')
    console.log(result)
}

function* callLoginApi(action) {
    try {
        yield delay(100); // 1초를 기다립니다.
        console.log(action)
        const { id, password, success, fail } = action;
        const result = yield call(loginApi, id, password, success, fail);
        console.log(result)
    } catch (e) {
        console.log(e);
    }
}

function* checkLoginApi(action) {
    try {
        yield delay(100); // 1초를 기다립니다.
        console.log(action)
        const result = yield call(checkLogin)
    } catch (e) {
        console.log(e);
    }
}

export default function* tvShowSaga() {
    yield all([
        takeLatest(loginAction.CALL_LOGIN_API, callLoginApi),
        takeLatest(loginAction.CHECK_LOGIN, checkLoginApi)]
    );
}