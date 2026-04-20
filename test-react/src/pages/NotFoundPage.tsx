import { NavLink } from 'react-router-dom'
import './NotFoundPage.css'

/**
 * NotFoundPage component - 404 error page for unmatched routes.
 *
 * Displays a 404 error message when users navigate to a route that doesn't exist.
 * This page is rendered for all unmatched routes (path="*") in the routing
 * configuration and provides a link to navigate back to the home page.
 */
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
