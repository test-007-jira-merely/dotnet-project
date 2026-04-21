import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'
import './HelloPage.css'

function HelloPage() {
  return (
    <section id="hello-page" className="page-center">
      <div className="hello-content">
        <h1>Hello</h1>
        <p>
          Welcome to the Hello page! This is a demonstration of client-side
          routing in React using React Router.
        </p>
        <p>
          This page shows how we can structure a multi-page application with
          dedicated page components, shared navigation, and seamless route
          transitions.
        </p>
        <Link to={ROUTES.HOME} className="btn-base btn-primary back-link">
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}

export default HelloPage
