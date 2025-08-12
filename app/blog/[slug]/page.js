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
        [&_h1]:text-gray-900 [&_h1]:font-bold [&_h2]:text-gray-900 [&_h2]:font-bold [&_h3]:text-gray-900 [&_h3]:font-bold [&_h4]:text-gray-900 [&_h4]:font-bold [&_h5]:text-gray-900 [&_h5]:font-bold [&_h6]:text-gray-900 [&_h6]:font-bold
        [&_h1]:text-3xl [&_h1]:mb-6 [&_h1]:mt-8 [&_h1]:border-b [&_h1]:border-gray-200 [&_h1]:pb-2
        [&_h2]:text-2xl [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:font-bold [&_h2]:text-gray-800
        [&_h3]:text-xl [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-gray-800
        [&_h4]:text-lg [&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:font-medium [&_h4]:text-gray-800
        [&_p]:text-gray-700 [&_p]:leading-7 [&_p]:mb-4
        [&_a]:text-red-500 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
        [&_strong]:text-gray-900 [&_strong]:font-semibold
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_li]:my-1
        [&_code]:text-red-600 [&_code]:bg-red-50 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm
        [&_pre]:bg-gray-900 [&_pre]:text-gray-100
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