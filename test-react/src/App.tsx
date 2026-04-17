import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="app-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/hello" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Hello
          </NavLink>
        </nav>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hello" element={<HelloPage />} />
            <Route path="*" element={
              <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <Link to="/" className="home-link">Go to Home</Link>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
