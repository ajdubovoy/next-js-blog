import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '../page'

describe('About Page', () => {
  it('renders the main heading', () => {
    render(<About />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Le Wagon Blog')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<About />)
    expect(screen.getByText('Where coding journeys begin and tech stories come to life')).toBeInTheDocument()
  })

  it('renders the mission section', () => {
    render(<About />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText(/Explore expert insights, inspiring alumni journeys/)).toBeInTheDocument()
  })

  it('renders "What We Cover" section', () => {
    render(<About />)
    expect(screen.getByText('What We Cover')).toBeInTheDocument()
    expect(screen.getByText('Discover the topics that matter most to developers')).toBeInTheDocument()
  })

  it('renders all three topic cards', () => {
    render(<About />)
    expect(screen.getByText('Rails & Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('Student Journeys')).toBeInTheDocument()
    expect(screen.getByText('Industry Trends')).toBeInTheDocument()
  })

  it('renders "Built with Modern Tech" section', () => {
    render(<About />)
    expect(screen.getByText('Built with Modern Tech')).toBeInTheDocument()
    expect(screen.getByText(/This blog demonstrates how AI can help/)).toBeInTheDocument()
  })

  it('renders all technology cards', () => {
    render(<About />)
    expect(screen.getByText('Next.js 15')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
    expect(screen.getByText('Markdown')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders "Join Our Community" section', () => {
    render(<About />)
    expect(screen.getByText('Join Our Community')).toBeInTheDocument()
    expect(screen.getByText(/Whether you're a current Le Wagon student/)).toBeInTheDocument()
    expect(screen.getByText('Ready to start coding?')).toBeInTheDocument()
  })

  it('renders "Connect With Us" section with links', () => {
    render(<About />)
    expect(screen.getByText('Connect With Us')).toBeInTheDocument()
    
    const leWagonLink = screen.getByText('Visit Le Wagon').closest('a')
    expect(leWagonLink).toHaveAttribute('href', 'https://www.lewagon.com')
    expect(leWagonLink).toHaveAttribute('target', '_blank')
    expect(leWagonLink).toHaveAttribute('rel', 'noopener noreferrer')
    
    const githubLink = screen.getByText('GitHub').closest('a')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/lewagon')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('contains all emoji icons', () => {
    render(<About />)
    expect(screen.getByText('🎯')).toBeInTheDocument()
    expect(screen.getAllByText('🚀')).toHaveLength(2) // Appears twice on the page
    expect(screen.getByText('👨‍💻')).toBeInTheDocument()
    expect(screen.getByText('📈')).toBeInTheDocument()
    expect(screen.getByText('⚡')).toBeInTheDocument()
    expect(screen.getByText('🎨')).toBeInTheDocument()
    expect(screen.getByText('📝')).toBeInTheDocument()
    expect(screen.getByText('⚛️')).toBeInTheDocument()
  })
})