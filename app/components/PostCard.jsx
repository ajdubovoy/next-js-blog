import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
              {post.category || 'Tutorial'}
            </span>
            <time className="text-gray-500 text-sm ml-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-500 transition-colors">
            {post.title}
          </h2>
          
          <p className="text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              By {post.author || 'Le Wagon Team'}
            </span>
            <span className="text-red-500 font-medium text-sm hover:text-red-600">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}