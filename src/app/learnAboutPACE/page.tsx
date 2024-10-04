'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const LearnAboutPACE = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="w-full bg-dark-blue-900 text-white shadow-md z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <h3>Blue Wave</h3>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-20">
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link href="/xpData" className="hover:text-gray-300">Explore Data</Link>
                        <Link href="/lessonPlans" className="hover:text-gray-300">Lesson Plans</Link>
                        <Link href="/activitiesGames" className="hover:text-gray-300">Activities & Games</Link>
                        <Link href="/learnAboutPACE" className="hover:text-gray-300">Learn About PACE</Link>
                        <Link href="/teacherResources" className="hover:text-gray-300">Teacher Resources</Link>
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
                        <Link href="/" className="block py-2 px-4 hover:bg-gray-800">Home</Link>
                        <Link href="/xpData" className="block py-2 px-4 hover:bg-gray-800">Explore Data</Link>
                        <Link href="/lessonPlans" className="block py-2 px-4 hover:bg-gray-800">Lesson Plans</Link>
                        <Link href="/activitiesGames" className="block py-2 px-4 hover:bg-gray-800">Activities & Games</Link>
                        <Link href="/learnAboutPACE" className="block py-2 px-4 hover:bg-gray-800">Learn About PACE</Link>
                        <Link href="/teacherResources" className="block py-2 px-4 hover:bg-gray-800">Teacher Resources</Link>
                    </div>
                )}
            </header>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10 text-dark-blue-900">
                        Learn About PACE
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* What is PACE? */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">What is PACE?</h3>
                            <p className="text-gray-700 mb-4">
                                The PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) mission aims to enhance our understanding of the Earths oceans and atmosphere. By observing key components such as phytoplankton and aerosols, PACE provides essential data that helps scientists monitor environmental changes and their impacts on climate.
                            </p>
                        </div>

                        {/* Instruments on PACE */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Instruments on PACE</h3>
                            <ul className="space-y-2">
                                <li>
                                    <h4 className="font-semibold text-indigo-500">Ocean Color Instrument (OCI)</h4>
                                    <p className="text-gray-700">
                                        The OCI measures ocean color to provide insights into phytoplankton and other organic materials.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-semibold text-indigo-500">SPEXone</h4>
                                    <p className="text-gray-700">
                                        SPEXone measures aerosol properties in the atmosphere to help understand their effects on climate.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-semibold text-indigo-500">HARP2</h4>
                                    <p className="text-gray-700">
                                        HARP2 captures detailed images of the ocean and atmosphere, enhancing our understanding of climate interactions.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Key Concepts */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Key Concepts</h3>
                            <ul className="space-y-2">
                                <li>
                                    <h4 className="font-semibold text-indigo-500">Phytoplankton and Ocean Color</h4>
                                    <p className="text-gray-700">
                                        Ocean color is a vital indicator of phytoplankton health, which is essential for marine ecosystems.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-semibold text-indigo-500">Aerosols and Climate</h4>
                                    <p className="text-gray-700">
                                        Aerosols influence climate and weather; the PACE mission measures them for better understanding.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-500">PACE Science Glossary</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-8">
                        <li><strong>Aerosol:</strong> A suspension of fine solid particles or liquid droplets in the air.</li>
                        <li><strong>Radiative Balance:</strong> The balance between the energy received from the Sun and the energy radiated back to space.</li>
                        <li><strong>Phytoplankton:</strong> Microscopic marine plants crucial for photosynthesis and oxygen production.</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-indigo-500">Media Resources</h3>
                    <div className="space-y-4 mb-8">
                        <div>
                            <h4 className="font-semibold text-indigo-500">Infographics and Animations</h4>
                            <p className="text-gray-700">
                                Visual aids explaining how the instruments work and what data they gather will help students understand complex concepts better.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-indigo-500">Short Explainer Videos</h4>
                            <p className="text-gray-700">
                                Create videos that break down complex scientific terms and concepts in a student-friendly manner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LearnAboutPACE;
