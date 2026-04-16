import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/hello" className={({ isActive }) => isActive ? 'active' : ''}>
          Hello
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

// Simple 404 page component
function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Page not found</p>
        <NavLink to="/" className="cta-button">
          Return to Home
        </NavLink>
      </div>
    </section>
  )
}

export default App
