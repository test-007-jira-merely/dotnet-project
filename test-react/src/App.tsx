import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { ROUTES } from './routes'
import NotFound from './components/NotFound'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const HelloPage = lazy(() => import('./pages/HelloPage'))

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="main-nav">
          <NavLink to={ROUTES.HOME} className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to={ROUTES.HELLO} className={navLinkClass}>
            Hello
          </NavLink>
        </nav>

        <main className="main-content">
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.HELLO} element={<HelloPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
