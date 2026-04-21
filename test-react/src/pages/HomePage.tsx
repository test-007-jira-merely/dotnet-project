import { useState, useCallback } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import './HomePage.css'

const EXTERNAL_LINKS = {
  vite: 'https://vite.dev/',
  react: 'https://react.dev/',
  github: 'https://github.com/vitejs/vite',
  discord: 'https://chat.vite.dev/',
  x: 'https://x.com/vite_js',
  bluesky: 'https://bsky.app/profile/vite.dev',
} as const

const ICON_PATHS = {
  documentation: '/icons.svg#documentation-icon',
  social: '/icons.svg#social-icon',
  github: '/icons.svg#github-icon',
  discord: '/icons.svg#discord-icon',
  x: '/icons.svg#x-icon',
  bluesky: '/icons.svg#bluesky-icon',
} as const

function HomePage() {
  const [count, setCount] = useState(0)
  const incrementCount = useCallback(() => setCount((c) => c + 1), [])

  return (
    <main>
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
        <button className="counter" onClick={incrementCount}>
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={ICON_PATHS.documentation}></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href={EXTERNAL_LINKS.vite} target="_blank" rel="noopener noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href={EXTERNAL_LINKS.react} target="_blank" rel="noopener noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={ICON_PATHS.social}></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href={EXTERNAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={ICON_PATHS.github}></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={ICON_PATHS.discord}></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href={EXTERNAL_LINKS.x} target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={ICON_PATHS.x}></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href={EXTERNAL_LINKS.bluesky} target="_blank" rel="noopener noreferrer">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href={ICON_PATHS.bluesky}></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </main>
  )
}

export default HomePage
