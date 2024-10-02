'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const TeacherResources = () => {
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
                        <h3>Logo</h3>
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
                        <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle Menu">
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
                        Teacher Resources
                    </h2>

                    <p className="text-center text-gray-700 mb-8">
                        Access tools and resources that help integrate PACE data into your curriculum. Explore activities, guides, and webinars to enhance ocean and climate science education in your classroom.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Classroom Activities Database */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Classroom Activities Database</h3>
                            <p className="text-gray-700 mb-4">
                                Explore a searchable library of classroom activities that involve data analysis, experiments, and engaging discussions for all grade levels.
                            </p>
                            <Link href="/classroomActivities" className="inline-block bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                                Explore Activities
                            </Link>
                        </div>

                        {/* PACE Data Guide for Teachers */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">PACE Data Guide for Teachers</h3>
                            <p className="text-gray-700 mb-4">
                                Learn how to access and interpret PACE data to effectively incorporate it into your lesson plans with this easy-to-follow guide.
                            </p>
                            <Link href="/paceDataGuide" className="inline-block bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                                View Guide
                            </Link>
                        </div>

                        {/* Teacher Webinars */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Teacher Webinars</h3>
                            <p className="text-gray-700 mb-4">
                                Watch recorded webinars or sign up for upcoming live sessions to learn how to use PACE resources effectively in your classroom.
                            </p>
                            <Link href="/teacherWebinars" className="inline-block bg-dark-blue-900 text-white py-2 px-4 rounded hover:bg-dark-blue-700 transition-colors">
                                Join Webinars
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TeacherResources;
