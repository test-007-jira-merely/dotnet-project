import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="main-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/hello"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Hello
        </NavLink>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<HelloPage />} />
          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404</h1>
                <p>Page not found</p>
                <NavLink to="/" className="back-link">
                  Go to Home
                </NavLink>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
