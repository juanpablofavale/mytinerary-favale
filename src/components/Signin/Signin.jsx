import { useDispatch, useSelector } from 'react-redux'
import './signin.css'
import { useEffect, useRef } from 'react'
import { signInAsync } from '../../redux/actions/authActions'
import LS from '../../utils/LS'

export default function Signin(){
    const {user, token, message} = useSelector(store => store.authReducer)
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)

    useEffect(() => {
        if (token) {LS.put("token", token)}
    }, [token])
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        const data = {
            email: email.current.value,
            password: password.current.value
        }
        dispatch(signInAsync(data))
    }

    return(
        <div className="pgSignin">
            <div className="card">
                <div className="form-div">
                    {token && <p>{token}</p>}
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail:</label>
                        <input ref={email} type="text" id="email"/>
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" id="password"/>
                        <input onClick={handleClick} type="submit" value="Login" />
                    </form>
                </div>
                <div className="information">
                    <h2>MyTinerary</h2>
                    <h2>SignIn</h2>
                </div>
            </div>
        </div>
    )
}