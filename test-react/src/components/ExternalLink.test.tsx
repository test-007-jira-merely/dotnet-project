import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExternalLink from './ExternalLink'

describe('ExternalLink', () => {
  it('renders children content', () => {
    render(<ExternalLink href="https://example.com">Click me</ExternalLink>)

    expect(screen.getByRole('link', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies href attribute', () => {
    render(<ExternalLink href="https://example.com">Link</ExternalLink>)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('applies target="_blank" for external links', () => {
    render(<ExternalLink href="https://example.com">Link</ExternalLink>)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('applies rel="noopener noreferrer" for security', () => {
    render(<ExternalLink href="https://example.com">Link</ExternalLink>)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies optional className', () => {
    render(
      <ExternalLink href="https://example.com" className="custom-class">
        Link
      </ExternalLink>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveClass('custom-class')
  })

  it('renders complex children with icons', () => {
    render(
      <ExternalLink href="https://example.com">
        <img src="icon.svg" alt="Icon" />
        <span>Text content</span>
      </ExternalLink>
    )

    expect(screen.getByRole('img', { name: /icon/i })).toBeInTheDocument()
    expect(screen.getByText(/text content/i)).toBeInTheDocument()
  })
})
