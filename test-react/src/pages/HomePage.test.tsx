import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('renders the hero section with logos', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(screen.getByAltText(/hero showing react and vite logos/i)).toBeInTheDocument()
    expect(screen.getByAltText(/react logo/i)).toBeInTheDocument()
    expect(screen.getByAltText(/vite logo/i)).toBeInTheDocument()
  })

  it('renders the get started heading', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders and increments counter button', async () => {
    const user = userEvent.setup()

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    const counterButton = screen.getByRole('button', { name: /count is 0/i })
    expect(counterButton).toBeInTheDocument()

    await user.click(counterButton)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()

    await user.click(counterButton)
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
  })

  it('renders documentation section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { name: /documentation/i })).toBeInTheDocument()
    expect(screen.getByText(/your questions, answered/i)).toBeInTheDocument()
  })

  it('renders external links with correct attributes', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    const viteLink = screen.getByRole('link', { name: /explore vite/i })
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev/')
    expect(viteLink).toHaveAttribute('target', '_blank')
    expect(viteLink).toHaveAttribute('rel', 'noopener noreferrer')

    const reactLink = screen.getByRole('link', { name: /learn more/i })
    expect(reactLink).toHaveAttribute('href', 'https://react.dev/')
    expect(reactLink).toHaveAttribute('target', '_blank')
    expect(reactLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social links section', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { name: /connect with us/i })).toBeInTheDocument()
    expect(screen.getByText(/join the vite community/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /discord/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /x\.com/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /bluesky/i })).toBeInTheDocument()
  })

  it('decorative button icon has aria-hidden attribute', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )

    const decorativeImages = screen.getAllByRole('img', { hidden: true })
    const buttonIcon = decorativeImages.find(img =>
      img.classList.contains('button-icon') && img.getAttribute('src')?.includes('react')
    )

    expect(buttonIcon).toHaveAttribute('aria-hidden', 'true')
  })
})
