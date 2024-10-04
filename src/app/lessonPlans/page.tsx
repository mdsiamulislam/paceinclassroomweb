'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const LessonPlans = () => {
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
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">
                        Lesson Plans
                    </h2>

                    <h3 className="text-3xl font-semibold mb-6 text-indigo-500">Overview</h3>
                    <p className="text-gray-700 mb-10 text-lg">
                        This repository contains downloadable, classroom-ready lesson plans that teachers can use to introduce PACE data to students. The plans are categorized by grade level and subject focus for easy access.
                    </p>

                    {/* Elementary School Section */}
                    <div className="mb-10 p-6 border border-gray-300 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-indigo-500">Elementary School (Ages 6-10)</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Introduction to Phytoplankton:</strong> Simple lessons explaining what phytoplankton are, their role in ocean health, and how PACE observes them.
                            </li>
                            <li>
                                <strong>Hands-On Activity:</strong> Have students create ocean ecosystem models using household materials.
                            </li>
                        </ul>
                        <Link href="/downloadable/elementary"
                            className="inline-block mt-4 bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                            Download Lesson Plans
                        </Link>
                    </div>

                    {/* Middle School Section */}
                    <div className="mb-10 p-6 border border-gray-300 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-indigo-500">Middle School (Ages 11-13)</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Understanding Ocean Currents:</strong> Lessons explaining how ocean currents influence climate and the role of satellites in observing them.
                            </li>
                            <li>
                                <strong>Data Activity:</strong> Use simplified PACE data to have students track ocean color changes and make hypotheses about marine health.
                            </li>
                        </ul>
                        <Link href="/downloadable/middle"
                            className="inline-block mt-4 bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                            Download Lesson Plans
                        </Link>
                    </div>

                    {/* High School Section */}
                    <div className="mb-10 p-6 border border-gray-300 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-indigo-500">High School (Ages 14-18)</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>
                                <strong>Climate Change & Ocean Health:</strong> In-depth lessons on how aerosols, carbon exchange, and ocean temperatures are studied using PACE data.
                            </li>
                            <li>
                                <strong>Research Project:</strong> Have students analyze real PACE data to identify trends related to climate change.
                            </li>
                        </ul>
                        <Link href="/downloadable/highschool"
                            className="inline-block mt-4 bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                            Download Lesson Plans
                        </Link>
                    </div>

                    <h3 className="text-3xl font-semibold mb-6 text-indigo-500">Additional Features</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-8 text-lg">
                        <li>
                            <strong>Downloadable PDF or Google Docs:</strong> Lesson plans are available in both printable PDF and editable Google Docs formats.
                        </li>
                        <li>
                            <strong>Teacher Guides:</strong> Detailed teaching guides for each lesson with tips on how to explain key concepts and engage students.
                        </li>
                        <li>
                            <strong>Supplemental Resources:</strong> Links to external resources, videos, or readings that complement the lessons.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default LessonPlans;
