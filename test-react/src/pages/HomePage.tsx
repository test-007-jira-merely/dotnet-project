import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import Icon from '../components/Icon'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="hero-section">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/pages/HomePage.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="section-divider"></div>

      <section id="next-steps">
        <div id="docs">
          <Icon name="documentation-icon" className="icon" />
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <Icon name="social-icon" className="icon" />
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">
                <Icon name="github-icon" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noopener noreferrer">
                <Icon name="discord-icon" />
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noopener noreferrer">
                <Icon name="x-icon" />
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noopener noreferrer">
                <Icon name="bluesky-icon" />
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="section-divider"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HomePage
