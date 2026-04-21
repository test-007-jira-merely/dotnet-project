import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HelloPage = lazy(() => import('./pages/HelloPage'))

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'active' : ''

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="main-nav">
          <NavLink to="/" end className={getNavLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/hello" className={getNavLinkClassName}>
            Hello
          </NavLink>
        </nav>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hello" element={<HelloPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
