import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <NavLink to={ROUTES.HOME} className="nav-link">
        Go to Home
      </NavLink>
    </div>
  )
}

export default NotFound
