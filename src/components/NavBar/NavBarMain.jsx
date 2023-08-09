import Anchor from "../Anchor/Anchor"

export default function NavBar({links}) {
    return (
        <nav>
            {links.map((link, index) => <Anchor key={index} title={link.title} link={link.link} />)}
            <img src="./usrDef.png" alt="Default User" />
        </nav>
    )
}