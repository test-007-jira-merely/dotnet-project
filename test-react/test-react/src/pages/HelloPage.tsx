import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-page">
      <section className="hello-content">
        <h1>Hello</h1>
        <p>
          Welcome to the Hello page! This is a demonstration of client-side
          routing in React.
        </p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </section>
    </div>
  )
}

export default HelloPage
