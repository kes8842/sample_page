import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import action from '../../../store/action'

const Login = (props) => {
    const disPatch = useDispatch()
    const state = useSelector(state => state.login)
    const { id, password } = state
    const { loginAction } = action

    const success = () => {
        console.log('succss')
    }

    const fail = (a) => {
        alert(a)
    }

    const send = () => {
        disPatch(loginAction.callLoginApi(id, password, success, fail))
    }

    return (
        <>
            <input
                type="text"
                value={id}
                onChange={(e) => disPatch(loginAction.updateId(e.target.value))}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => disPatch(loginAction.updatePassword(e.target.value))}
            />
            <button onClick={send}>로그인</button>
        </>
    )

}

export default Login