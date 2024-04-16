import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import "../assets/styles/header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isClicked) {
        setIsClicked(false)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [isClicked])

  function mouseMouveFunc(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    setIsHover(true)
    const headerRect = e.currentTarget.getBoundingClientRect()
    const maxX = headerRect.right
    const maxY = headerRect.bottom

    if (cursorX >= maxX) {
      setIsHover(false)
      setCursorX(maxX)
    }
    if (cursorY >= maxY) {
      setIsHover(false)
      setCursorY(maxY)
    }
    setCursorX(e.clientX)
    setCursorY(e.clientY)
  }

  return (
    <header
      className={isOpen ? "open" : ""}
      onMouseMove={(e) => mouseMouveFunc(e)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsClicked(true)}
    >
      <div
        className={isHover ? "cursor" : "cursor hide"}
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
      <div
        className={isClicked ? "big-cursor" : "big-cursor hide"}
        style={{ left: `${cursorX - 10}px`, top: `${cursorY - 10}px` }}
      ></div>

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
