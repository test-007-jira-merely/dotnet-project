import { NavLink } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <NavLink to="/" className="back-link">
        Go to Home
      </NavLink>
    </div>
  )
}

export default NotFoundPage
