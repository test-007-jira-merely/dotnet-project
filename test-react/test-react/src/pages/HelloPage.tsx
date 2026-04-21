import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-page">
      <h1>Hello</h1>
      <p>
        Welcome to the Hello page! This is a dedicated page that demonstrates
        client-side routing in the application. You can navigate between pages
        without full page reloads.
      </p>
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  )
}

export default HelloPage
