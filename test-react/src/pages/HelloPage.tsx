import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <section className="page-container">
      <div className="hello-content">
        <h1>Hello</h1>
        <p>
          Welcome to the Hello page! This is a dedicated page that demonstrates
          client-side routing in your React application.
        </p>
        <p>
          You can navigate between pages without a full page reload, making your
          application feel fast and responsive.
        </p>
        <Link to="/" className="home-link">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default HelloPage
