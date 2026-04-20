import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App routing', () => {
  it('renders home page at root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders hello page at /hello route', () => {
    render(
      <MemoryRouter initialEntries={['/hello']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
    expect(screen.getByText(/welcome to the hello page/i)).toBeInTheDocument()
  })

  it('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument()
    expect(screen.getByText(/page not found/i)).toBeInTheDocument()
  })

  it('navigates to hello page when clicking hello link', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    const helloLink = screen.getByRole('link', { name: /hello/i })
    await user.click(helloLink)

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
  })

  it('navigates back to home from hello page', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter initialEntries={['/hello']}>
        <App />
      </MemoryRouter>
    )

    const backButton = screen.getByRole('link', { name: /back to home/i })
    await user.click(backButton)

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
  })

  it('navigates to home from 404 page', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    )

    const homeLink = screen.getByRole('link', { name: /go to home/i })
    await user.click(homeLink)

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
  })

  it('applies active class to current navigation link', () => {
    render(
      <MemoryRouter initialEntries={['/hello']}>
        <App />
      </MemoryRouter>
    )

    const helloLink = screen.getByRole('link', { name: /^hello$/i })
    expect(helloLink).toHaveClass('active')

    const homeLink = screen.getByRole('link', { name: /^home$/i })
    expect(homeLink).not.toHaveClass('active')
  })
})
