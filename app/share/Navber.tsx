import { useState } from "react";
import { FaFileContract, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrServices } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link } from "react-router";

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
          <a href="#" className="hover:text-indigo-500 flex gap-1"><span className="text-lg">Home</span></a>
          <a href="#" className="hover:text-indigo-500 flex gap-1"><span className="text-lg"> About</span></a>
          <a href="#" className="hover:text-indigo-500 flex gap-1"><span className="text-lg"> Services</span></a>
          <a href="#" className="hover:text-indigo-500 flex gap-1"><span className="text-lg"> Contact</span></a>
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

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`lg:hidden transform transition-all duration-300 ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="relative">
          <button className="w-full py-2 px-4 text-black text-center">Menu</button>
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
