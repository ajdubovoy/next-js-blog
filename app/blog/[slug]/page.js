import { getPostData, getAllPostSlugs } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: `${post.title} | Le Wagon Blog`,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/" 
        className="inline-flex items-center text-red-500 hover:text-red-600 mb-8 font-medium"
      >
        ← Back to all posts
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded">
            {post.category || 'Tutorial'}
          </span>
          <time className="text-gray-500 text-sm">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center text-gray-600">
          <span>By {post.author || 'Le Wagon Team'}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime || '5 min read'}</span>
        </div>
      </header>

      <div 
        className="prose prose-lg max-w-none 
        prose-headings:text-gray-900 prose-headings:font-bold
        prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-2
        prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:font-bold prose-h2:text-gray-800
        prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:font-semibold prose-h3:text-gray-800
        prose-h4:text-lg prose-h4:mb-2 prose-h4:mt-4 prose-h4:font-medium prose-h4:text-gray-800
        prose-p:text-gray-700 prose-p:leading-7 prose-p:mb-4
        prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-ul:my-4 prose-li:my-1
        prose-code:text-red-600 prose-code:bg-red-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-pre:bg-gray-900 prose-pre:text-gray-100
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mt-8 [&_h2]:mb-4
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:mt-6 [&_h3]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link 
          href="/" 
          className="inline-flex items-center text-red-500 hover:text-red-600 font-medium"
        >
          ← View all posts
        </Link>
      </div>
    </article>
  );
}