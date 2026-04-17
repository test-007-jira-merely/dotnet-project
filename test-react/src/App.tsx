import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
