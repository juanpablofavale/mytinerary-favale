import { useRef } from 'react'
import './signUp.css'
import { useDispatch, useSelector } from 'react-redux'
import { signUpAsync } from '../../redux/actions/authActions'
import { Link } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Google from '../Google/Google'
import * as locale from 'locale-codes';

export default function Signup(){
    const {user, token, message} = useSelector(store => store.authReducer)
    const dispatch = useDispatch()

    const name = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const image = useRef(null)
    const country = useRef(null)
    
    const handleGoogle = (data) => {
        const userData = {...data}
        dispatch(signUpAsync(userData))
    }

    const handleClick = () => {
        const data = {
            email:email.current.value,
            password:password.current.value,
            name:name.current.value,
            lastName:lastName.current.value,
            image:image.current.value,
            country:country.current.value,
        }
        dispatch(signUpAsync(data))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const getCountry = () => {
        const filt = locale.all.filter(loc => loc.location)
        const aux = filt.map(loc => loc.location)
        const unicos = aux.filter((l, i) => aux.indexOf(l) === i)
        return unicos
    }

    const selected = (name) => {
        name=="Argentina" ? "selected" : ""
    }

    return (
        <div className="pgSignUp">
            <div className="card">
                <GoogleOAuthProvider clientId="632499211609-ao3pr7jfr9dm4bg5objhnnvmfjt8u36o.apps.googleusercontent.com">
                    <Google fn={handleGoogle}/>
                </GoogleOAuthProvider>
                <div className="form-div">
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input ref={name} type="text" id="name" required/>
                        <label htmlFor="lastName">Last Name:</label>
                        <input ref={lastName} type="text" id="lastName" required/>
                        <label htmlFor="email">E-mail:</label>
                        <input ref={email} type="text" id="email" required/>
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" id="password" required/>
                        <label htmlFor="imgProfile">Profile Image:</label>
                        <input ref={image} type="text" id="imgProfile" required/>
                        <label htmlFor="country">Country:
                        <select ref={country} name="" id="country" defaultValue="Argentina">
                            {getCountry().map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
                        </select>
                        </label>
                        <input onClick={handleClick} type="submit" value="Login" />
                    </form>
                </div>
                <div className="information">
                    <h2>MyTinerary</h2>
                    <h2>SignUp</h2>
                    <h3>or</h3>
                    <Link to={"/signin"}>
                        <h3>SignIn</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}