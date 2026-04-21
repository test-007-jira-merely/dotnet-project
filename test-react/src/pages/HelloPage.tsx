import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/routes'
import './HelloPage.css'

function HelloPage() {
  return (
    <section className="hello-page">
      <div className="hello-content">
        <h1>Hello</h1>
        <p>
          Welcome to the Hello page! This is a demonstration of client-side
          routing in React.
        </p>
        <Link to={ROUTES.HOME} className="button-base">
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}

export default HelloPage
