import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import action from '../../store/action'
import axios from 'axios'

const Index = (props) => {
    const { loginAction } = action
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loginAction.checkLogin())
    }, [])

    const logout = () => {
        axios.get('/login-api/logout')
    }

    return (
        <div>
            hello
            <button onClick={logout}>로그아웃</button>
        </div>
    )
}

export default Index;
