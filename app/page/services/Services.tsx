import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoIosCloseCircle } from "react-icons/io";


const Services = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='mt-5'>
            <section></section>
            <div>
                <nav className="bg-indigo-50 p-4 text-black">
                    <div className='ml-10 p-1 mx-auto flex justify-between items-center'>
                        <h1 className='text-3xl font-serif'>
                            <Link to=''>New Navber</Link>
                        </h1>
                        <div className='font-serif text-lg space-x-10 lg:flex hidden mr-12'>
                            <a href="/" className='text-gray-500 hover:text-gray-700'>Home</a>
                            <a href="/" className='text-gray-500 hover:text-gray-700'>About</a>
                            <a href="/" className='text-gray-500 hover:text-gray-700'>Contact</a>
                            <a href="/" className='text-gray-500 hover:text-gray-700'>Notification</a>
                            <a href="/" className='text-gray-500 hover:text-gray-700'>Profile</a>
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
                    {/* Mobaile Navber Animation  */}
                    <div className={`fixed top-0 left-0 w-full h-96 bg-black/30 backdrop-blur-md flex justify-center transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
                        <div className="relative w-full bg-white rounded-b-xl shadow-lg transition-all duration-300 transform p-4">

                            <button className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
                                onClick={toggleMobileMenu} >

                                <IoIosCloseCircle />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Services;