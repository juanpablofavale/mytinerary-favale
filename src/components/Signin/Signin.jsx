import { useDispatch, useSelector } from 'react-redux'
import './signin.css'
import { useEffect, useRef } from 'react'
import { signInAsync } from '../../redux/actions/authActions'
import LS from '../../utils/LS'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin(){
    const navi = useNavigate()
    const {user, token, message} = useSelector(store => store.authReducer)
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)

    useEffect(() => {
        if (token) {
            LS.put("token", token)
            navi('/cities')
        }
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
        email.current.value=""
        password.current.value=""
    }

    return(
        <div className="pgSignin">
            <div className="card">
                <div className="form-div">
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail:</label>
                        <input ref={email} type="text" id="email" required/>
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" id="password" required/>
                        <input onClick={handleClick} type="submit" value="Login" />
                    </form>
                </div>
                <div className="information">
                    <h2>MyTinerary</h2>
                    <h2>SignIn</h2>
                    <h3>or</h3>
                    <Link to={"/signup"}>
                        <h3>SignUp</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}