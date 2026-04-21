import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { ROUTES } from './routes'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HelloPage = lazy(() => import('./pages/HelloPage'))

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `btn-base btn-nav${isActive ? ' active' : ''}`

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <NavLink to={ROUTES.HOME} className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to={ROUTES.HELLO} className={getNavLinkClass}>
          Hello
        </NavLink>
      </nav>

      <Suspense fallback={<div className="page-center">Loading...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.HELLO} element={<HelloPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
