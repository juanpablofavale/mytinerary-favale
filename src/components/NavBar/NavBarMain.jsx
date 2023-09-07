import { useSelector } from "react-redux"
import Anchor from "../Anchor/Anchor"
import { Link } from "react-router-dom"

export default function NavBar({links}) {
    const {token} = useSelector(store => store.authReducer)

    const handleClick = () => {
        alert("desarrollar el logout")
    }

    return (
        <nav>
            {links.map((link, index) => <Anchor key={index} title={link.title} link={link.link} />)}
            {token 
            ? 
            <Link className="log" onClick={handleClick}>
                Logout
                <img src="/usrDef.png" alt="Default User" />
            </Link>
            :
            <Link to="/signin">
                Login
            </Link>
            }
        </nav>
    )
}