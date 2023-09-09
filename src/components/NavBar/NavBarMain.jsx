import Anchor from "../Anchor/Anchor"
import LS from "../../utils/LS"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { signOutAsync, signInAsyncToken } from "../../redux/actions/authActions"
import { useEffect } from "react"
import './navbarMain.css'

export default function NavBar({links}) {
    const dispatch = useDispatch()
    const {token, user, logged} = useSelector(store => store.authReducer)

    useEffect(()=>{
        const local = LS.get('token')
        if (local && !logged){
            dispatch(signInAsyncToken(local))
        }
    }, [])

    useEffect(()=>{
        if (logged){
            LS.put("token", token)
        }else{
            LS.delete("token", token)
        }
    },[logged])

    const handleClick = () => {
        dispatch(signOutAsync(token))
    }

    return (
        <nav>
            {links.map((link, index) => <Anchor key={index} title={link.title} link={link.link} />)}
            {token
            ?
            <>
                <Link className="log" onClick={handleClick}>
                    Logout
                </Link>
                <div className="usrLog">
                    <img src={user.image} alt={user.lastName} />
                    <p className="usrName">{user.lastName}</p>
                </div>
            </>
            :
            <Link to="/signin">
                Login
            </Link>
            }
        </nav>
    )
}