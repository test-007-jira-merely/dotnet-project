import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'
import './HelloPage.css'

function HelloPage() {
  return (
    <section className="page-centered">
      <h1>Hello</h1>
      <p className="welcome-message">
        Welcome to the Hello page. This demonstrates client-side routing in our React app.
      </p>
      <Link to={ROUTES.HOME} className="btn btn-primary">
        Go to Home
      </Link>
    </section>
  )
}

export default HelloPage
