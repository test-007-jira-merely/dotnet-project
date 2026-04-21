import { useState, useCallback } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import DocumentationSection from './DocumentationSection'
import SocialSection from './SocialSection'
import './HomePage.css'

function HomePage() {
  const [count, setCount] = useState(0)

  const incrementCount = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
        <button className="counter" onClick={incrementCount}>
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <DocumentationSection />
        <SocialSection />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HomePage
