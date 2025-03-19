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
                   
                </nav>
            </div>
        </div>
    );
};

export default Services;