import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../Footer'

describe('Footer Component', () => {
  it('renders the "Built with Next.js and ❤️" text', () => {
    render(<Footer />)
    expect(screen.getByText('Built with Next.js and ❤️')).toBeInTheDocument()
  })

  it('renders all external links with correct attributes', () => {
    render(<Footer />)
    
    const leWagonLink = screen.getByText('Le Wagon').closest('a')
    expect(leWagonLink).toHaveAttribute('href', 'https://www.lewagon.com')
    expect(leWagonLink).toHaveAttribute('target', '_blank')
    expect(leWagonLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const githubLink = screen.getByText('GitHub').closest('a')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/lewagon')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const nextjsLink = screen.getByText('Next.js').closest('a')
    expect(nextjsLink).toHaveAttribute('href', 'https://nextjs.org')
    expect(nextjsLink).toHaveAttribute('target', '_blank')
    expect(nextjsLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has the correct footer structure and classes', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-gray-100', 'border-t', 'border-gray-200', 'mt-auto')
  })

  it('renders with responsive flex layout', () => {
    render(<Footer />)
    const footerContent = screen.getByRole('contentinfo').querySelector('div').querySelector('div')
    expect(footerContent).toHaveClass('flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-center')
  })
})