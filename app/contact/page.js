export const metadata = {
  title: "Contact | Le Wagon Blog",
  description: "Get in touch with the Le Wagon team",
};

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">Get In Touch</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Have a question, story to share, or want to connect with our community? We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8">
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
            <p className="text-gray-600">Choose your preferred way to reach out</p>
          </div>
          
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-red-100">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:hello@lewagon.com" 
                    className="text-red-600 hover:text-red-700 font-medium text-lg hover:underline transition-colors duration-200"
                  >
                    hello@lewagon.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://twitter.com/lewagon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 font-medium"
                    >
                      <span className="mr-2">🐦</span>
                      Twitter
                    </a>
                    <a 
                      href="https://linkedin.com/school/le-wagon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 font-medium"
                    >
                      <span className="mr-2">💼</span>
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/lewagon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 font-medium"
                    >
                      <span className="mr-2">💻</span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Campus</h3>
                  <p className="text-gray-600 mb-3">
                    We have campuses worldwide! Find the one nearest to you and come say hello.
                  </p>
                  <a 
                    href="https://www.lewagon.com/cities" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105 font-medium"
                  >
                    View all locations 
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p className="text-gray-600">We'll get back to you as soon as possible</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:border-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:border-gray-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:border-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us more about what you'd like to discuss..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 hover:border-gray-300 resize-vertical"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center justify-center">
                Send Message
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </span>
            </button>
          </form>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <div className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-0.5">⚠️</span>
              <p className="text-sm text-yellow-800">
                <strong>Demo Notice:</strong> This is a demo form for educational purposes. In a real application, you'd need to implement proper form handling and validation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}