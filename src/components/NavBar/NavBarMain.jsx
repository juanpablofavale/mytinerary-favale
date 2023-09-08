import { useDispatch, useSelector } from "react-redux"
import Anchor from "../Anchor/Anchor"
import { Link } from "react-router-dom"
import { signOutAsync, signInAsyncToken } from "../../redux/actions/authActions"
import LS from "../../utils/LS"
import { useEffect } from "react"

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
            <Link className="log" onClick={handleClick}>
                Logout
                <img src={user.image} alt={user.lastName} />
            </Link>
            :
            <Link to="/signin">
                Login
            </Link>
            }
        </nav>
    )
}