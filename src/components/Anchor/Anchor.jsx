import './anchor.css'

export default function Anchor({title, link}) {
  return (
    <a href={link}>{title}</a>
  )
}
