import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

export const ROUTES = {
  HOME: '/',
  HELLO: '/hello',
} as const

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="app-nav">
          <NavLink to={ROUTES.HOME} className="nav-link">
            Home
          </NavLink>
          <NavLink to={ROUTES.HELLO} className="nav-link">
            Hello
          </NavLink>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.HELLO} element={<HelloPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
