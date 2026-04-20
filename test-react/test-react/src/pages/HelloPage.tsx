import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <section id="hello-page">
      <h1>Hello</h1>
      <p className="hello-intro">
        Welcome to your new page! This demonstrates client-side routing with React Router.
        You can navigate between pages without full page reloads, providing a smooth,
        app-like experience.
      </p>
      <Link to="/" className="home-link">
        Back to Home
      </Link>
    </section>
  )
}

export default HelloPage
