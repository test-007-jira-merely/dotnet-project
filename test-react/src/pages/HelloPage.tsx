import { Link } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <>
      <section id="hello-center">
        <div>
          <h1>Hello</h1>
          <p className="hello-message">
            Welcome to the multi-page React app! This page demonstrates
            client-side routing with React Router, allowing seamless navigation
            between pages without full page reloads.
          </p>
          <Link to="/" className="home-button">
            Back to Home
          </Link>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HelloPage
