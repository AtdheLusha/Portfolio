'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white p-4 mb-[60px] shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center m-[2px]">
                {/* Logo/Nome in Blu */}
                {/* Logo/Nome in Blu */}
                <h1 className="text-2xl pl-0 font-mono text-white tracking-wider">
                    <a href="#home">
                        ALCODE<span className="text-white"></span>
                    </a>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-blue-500 transition duration-300 font-semibold"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-300 hover:text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-gray-900 border-t border-gray-800">
                    <ul className="flex flex-col space-y-4 p-4">
                        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block text-gray-300 hover:text-blue-500 transition duration-300 font-semibold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;