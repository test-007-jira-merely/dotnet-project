import { Link } from 'react-router-dom'
import { ROUTES } from '../App'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <section className="not-found-content">
        <h1>404</h1>
        <p className="error-message">Page not found</p>
        <p className="description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to={ROUTES.HOME} className="home-link btn-accent">
          ← Back to Home
        </Link>
      </section>
    </div>
  )
}

export default NotFoundPage
