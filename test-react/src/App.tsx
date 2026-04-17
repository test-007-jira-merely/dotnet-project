import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/hello">
          Hello
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="*" element={
          <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <NavLink to="/">Go to Home</NavLink>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
