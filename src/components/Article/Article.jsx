import { Link } from "react-router-dom";
import Anchor from "../Anchor/Anchor";
import './article.css'

export default function Article({title, desc}) {
    return (
        <article className="hero-art">
            <h2>{title}</h2>
            <p>{desc}</p>
            <Link to='/cities'>{'See Yourself'}</Link>
        </article>
    )
}
