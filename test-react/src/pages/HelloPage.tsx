import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes'
import './HelloPage.css'

function HelloPage() {
  return (
    <section className="hello-content">
      <h1>Hello</h1>
      <p className="welcome-message">
        Welcome to our Hello page! This is a dedicated page that demonstrates
        client-side routing in action.
      </p>
      <NavLink to={ROUTES.HOME} className="btn">
        Back to Home
      </NavLink>
    </section>
  )
}

export default HelloPage
