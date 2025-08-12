import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PostCard from '../PostCard'

const mockPost = {
  slug: 'test-post',
  title: 'Test Blog Post Title',
  date: '2024-01-15',
  author: 'Test Author',
  excerpt: 'This is a test excerpt for the blog post that should be displayed.',
  category: 'Tech'
}

describe('PostCard Component', () => {
  it('renders the post title', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Test Blog Post Title')).toBeInTheDocument()
  })

  it('renders the post excerpt', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('This is a test excerpt for the blog post that should be displayed.')).toBeInTheDocument()
  })

  it('renders the post category', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Tech')).toBeInTheDocument()
  })

  it('renders the post author', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Test Author')).toBeInTheDocument()
  })

  it('renders the formatted date', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Jan 15')).toBeInTheDocument()
  })

  it('renders "Read more" call to action', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('Read more')).toBeInTheDocument()
  })

  it('links to the correct blog post URL', () => {
    render(<PostCard post={mockPost} />)
    const link = screen.getByRole('article').querySelector('a')
    expect(link).toHaveAttribute('href', '/blog/test-post')
  })

  it('uses default values when optional fields are missing', () => {
    const postWithoutOptionalFields = {
      slug: 'test-post',
      title: 'Test Title',
      date: '2024-01-15',
      excerpt: 'Test excerpt'
    }
    
    render(<PostCard post={postWithoutOptionalFields} />)
    
    expect(screen.getByText('Tutorial')).toBeInTheDocument() // Default category
    expect(screen.getByText('Le Wagon Team')).toBeInTheDocument() // Default author
  })

  it('renders author initial in avatar circle', () => {
    render(<PostCard post={mockPost} />)
    const avatar = screen.getByText('T') // First letter of "Test Author"
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('bg-gradient-to-r', 'from-red-500', 'to-red-600')
  })

  it('contains category emoji', () => {
    render(<PostCard post={mockPost} />)
    expect(screen.getByText('📚')).toBeInTheDocument()
  })

  it('has the correct article structure and classes', () => {
    render(<PostCard post={mockPost} />)
    const article = screen.getByRole('article')
    expect(article).toHaveClass('group', 'bg-white', 'rounded-2xl', 'shadow-lg')
  })
})