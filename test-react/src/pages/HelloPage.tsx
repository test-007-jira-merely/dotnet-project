import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <main className="hello-page">
      <h1>Hello</h1>
      <p className="welcome-message">
        Welcome to the Hello page! This is a new page that demonstrates client-side routing
        with React Router. Navigate between pages without full page reloads.
      </p>
      <Link to="/" className="home-link">
        Go back to Home
      </Link>
    </main>
  )
}

export default HelloPage
