import { type ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/**
 * A reusable external link component that ensures consistent security attributes
 * (target="_blank" and rel="noopener noreferrer") across all external links.
 */
function ExternalLink({ href, children, className, onClick }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default ExternalLink
