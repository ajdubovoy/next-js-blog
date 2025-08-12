import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/lewagon-logo.svg" 
                alt="Le Wagon Logo" 
                width={120}
                height={32}
                priority
              />
            </Link>
          </div>
          
          <div className="flex gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}