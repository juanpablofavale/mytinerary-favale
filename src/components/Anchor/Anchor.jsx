import { Link } from 'react-router-dom'
import './anchor.css'

export default function Anchor({title, link}) {
  return (
    <>
      <Link to={link}>{title}</Link>
    </>
  )
}
