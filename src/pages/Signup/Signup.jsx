import Google from '../../components/Google/Google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { signUpAsync } from '../../redux/actions/authActions'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import * as locale from 'locale-codes'
import './signUp.css'

export default function Signup(){
    document.title = "MyTinerary - SignUp"

    const dispatch = useDispatch()
    const name = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const image = useRef(null)
    const country = useRef(null)
    
    const handleGoogle = (data) => {
        const userData = {...data}
        toast.promise(
            dispatch(signUpAsync(userData)),
            {
                pending: "Loggin up..."
            }
        )
    }

    const isEmpty = (str) => {
        let res = false
        str?.map(t => !t.length ? res=true : "")
        return res
    }

    const handleClick = () => {
        if(isEmpty([email.current.value, password.current.value, name.current.value, lastName.current.value])){
            toast.error("Error: Name, Last Name, Email and Password are Required!")
            return
        }

        const data = {
            email:email.current.value,
            password:password.current.value,
            name:name.current.value,
            lastName:lastName.current.value,
            image:image.current.value,
            country:country.current.value,
        }
        
        toast.promise(
            dispatch(signUpAsync(data)),
            {
                pending: "Registering..."
            }
        )
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

    return (
        <div className="pgSignUp">
            <div className="card">
                <div className="form-div">
                    <h2>SignUp</h2>
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
                        <input ref={image} type="text" id="imgProfile" />
                        <label htmlFor="country">Country:
                        <select ref={country} name="" id="country" defaultValue="Argentina">
                            {getCountry().map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
                        </select>
                        </label>
                        <input onClick={handleClick} type="submit" value="Register" />
                    </form>
                    <GoogleOAuthProvider clientId="632499211609-ao3pr7jfr9dm4bg5objhnnvmfjt8u36o.apps.googleusercontent.com">
                        <Google fn={handleGoogle}/>
                    </GoogleOAuthProvider>
                    <div className='signinChange'>
                        <p>Do you have an account?</p>
                        <Link to={"/signin"}>
                            <p>Signin</p>
                        </Link>
                    </div>
                </div>
                <div className="information">
                </div>
            </div>
        </div>
    )
}