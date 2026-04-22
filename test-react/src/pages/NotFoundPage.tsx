import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go to Home</Link>
    </section>
  )
}

export default NotFoundPage
