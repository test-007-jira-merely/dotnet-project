import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HelloPage = lazy(() => import('./pages/HelloPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

function App() {
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/hello" className={getNavLinkClass}>
          Hello
        </NavLink>
      </nav>

      <Suspense fallback={<div className="page-container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<HelloPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
