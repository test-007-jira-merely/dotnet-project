import { NavLink } from 'react-router-dom'
import './HelloPage.css'

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
