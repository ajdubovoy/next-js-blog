# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 blog application for Le Wagon students learning about AI-assisted coding. The blog uses Tailwind CSS for styling and markdown files for content management.

## Commands

### Development
- `npm run dev` or `yarn dev` - Start development server with Turbopack enabled on http://localhost:3000
- `npm run build` or `yarn build` - Create production build
- `npm start` or `yarn start` - Start production server
- `npm run lint` or `yarn lint` - Run ESLint to check code quality

### Package Management
The project uses npm by default (package-lock.json present), but yarn is also supported per README instructions.

## Architecture

### Directory Structure
- `app/` - Next.js App Router directory containing pages and components
  - `app/page.js` - Homepage that displays all blog posts in a grid
  - `app/layout.js` - Root layout with global CSS, fonts, metadata, and Header/Footer components
  - `app/components/` - React components (Header.jsx, Footer.jsx, PostCard.jsx)
  - `app/blog/[slug]/page.js` - Dynamic route for individual blog posts with static generation
  - `app/about/page.js` - Static about page
- `lib/posts.js` - Core content management functions for reading and processing markdown files
- `posts/` - Markdown blog post files with frontmatter metadata
- `public/images/` - Static assets including Le Wagon logo

### Content Management System
The blog uses a file-based CMS with markdown files in the `posts/` directory:

- **Post Processing**: Uses `gray-matter` to parse frontmatter and `remark` + `remark-html` to convert markdown to HTML
- **Required frontmatter fields**: `title`, `date`, `author`, `excerpt`
- **Optional fields**: `category`, `readTime`
- **Functions in `lib/posts.js`**:
  - `getSortedPostsData()` - Returns all posts sorted by date (newest first)
  - `getAllPostSlugs()` - Gets all post slugs for static generation
  - `getPostData(slug)` - Processes individual post content to HTML

### Styling System
- **Framework**: Tailwind CSS v4 with PostCSS configuration
- **Color scheme**: Le Wagon brand colors (red accents: `red-500`, `red-600`, etc.)
- **Layout**: Responsive grid system with consistent max-width containers (`max-w-6xl`, `max-w-4xl`)
- **Typography**: Inter font from Google Fonts, custom prose styling for blog content

### Routing and Static Generation
- Uses Next.js App Router with automatic static generation
- Blog posts are statically generated at build time via `generateStaticParams()`
- Dynamic metadata generation for SEO using `generateMetadata()`

## Development Notes

### Adding New Blog Posts
1. Create a new `.md` file in the `posts/` directory
2. Include required frontmatter: title, date, author, excerpt
3. Posts are automatically sorted by date and displayed on homepage

### Component Conventions
- Components use `.jsx` extension
- Functional components with consistent Tailwind styling
- Next.js Image component used for optimized images
- Link component for internal navigation

### Path Aliases
- `@/*` alias points to root directory (configured in jsconfig.json)
- Use `@/lib/posts` for importing post utilities
- Use `@/app/components/ComponentName` for importing components