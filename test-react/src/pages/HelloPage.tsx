import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-page">
      <section className="hello-content">
        <h1>Hello</h1>
        <p className="hello-description">
          Welcome to the Hello page. This page demonstrates client-side routing in our React application.
        </p>
        <p className="hello-info">
          You can navigate between pages using the links in the navigation bar above.
          Notice how the page transitions happen instantly without a full page reload.
        </p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </section>
    </div>
  )
}

export default HelloPage
