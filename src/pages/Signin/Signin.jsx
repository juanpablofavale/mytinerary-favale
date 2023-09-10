import Google from '../../components/Google/Google.jsx'
import { useDispatch } from 'react-redux'
import {  useRef } from 'react'
import { signInAsync } from '../../redux/actions/authActions'
import { Link } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './signin.css'
import { toast } from 'react-toastify'

export default function Signin(){
    document.title = "MyTinerary - SignIn"

    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleGoogle = async (data) => {
        const userData = {email: data.email, password: data.password}
        await toast.promise(
            dispatch(signInAsync(userData)),
            {
                pending: 'Loggin in...'
            }
        )
    }

    const handleClick = async () => {
        const data = {
            email: email.current.value,
            password: password.current.value
        }
        await toast.promise(
            dispatch(signInAsync(data)),
            {
                pending: 'Loggin in...'
            }
        )
    }

    return(
        <div className="pgSignin">
            <div className="card">
                <div className="form-div">
                    <h2>SignIn</h2>
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <label htmlFor="email">E-mail:</label>
                        <input ref={email} type="text" id="email" required/>
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" id="password" required/>
                        <input onClick={handleClick} type="submit" value="Login" />
                    </form>
                    <GoogleOAuthProvider clientId="632499211609-ao3pr7jfr9dm4bg5objhnnvmfjt8u36o.apps.googleusercontent.com">
                        <Google fn={handleGoogle}/>
                    </GoogleOAuthProvider>
                    <div className='signupChange'>
                        <p>Don't have an account?</p>
                        <Link to={"/signup"}>
                            <p>Signup</p>
                        </Link>
                    </div>
                </div>
                <div className="information">
                </div>
            </div>
        </div>
    )
}