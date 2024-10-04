'use client'
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import React, { useState } from 'react';


import image1  from '@/app/assets/images/ocean1.png'
import image2  from '@/app/assets/images/ocean2.png'
import image3  from '@/app/assets/images/ocean3.png'
import image4  from '@/app/assets/images/ocean4.png'
import image5  from '@/app/assets/images/ocean5.png'
import image6  from '@/app/assets/images/ocean6.png'



const ExploreData = () => {
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
                        <h3>PACEview</h3>
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
                        Explore Data
                    </h2>

                    <h3 className="text-2xl font-semibold mb-4 text-dark-blue-900">Overview</h3>
                    <p className="text-gray-700 mb-8">
                        A core feature where students and teachers can interact with real PACE data in a visual, easy-to-understand format. This section is divided into subsections based on the types of data: oceans, atmosphere, and aerosols.
                    </p>

                    {/* Ocean Color Data Visualization */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-dark-blue-900">Ocean Color Data Visualization</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Interactive Map:</strong> Display global ocean color data from the Ocean Color Instrument (OCI), showing phytoplankton levels in various regions. Users can hover over or click on areas to get specific data points.
                            </li>
                            <li>
                                <strong>Time-Lapse:</strong> Users can select a date range to see how ocean color and phytoplankton communities have changed over time.
                            </li>
                        </ul>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Image 
                                src={image1}// Use a leading slash for absolute path
                                alt="Ocean Color Data 1"
                                width={500} // Set appropriate width for the image
                                height={300} // Set appropriate height for the image
                                className="rounded-lg shadow-md object-contain"
                            />
                            <Image 
                                src={image2} // Use a leading slash for absolute path
                                alt="Ocean Color Data 2"
                                width={500} // Set appropriate width for the image
                                height={300} // Set appropriate height for the image
                                className="rounded-lg shadow-md object-cover"
                            />
                        </div>
                        <Link href="/ocean-color-visualization"
                            className="inline-block bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors my-16">
                            Explore Ocean Color Data
                        </Link>
                    </div>

                    {/* Atmospheric Aerosols Data */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-dark-blue-900">Atmospheric Aerosols Data</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Aerosol Concentration Maps:</strong> Visualize aerosol particles in the atmosphere using data from SPEXone and HARP2. Color-coded heat maps are used for easy understanding.
                            </li>
                            <li>
                                <strong>Carbon Dioxide Exchange:</strong> Show the relationship between oceans and the atmosphere, visualizing how carbon dioxide is exchanged.
                            </li>
                        </ul>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Image 
                                src={image3} // Use a leading slash for absolute path
                                alt="Ocean Color Data 1"
                                width={500} // Set appropriate width for the image
                                height={300} // Set appropriate height for the image
                                className="rounded-lg shadow-md object-cover"
                            />
                            <Image 
                                src={image4} // Use a leading slash for absolute path
                                alt="Ocean Color Data 2"
                                width={500} // Set appropriate width for the image
                                height={300} // Set appropriate height for the image
                                className="rounded-lg shadow-md object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Image 
                                src={image5} // Use a leading slash for absolute path
                                alt="Ocean Color Data 1"
                                width={500} // Set appropriate width for the image
                                height={300} // Set appropriate height for the image
                                className="rounded-lg shadow-md object-cover"
                            />
                            <Image 
                                src={image6} // Use a leading slash for absolute path
                                alt="Ocean Color Data 2"
                                width={500} // Set appropriate width for the image
                                height={300} // Set appropriate height for the image
                                className="rounded-lg shadow-md object-cover"
                            />
                        </div>
                        <Link href="/atmospheric-aerosols-data"
                            className="inline-block bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                            Explore Atmospheric Aerosol Data
                        </Link>
                    </div>

                    {/* Data Downloads Section */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-dark-blue-900">Data Downloads</h3>
                        <p className="text-gray-700 mb-4">
                            Teachers and students can download specific datasets in CSV format for offline analysis or classroom activities.
                        </p>
                        <Link href="/data-downloads"
                            className="inline-block bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                            Download Data
                        </Link>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-dark-blue-900">Features</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-8">
                        <li>
                            <strong>Filter by Region:</strong> Users can filter data by regions (e.g., Pacific Ocean, Atlantic Ocean, etc.).
                        </li>
                        <li>
                            <strong>Filter by Time:</strong> Users can filter data based on the date or time of interest.
                        </li>
                        <li>
                            <strong>Interactive Visualizations:</strong> All visualizations are interactive, allowing for user engagement.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ExploreData;
