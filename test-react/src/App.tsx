import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelloPage from './pages/HelloPage'
import './App.css'

const ROUTES = {
  HOME: '/',
  HELLO: '/hello',
} as const

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

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

      <Routes>
        <Route path={ROUTES.HOME} Component={HomePage} />
        <Route path={ROUTES.HELLO} Component={HelloPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
