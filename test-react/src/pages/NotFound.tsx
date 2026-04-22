import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-centered">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="btn-primary">Go to Home</Link>
    </div>
  )
}
