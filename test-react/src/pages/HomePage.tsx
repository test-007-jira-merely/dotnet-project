import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import Icon from '../components/Icon'
import ExternalLink from '../components/ExternalLink'
import './HomePage.css'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter btn-accent"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <Icon id="documentation-icon" />
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <ExternalLink href="https://vite.dev/">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://react.dev/">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div id="social">
          <Icon id="social-icon" />
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <ExternalLink href="https://github.com/vitejs/vite">
                <Icon id="github-icon" className="button-icon" />
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://chat.vite.dev/">
                <Icon id="discord-icon" className="button-icon" />
                Discord
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://x.com/vite_js">
                <Icon id="x-icon" className="button-icon" />
                X.com
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://bsky.app/profile/vite.dev">
                <Icon id="bluesky-icon" className="button-icon" />
                Bluesky
              </ExternalLink>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HomePage
