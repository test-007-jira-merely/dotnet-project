import { NavLink } from 'react-router-dom'
import './HelloPage.css'

function HelloPage() {
  return (
    <div className="hello-page centered-layout">
      <h1>Hello</h1>
      <p>
        Welcome to the Hello page! This is a dedicated page that demonstrates
        client-side routing in the application. You can navigate between pages
        without full page reloads.
      </p>
      <NavLink to="/" className="button-base home-button">
        Go to Home
      </NavLink>
    </div>
  )
}

export default HelloPage
