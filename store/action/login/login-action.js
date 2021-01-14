const UPDATE_ID = 'UPDATE_ID'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const CALL_LOGIN_API = 'CALL_LOGIN_API'
const CHECK_LOGIN = 'CHECK_LOGIN'

const updateId = (id) => {
    return {
        type: UPDATE_ID,
        id
    }
}

const updatePassword = (password) => {
    return {
        type: UPDATE_PASSWORD,
        password
    }
}

const callLoginApi = (id, password, success, fail) => {
    return {
        type: CALL_LOGIN_API,
        id,
        password,
        success,
        fail
    }
}

const checkLogin = () => {
    return {
        type: CHECK_LOGIN
    }
}

export {
    UPDATE_ID,
    UPDATE_PASSWORD,
    CALL_LOGIN_API,
    CHECK_LOGIN,
    updateId,
    updatePassword,
    callLoginApi,
    checkLogin
}