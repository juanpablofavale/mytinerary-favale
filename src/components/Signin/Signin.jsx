import { useDispatch, useSelector } from 'react-redux'
import './signin.css'
import { useEffect, useRef } from 'react'
import { signInAsync } from '../../redux/actions/authActions'
import LS from '../../utils/LS'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import Google from '../Google/Google'

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

    const handleGoogle = (data) => {
        const userData = {email: data.email, password: data.password}
        dispatch(signInAsync(userData))
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
                <GoogleOAuthProvider clientId="632499211609-ao3pr7jfr9dm4bg5objhnnvmfjt8u36o.apps.googleusercontent.com">
                    <Google fn={handleGoogle}/>
                </GoogleOAuthProvider>
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