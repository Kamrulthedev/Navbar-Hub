import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-serif text-white">Navbar</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-blue-700`}>
        <div className="relative">
          <button className="w-full text-white py-2 px-4 text-left">
            Menu
          </button>
          <div className={`${isMobileMenuOpen ? "block" : "hidden"} w-full bg-blue-800`}>
            <a href="#" className="block text-white py-2 px-4">Home</a>
            <a href="#" className="block text-white py-2 px-4">About</a>
            <a href="#" className="block text-white py-2 px-4">Services</a>
            <a href="#" className="block text-white py-2 px-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;