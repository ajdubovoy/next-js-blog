export const metadata = {
  title: 'About | Le Wagon Blog',
  description: 'Learn more about Le Wagon Blog and our journey with Next.js',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About the Le Wagon Blog</h1>

      <div className="prose prose-lg max-w-none text-gray-700">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="mb-4">
            Explore expert insights, inspiring alumni journeys, and stay ahead with exclusive news about tech trends and education.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Cover</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rails fundamentals and best practices</li>
            <li>Real-world project experiences from Le Wagon students</li>
            <li>Industry tips and trends</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Built with a different stack</h2>
          <p className="mb-4">
            This blog is a demonstration of how you can leverage AI to access codebases built in a different stack than you're used to. This block is build in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Next.js 14</h3>
              <p className="text-sm">App Router, Server Components, and optimized performance</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-sm">Utility-first CSS for rapid design</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Markdown</h3>
              <p className="text-sm">Simple content management with frontmatter metadata</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">React</h3>
              <p className="text-sm">Component-based architecture for front-end code</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h2>
          <p className="mb-4">
            Whether you&apos;re a current Le Wagon student, an alumni, or someone interested in web development,
            we welcome you to explore, learn, and grow with us. This blog is more than just tutorials –
            it&apos;s a testament to the power of learning together.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <p className="font-semibold text-red-900">Ready to start coding?</p>
            <p className="text-red-700">
              Check out our latest posts and begin your journey!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect With Us</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.lewagon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Visit Le Wagon
            </a>
            <a
            href="https://github.com/lewagon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
