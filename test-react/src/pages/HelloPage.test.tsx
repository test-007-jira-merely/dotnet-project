import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HelloPage from './HelloPage'

describe('HelloPage', () => {
  it('renders hello heading', () => {
    render(
      <BrowserRouter>
        <HelloPage />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument()
  })

  it('renders welcome message', () => {
    render(
      <BrowserRouter>
        <HelloPage />
      </BrowserRouter>
    )

    expect(screen.getByText(/welcome to the hello page/i)).toBeInTheDocument()
    expect(
      screen.getByText(/this page demonstrates client-side routing/i)
    ).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    render(
      <BrowserRouter>
        <HelloPage />
      </BrowserRouter>
    )

    const backLink = screen.getByRole('link', { name: /back to home/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/')
  })
})
