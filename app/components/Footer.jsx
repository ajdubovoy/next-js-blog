export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              Built with Next.js and ❤️
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.lewagon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 transition-colors duration-200"
            >
              Le Wagon
            </a>
            <a
              href="https://github.com/lewagon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-500 transition-colors duration-200"
            >
              Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
