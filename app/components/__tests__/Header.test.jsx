import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header'

describe('Header Component', () => {
  it('renders the Le Wagon logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('Le Wagon Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/images/lewagon-logo.svg')
    expect(logo).toHaveAttribute('width', '120')
    expect(logo).toHaveAttribute('height', '32')
  })

  it('renders the logo as a link to home', () => {
    render(<Header />)
    const logoLink = screen.getByAltText('Le Wagon Logo').closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders all navigation links', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
    
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/about')
    
    const contactLink = screen.getByText('Contact').closest('a')
    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  it('has the correct header structure and classes', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-white', 'shadow-sm', 'border-b', 'border-gray-200')
  })

  it('renders navigation within correct container classes', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('max-w-6xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')
  })
})