import { Link } from 'react-router-dom'
import { ROUTES } from '../App'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-container">
      <section className="hello-content">
        <h1>Hello!</h1>
        <p className="welcome-text">
          Welcome to the Hello page. This is a simple demonstration of client-side routing
          with React Router.
        </p>
        <p className="description">
          You can navigate between pages without a full page reload, providing a smooth
          single-page application experience.
        </p>
        <Link to={ROUTES.HOME} className="back-link btn-accent">
          ← Back to Home
        </Link>
      </section>
    </div>
  )
}

export default HelloPage
