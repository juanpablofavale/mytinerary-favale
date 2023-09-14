import LS from "../../utils/LS"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { signOutAsync, signInAsyncToken } from "../../redux/actions/authActions"
import { useEffect } from "react"
import './navbarMain.css'
import BasicNav from "../BasicNav/BasicNav"
import { toast } from "react-toastify"

export default function NavBar({links}) {
    const dispatch = useDispatch()
    const {token, user, logged} = useSelector(store => store.authReducer)

    const navi = useNavigate()
    useEffect(()=>{
        const local = LS.get('token')
        if (local && !logged){
            dispatch(signInAsyncToken(local))
        }
    }, [])

    const handleClick = async () => {
        await toast.promise(
            dispatch(signOutAsync(token)),
            {
                pending: 'Loggin out...',
                error:"Error receiving data!"
            }
        )
        navi('/', {replace:true})
    }

    return (
        <nav>
            <BasicNav links={links} />
            {logged
            ?
            <>
                <p className="log" onClick={handleClick}>
                    Logout
                </p>
                <div className="usrLog">
                    <img src={user?.image} alt={user?.lastName} />
                    <p className="usrName">{user?.lastName}</p>
                </div>
            </>
            :
            <>
                <Link to="/signin">
                    Login
                </Link>
                <Link to="/signup">
                    Register
                </Link>
            </>
            }
        </nav>
    )
}