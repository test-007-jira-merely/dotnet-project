import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-page">
      <div className="hello-content">
        <h1>Hello</h1>
        <p>
          Welcome to your new Hello page! This demonstrates client-side routing
          in your React application.
        </p>
        <p>
          You can navigate between pages without a full page reload, making for
          a smoother user experience.
        </p>
        <Link to={ROUTES.HOME} className="interactive-btn interactive-btn-md">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default HelloPage
