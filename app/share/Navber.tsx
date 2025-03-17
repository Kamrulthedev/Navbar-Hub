import { useState } from "react";
import { Link } from "react-router-dom"; // React Router v6 এর জন্য

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-50 p-4 text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-serif">
          <Link className="font-bold text-indigo-500" to="/">Navbar Hub</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 text-2xl font-serif">
          <a href="/" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">Home</span></a>
          <a href="/about" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">About</span></a>
          <a href="/news" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">News</span></a>
          <a href="/services" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">Services</span></a>
          <a href="#" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">Contact</span></a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-indigo-700 hover:text-indigo-950 hover:shadow-2xl active:scale-90 transition-all duration-150 ease-out"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Animation & Blur */}
      <div
        className={`fixed top-0 left-0 w-full h-96 bg-black/30 backdrop-blur-md flex justify-center transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="relative w-full bg-white rounded-b-xl shadow-lg transition-all duration-300 transform p-4">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
            onClick={toggleMobileMenu}
          >
            ✖
          </button>

          {/* Navigation Links */}
          <div className="mt-8 flex flex-col space-y-4 text-start text-2xl font-serif">
            <a href="#" className="block text-gray-700 hover:text-indigo-600 text-lg py-3">Home</a>
            <a href="/about" className="block text-gray-700 hover:text-indigo-600 text-lg py-3">About</a>
            
 <a href="/news" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">News</span></a>
            <a className="block text-gray-700 hover:text-indigo-600 text-lg py-3">Services</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 text-lg py-3">Contact</a>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
