import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { ROUTES } from './constants/routes'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HelloPage = lazy(() => import('./pages/HelloPage'))

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav" aria-label="Main navigation">
        <NavLink to={ROUTES.HOME} end>
          Home
        </NavLink>
        <NavLink to={ROUTES.HELLO}>Hello</NavLink>
      </nav>

      <ErrorBoundary>
        <Suspense fallback={<div className="page-centered">Loading...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.HELLO} element={<HelloPage />} />
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
