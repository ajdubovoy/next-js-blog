import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Home from '../page'
import { getSortedPostsData } from '@/lib/posts'

// Mock PostCard component
vi.mock('../components/PostCard', () => ({
  default: ({ post }) => (
    <div data-testid="post-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </div>
  )
}))

describe('Home Page', () => {
  beforeEach(() => {
    getSortedPostsData.mockReturnValue([
      {
        slug: 'test-post-1',
        title: 'Test Post 1',
        date: '2024-01-15',
        author: 'Test Author',
        excerpt: 'This is a test excerpt for the first post',
        category: 'Tech'
      },
      {
        slug: 'test-post-2',
        title: 'Test Post 2',
        date: '2024-01-10',
        author: 'Another Author',
        excerpt: 'This is a test excerpt for the second post',
        category: 'Design'
      }
    ])
  })
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByText('Le Wagon Blog')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Home />)
    expect(screen.getByText('Explore tutorials, stories, and insights from the Le Wagon community')).toBeInTheDocument()
  })

  it('renders the "Start Learning" button', () => {
    render(<Home />)
    expect(screen.getByText('Start Learning')).toBeInTheDocument()
  })

  it('renders "Latest Stories" section', () => {
    render(<Home />)
    expect(screen.getByText('Latest Stories')).toBeInTheDocument()
  })

  it('renders featured post when posts are available', () => {
    render(<Home />)
    expect(screen.getByText('⭐ Featured')).toBeInTheDocument()
    expect(screen.getByText('Test Post 1')).toBeInTheDocument()
    expect(screen.getByText('This is a test excerpt for the first post')).toBeInTheDocument()
    expect(screen.getByText('By Test Author')).toBeInTheDocument()
  })

  it('renders post cards for remaining posts', () => {
    render(<Home />)
    const postCards = screen.getAllByTestId('post-card')
    expect(postCards).toHaveLength(1) // Only the second post should be in cards (first is featured)
    expect(screen.getByText('Test Post 2')).toBeInTheDocument()
  })

  it('renders "Read Story" link with correct href', () => {
    render(<Home />)
    const readStoryLink = screen.getByText('Read Story →')
    expect(readStoryLink.closest('a')).toHaveAttribute('href', '/blog/test-post-1')
  })
})

describe('Home Page - No Posts', () => {
  it('renders no posts message when no posts are available', () => {
    // Mock the posts module to return empty array
    getSortedPostsData.mockReturnValue([])
    
    render(<Home />)
    expect(screen.getByText('No posts available yet. Check back soon!')).toBeInTheDocument()
  })
})