import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

// Lazy load page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const HelloPage = lazy(() => import('./pages/HelloPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Extract className function to avoid recreation on every render
const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="main-nav">
          <NavLink to="/" className={getNavLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/hello" className={getNavLinkClass}>
            Hello
          </NavLink>
        </nav>

        <main className="main-content">
          <Suspense fallback={<div className="page-centered">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hello" element={<HelloPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
