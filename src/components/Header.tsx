import { NavLink } from "react-router-dom"
import { useState } from "react"
import "../assets/styles/header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={isOpen ? "open" : ""}>
      <h1 className="sr-only">Allier Chloé - Développeur Web - Portfolio</h1>
      <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setIsOpen(false)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setIsOpen(false)}
        >
          Compétences
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setIsOpen(false)}
        >
          Projets
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
