import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                <span className="mr-1">📚</span>
                {post.category || 'Tutorial'}
              </span>
              <time className="text-gray-500 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight">
              {post.title}
            </h2>
            
            <p className="text-gray-600 line-clamp-3 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  {(post.author || 'Le Wagon Team').charAt(0)}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {post.author || 'Le Wagon Team'}
                </span>
              </div>
              <div className="flex items-center text-red-500 font-semibold text-sm group-hover:text-red-600 transition-colors duration-300">
                <span className="mr-2">Read more</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}