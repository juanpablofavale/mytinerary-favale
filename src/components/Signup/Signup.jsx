import { useEffect, useRef } from 'react'
import './signUp.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { signUpAsync } from '../../redux/actions/authActions'

export default function Signup(){
    const {user, token, message} = useSelector(store => store.authReducer)
    const dispatch = useDispatch()

    const name = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const image = useRef(null)
    const country = useRef(null)
    
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
    useEffect(() => {
        if(message) {
            alert(message)
        }
    },[message])
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="pgSignUp">
            <div className="card">
                <div className="form-div">
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input ref={name} type="text" id="name"/>
                        <label htmlFor="lastName">Last Name:</label>
                        <input ref={lastName} type="text" id="lastName"/>
                        <label htmlFor="email">E-mail:</label>
                        <input ref={email} type="text" id="email"/>
                        <label htmlFor="password">Password:</label>
                        <input ref={password} type="password" id="password"/>
                        <label htmlFor="imgProfile">Profile Image:</label>
                        <input ref={image} type="text" id="imgProfile"/>
                        <label htmlFor="country">Country:
                        <select ref={country} name="" id="country">
                            <option value="Argentina">Argentina</option>
                        </select>
                        </label>
                        <input onClick={handleClick} type="submit" value="Login" />
                    </form>
                </div>
                <div className="information">
                    <h2>MyTinerary</h2>
                    <h2>SignUp</h2>
                </div>
            </div>
        </div>
    )
}