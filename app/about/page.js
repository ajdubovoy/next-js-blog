export const metadata = {
  title: 'About | Le Wagon Blog',
  description: 'Learn more about Le Wagon Blog and our journey with Next.js',
};

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Le Wagon Blog</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Where coding journeys begin and tech stories come to life
        </p>
      </div>

      <div className="space-y-16">
        <section className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore expert insights, inspiring alumni journeys, and stay ahead with exclusive news about tech trends and education. We believe in the power of shared knowledge and community-driven learning.
          </p>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Cover</h2>
            <p className="text-lg text-gray-600">Discover the topics that matter most to developers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rails & Fundamentals</h3>
              <p className="text-gray-600">Best practices and core concepts for modern web development</p>
            </div>
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Journeys</h3>
              <p className="text-gray-600">Real-world project experiences from Le Wagon alumni</p>
            </div>
            <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Trends</h3>
              <p className="text-gray-600">Latest insights and emerging technologies in tech</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built with Modern Tech</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              This blog demonstrates how AI can help you navigate codebases built with different technologies. Powered by cutting-edge tools:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gradient-to-br from-black to-gray-800 p-6 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 border border-gray-700">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-white mb-2">Next.js 15</h3>
              <p className="text-sm text-gray-400">App Router, Server Components, and optimized performance</p>
            </div>
            <div className="group bg-gradient-to-br from-cyan-600 to-blue-600 p-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-white mb-2">Tailwind CSS</h3>
              <p className="text-sm text-cyan-100">Utility-first CSS for rapid, responsive design</p>
            </div>
            <div className="group bg-gradient-to-br from-yellow-600 to-orange-600 p-6 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-bold text-white mb-2">Markdown</h3>
              <p className="text-sm text-yellow-100">Simple content management with frontmatter metadata</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-bold text-white mb-2">React</h3>
              <p className="text-sm text-blue-100">Component-based architecture for scalable UIs</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8 text-red-100 leading-relaxed">
              Whether you're a current Le Wagon student, an alumni, or someone interested in web development,
              we welcome you to explore, learn, and grow with us. This blog is more than just tutorials –
              it's a testament to the power of learning together.
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-30">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🚀</span>
                <p className="font-semibold text-white text-lg">Ready to start coding?</p>
              </div>
              <p className="text-red-100">
                Check out our latest posts and begin your journey into the world of web development!
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect With Us</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.lewagon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold"
            >
              <span className="mr-2 group-hover:animate-bounce">🌐</span>
              Visit Le Wagon
            </a>
            <a
              href="https://github.com/lewagon"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold"
            >
              <span className="mr-2 group-hover:animate-bounce">💻</span>
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
