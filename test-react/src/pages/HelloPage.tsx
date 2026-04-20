import { NavLink } from 'react-router-dom'
import './HelloPage.css'

/**
 * HelloPage component - A secondary page demonstrating client-side routing.
 *
 * Displays a welcome message and provides navigation back to the home page.
 * This page is rendered at the "/hello" route and demonstrates smooth
 * single-page application navigation without full page reloads.
 */
function HelloPage() {
  return (
    <section className="hello-page">
      <div className="hello-content">
        <h1>Hello</h1>
        <p className="welcome-message">
          Welcome to the Hello page! This page demonstrates client-side routing
          in our React application. You can navigate between pages without a full
          page reload, creating a smooth single-page application experience.
        </p>
        <NavLink to="/" className="back-button">
          Back to Home
        </NavLink>
      </div>
    </section>
  )
}

export default HelloPage
