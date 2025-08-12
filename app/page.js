import PostCard from './components/PostCard';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <>
      <div className="relative bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Welcome to 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                Le Wagon Blog
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore tutorials, stories, and insights from the Le Wagon community
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                <span>🚀</span>
                <span>Start Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {posts.length > 0 && (
          <div className="mb-12">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                  ⭐ Featured
                </span>
                <span className="text-red-100">{posts[0].category}</span>
                <span className="text-red-200 mx-2">•</span>
                <span className="text-red-100">{posts[0].date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{posts[0].title}</h3>
              <p className="text-red-100 mb-6 leading-relaxed">{posts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-red-100">By {posts[0].author}</span>
                <a 
                  href={`/blog/${posts[0].slug}`}
                  className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transform hover:scale-105 transition-all duration-200"
                >
                  Read Story →
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts available yet. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  );
}
