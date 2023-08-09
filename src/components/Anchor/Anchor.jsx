import { Link } from 'react-router-dom'

export default function Anchor({title, link}) {
  return (
    <>
      <Link to={link}>{title}</Link>
    </>
  )
}
