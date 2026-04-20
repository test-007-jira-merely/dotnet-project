import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

function App() {
  return (
    <div className="app">
      <nav className="main-nav">
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/hello" className={getNavLinkClassName}>
          Hello
        </NavLink>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<HelloPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
