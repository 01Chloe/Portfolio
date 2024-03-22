import { Link } from "react-router-dom"
import { useState } from "react"
import "../assets/styles/header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={isOpen ? "open" : ""}>
      <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <nav className="header-nav">
        <Link to="/">Présentation</Link>
        <Link to="/skills">Compétences</Link>
        <Link to="/projects">Projets</Link>
      </nav>
    </header>
  )
}
export default Header
