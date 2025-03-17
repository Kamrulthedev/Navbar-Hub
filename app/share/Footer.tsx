import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10 mt-10">
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Navbar Hub</h2>
                    <p className="text-gray-400">Your go-to platform for beautifully designed and fully responsive navbars.</p>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-gray-500">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-500">Services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-500">Portfolio</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-500">Contact</a></li>
                    </ul>
                </div>
                
                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="text-gray-400 hover:text-gray-500 text-xl"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-gray-500 text-xl"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-gray-500 text-xl"><FaInstagram /></a>
                        <a href="#" className="text-gray-400 hover:text-gray-500 text-xl"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Navbar Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;