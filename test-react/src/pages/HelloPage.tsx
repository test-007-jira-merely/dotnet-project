import { memo } from 'react'
import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="page-centered">
      <div className="hello-content">
        <h1>Hello</h1>
        <p className="welcome-text">
          Welcome to your new page! This is a simple demonstration of client-side routing
          with React Router.
        </p>
        <p className="info-text">
          You can navigate between pages without a full page reload, making your app feel
          fast and responsive.
        </p>
        <Link to="/" className="btn-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default memo(HelloPage)
