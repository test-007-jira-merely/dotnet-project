import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'

describe('NotFoundPage', () => {
  it('renders 404 heading', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument()
  })

  it('renders page not found message', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )

    expect(screen.getByText(/page not found/i)).toBeInTheDocument()
  })

  it('renders go to home link', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    )

    const homeLink = screen.getByRole('link', { name: /go to home/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })
})
