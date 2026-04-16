import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <section className="hello-page">
      <div className="hello-content">
        <h1>Hello</h1>
        <p className="welcome-message">
          Welcome to the Hello page! This is a simple example of client-side routing
          in React using React Router. Navigate between pages without full page reloads
          and experience the smooth transitions of a modern single-page application.
        </p>
        <Link to="/" className="cta-button">
          Return to Home
        </Link>
      </div>
    </section>
  )
}

export default HelloPage
