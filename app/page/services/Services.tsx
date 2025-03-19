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
                        <div>
                            <a href="">Home</a>
                        </div>
                     </div>

                </nav>
            </div>
        </div>
    );
};

export default Services;