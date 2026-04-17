import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-page">
      <div className="hello-content">
        <h1>Hello!</h1>
        <p className="welcome-text">
          Welcome to your new page. This demonstrates client-side routing with React Router.
        </p>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default HelloPage
