import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-orange-500 text-black p-4 shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
        
            <Image
              src="/images/YTDEvs_icon.png" // Update this with your logo image path
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
        
        </Link>
      </div>

      {/* Language Selector */}
      <div className="text-purple-800">
        <Image
              src="/images/language.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-orange-500 p-4 shadow-md rounded-md w-48">
          <Link href="/" className="block p-2 text-black">Home
          </Link>
          <Link href="/about" className="block p-2 text-black">About
          </Link>
          <Link href="/contact" className="block p-2 text-black">Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
