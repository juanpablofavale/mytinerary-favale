import Anchor from "../Anchor/Anchor";
import './article.css'

export default function Article({title, desc}) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{desc}</p>
            <Anchor link='#' title='See Yourself' />
        </article>
    )
}
