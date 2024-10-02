'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Reusable links array
  const navLinks = [
    { href: '#heroSection', label: 'Home' },
    { href: '/xpData', label: 'Explore Data' },
    { href: '/lessonPlans', label: 'Lesson Plans' },
    { href: '#', label: 'Activities & Games' },
    { href: '/learnAboutPACE', label: 'Learn About PACE' },
    { href: '/teacherResources', label: 'Teacher Resources' },
  ];

  return (
    <div>

      <header className="w-full bg-dark-blue-900 text-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <h3>Logo</h3>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-20">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="focus:outline-none"
              aria-label="Toggle mobile menu"
            >
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
          <div className="md:hidden bg-dark-blue-900" id="mobile-menu">
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-2 px-4 hover:bg-gray-800">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main>
        <section className="bg-hero bg-cover bg-center h-screen flex items-center justify-center text-white" id="heroSection">
          <div className="text-center bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Welcome to PACE Mission</h1>
              <p className="mb-6 text-lg">
                Explore Earth’s oceans and atmosphere with real-time data from the PACE mission.
              </p>
              <Link href='https://eyes.nasa.gov/apps/earth/?fbclid=IwZXh0bgNhZW0CMTAAAR2xZ5cD7sLzYpbaCeF4ztKEDZuyGPSKCDoiQOZZWrVdktI38FvPRAA7caU_aem_TSh5511xVrPCEZJGyd2vvg#/vital-signs/chlorophyll/chlorophyll-today' className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-full">
                Explore Data
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Overview Section */}
        <section className="grid grid-cols-2 items-center bg-gray-100">
        <div className="py-16 bg-gray-100 text-center w-[80%]">
  <h2 className="text-3xl font-semibold mb-6 text-dark-blue-900">Mission Overview</h2>
  <video
    autoPlay
    muted
    loop
    className="mx-auto w-3/4 rounded-lg shadow-lg "
  >
    <source src="/videos/vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-dark-blue-900 text-center">Adipisicing elit. In, repudiandae!</h3>
            <div className="py-8 px-5 bg-dark-blue-900 mx-auto w-3/4 rounded-lg shadow-lg">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>

              <div className="flex gap-2.5 items-center pt-5">
                <button className="bg-blue-500 text-dark-blue-900 rounded-lg py-1.5 px-3 shadow-blue-800 shadow-md hover:bg-white">
                  <link href='https://eyes.nasa.gov/apps/earth/?fbclid=IwZXh0bgNhZW0CMTAAAR2xZ5cD7sLzYpbaCeF4ztKEDZuyGPSKCDoiQOZZWrVdktI38FvPRAA7caU_aem_TSh5511xVrPCEZJGyd2vvg#/vital-signs/chlorophyll/chlorophyll-today'>
                  Explore Data </link>
                </button>
                <button className="bg-white text-dark-blue-900 rounded-lg py-1.5 px-3 shadow-gray-800 shadow-md hover:bg-blue-500">
                  Lesson Plan
                </button>
                <button className="bg-blue-500 text-dark-blue-900 rounded-lg py-1.5 px-3 shadow-blue-800 shadow-md hover:bg-white">
                  Quiz & Game
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Latest News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array(3).fill(null).map((_, index) => (
                <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl text-dark-blue-900 font-bold mb-2">New Ocean Color Data Available</h3>
                  <p className="text-gray-600">
                    Explore the latest ocean color data captured by the PACE missions Ocean Color Instrument.
                  </p>
                  <Link href={'#'} className="text-blue-500 mt-4 inline-block">Read More</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About The Project */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-dark-blue-900">
              About the Project
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Background</h3>
                <p className="text-gray-700">
                  Your website, which utilizes NASA PAISE satellite data...
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Goals</h3>
                <p className="text-gray-700">
                  The project aims to engage students with interactive lessons...
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Learn More</h3>
                <p className="text-gray-700">
                  Join us in exploring the data, engaging in discussions...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-dark-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} PACE Mission. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
