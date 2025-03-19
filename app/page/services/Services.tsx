import React, { useState } from 'react';
import { Link } from 'react-router';

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
                     <div className='ml-10 p-1 flex justify-between items-center'>
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
                     </div>

                </nav>
            </div>
        </div>
    );
};

export default Services;