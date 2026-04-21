import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

const getNavLinkClassName = ({ isActive }: { isActive: boolean }): string =>
  isActive ? 'button-base nav-link active' : 'button-base nav-link'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="nav-bar">
          <NavLink to="/" className={getNavLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/hello" className={getNavLinkClassName}>
            Hello
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<HelloPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
