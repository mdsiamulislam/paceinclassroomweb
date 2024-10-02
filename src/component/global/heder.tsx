'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full bg-dark-blue-900 text-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <h3>Logo</h3>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-10">
                    <Link href="#" className="hover:text-gray-300">Home</Link>
                    <Link href="#" className="hover:text-gray-300">Explore Data</Link>
                    <Link href="#" className="hover:text-gray-300">Lesson Plans</Link>
                    <Link href="#" className="hover:text-gray-300">Activities & Games</Link>
                    <Link href="#" className="hover:text-gray-300">Learn About PACE</Link>
                    <Link href="#" className="hover:text-gray-300">Teacher Resources</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-dark-blue-900">
                    <Link href="#" className="block py-2 px-4 hover:bg-gray-800">Home</Link>
                    <Link href="#" className="block py-2 px-4 hover:bg-gray-800">Explore Data</Link>
                    <Link href="#" className="block py-2 px-4 hover:bg-gray-800">Lesson Plans</Link>
                    <Link href="#" className="block py-2 px-4 hover:bg-gray-800">Activities & Games</Link>
                    <Link href="#" className="block py-2 px-4 hover:bg-gray-800">Learn About PACE</Link>
                    <Link href="#" className="block py-2 px-4 hover:bg-gray-800">Teacher Resources</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
