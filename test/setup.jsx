import '@testing-library/jest-dom'

// Mock Next.js modules that are commonly used in tests
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
}))

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} />,
}))

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }) => <a href={href} {...props}>{children}</a>,
}))

// Mock the posts library
vi.mock('@/lib/posts', () => ({
  getSortedPostsData: vi.fn(),
  getAllPostSlugs: vi.fn(),
  getPostData: vi.fn(),
}))