import { Link } from "react-router-dom"
import "../assets/styles/errorPage.scss"

const ErrorPage = () => {
  return (
    <main className="error-page-container">
      <p>Page introuvable</p>
      <p className="error-page-message">Erreur 404</p>
      <Link to="/" className="error-page-link">
        Retourner à la page d'accueil
      </Link>
    </main>
  )
}
export default ErrorPage
