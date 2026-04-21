import { Link } from 'react-router-dom'
import '../App.css'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-container">
      <h1>Hello</h1>
      <p className="welcome-text">
        Welcome to the Hello page! This is a simple demonstration of client-side routing
        with React Router.
      </p>
      <Link to="/" className="link-button home-link">
        ← Back to Home
      </Link>
    </div>
  )
}

export default HelloPage
