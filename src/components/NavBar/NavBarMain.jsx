import { useDispatch, useSelector } from "react-redux"
import Anchor from "../Anchor/Anchor"
import { Link } from "react-router-dom"
import { signOutAsync } from "../../redux/actions/authActions"
import LS from "../../utils/LS"

export default function NavBar({links}) {
    const dispatch = useDispatch()
    const {token, user} = useSelector(store => store.authReducer)

    const handleClick = () => {
        //alert("desarrollar el logout")
        dispatch(signOutAsync(token))
        LS.delete('token')
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