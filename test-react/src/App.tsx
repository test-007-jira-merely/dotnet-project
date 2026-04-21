import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import { ROUTES } from './routes'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.HELLO}>
              Hello
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.HELLO} element={<HelloPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
