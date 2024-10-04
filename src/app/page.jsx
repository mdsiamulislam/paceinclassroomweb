'use client';
import Link from 'next/link';
import { useState } from 'react';


export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null); // To handle dynamic content

  const toggleMenu = () => setIsPopupOpen(!isPopupOpen);

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null); // Reset content when closed
  };

  const navLinks = [
    { href: '#heroSection', label: 'Home' },
    { href: '/xpData', label: 'Explore Data' },
    { href: '/lessonPlans', label: 'Lesson Plans' },
    { href: '/activitiesGames', label: 'Activities & Games' },
    { href: '/learnAboutPACE', label: 'Learn About PACE' },
    { href: '/teacherResources', label: 'Teacher Resources' },
  ];

  return (
    <div>
      <header className="w-full bg-dark-blue-900 text-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <h3>PACEview</h3>
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
            <button onClick={toggleMenu} aria-expanded={isPopupOpen} aria-controls="mobile-menu" className="focus:outline-none" aria-label="Toggle mobile menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isPopupOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isPopupOpen && (
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
              <h1 className="text-4xl font-bold mb-4">Welcome to PACEview</h1>
              <p className="mb-6 text-lg">
                Explore Earths oceans and atmosphere with real-time data from the PACE mission.
              </p>
              <button
                onClick={() => openPopup('exploreData')}
                className="bg-blue-500 text-white rounded-lg py-2 px-4 shadow-md hover:bg-blue-600 focus:outline-none"
              >
                Explore Live Data
              </button>
            </div>
          </div>
        </section>

        {/* Mission Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100">
          <div className="py-16 text-center w-[80%] mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-dark-blue-900">Mission Overview</h2>
            <video autoPlay muted loop className="mx-auto w-3/4 rounded-lg shadow-lg">
              <source src="/videos/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Link href="/xpData" className="text-blue-500 mt-4 inline-block">Explore Data</Link>
          </div>

          <div className="py-16 text-center w-[80%] mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-dark-blue-900">Game For Everyone</h2>
            <video autoPlay muted loop className="mx-auto w-3/4 rounded-lg shadow-lg">
              <source src="/videos/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              onClick={() => openPopup('game')}
              className="text-blue-500 mt-4 inline-block"
            >
              Play This Game
            </button>
          </div>
        </section>

        {/* News Section and About The Project here... */}



      {/* Popup Component */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full"> {/* Full-screen popup */}
            <button className="absolute top-2 right-2 text-red-500" onClick={closePopup}>X</button>
            {popupContent === 'exploreData' ? (
              <iframe
                src="https://eyes.nasa.gov/apps/earth/?fbclid=IwZXh0bgNhZW0CMTAAAR2PRt8I7tW-0DPEpArU0Qu4kksO8Xx3c8Zm-A6hMtc#/vital-signs/chlorophyll/chlorophyll-today"
                title="Live Data"
                className="w-full h-full"
              />
            ) : (
              <iframe
                src="https://play.unity.com/en/games/7d74707b-2238-4aa4-ad3a-fe818d4353b6/webgl-builds"
                title="Game"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      )}









        {/* News Section */}
        <section className="py-16 px-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Latest News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl text-dark-blue-900 font-bold mb-2">Complex Beauty in the Gulf of Oman</h3>
                  <p className="text-gray-600">
                  On February 8, 2024, NASAs PACE satellite roared into space aboard a SpaceX Falcon 9 rocket. Less than two months later, NASA engineer Joseph ....
                  </p>
                  <Link href='https://earthobservatory.nasa.gov/images/152765/complex-beauty-in-the-gulf-of-oman' className="text-blue-500 mt-4 inline-block">Read More</Link>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl text-dark-blue-900 font-bold mb-2">NASAs ORCA, AirHARP Projects Paved Way for PACE to Reach Space</h3>
                  <p className="text-gray-600">
                  In the early 2000s, a team of scientists at NASA’s Goddard Space Flight Center in Greenbelt, Maryland, prototyped the Ocean Radiometer for ...
                  </p>
                  <Link href='https://www.nasa.gov/missions/pace/nasas-orca-airharp-projects-paved-way-for-pace-to-reach-space/' className="text-blue-500 mt-4 inline-block">Read More</Link>
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <h3 className="text-xl text-dark-blue-900 font-bold mb-2">NASAs PACE Data on Ocean, Atmosphere, Climate Now Available</h3>
                  <p className="text-gray-600">
                  NASA is now publicly distributing science-quality data from PACE, providing first-of-their-kind measurements of ocean health, air quality, ...
                  </p>
                  <Link href='https://www.nasa.gov/earth/nasas-pace-data-on-ocean-atmosphere-climate-now-available/' className="text-blue-500 mt-4 inline-block">Read More</Link>
                </div>
              
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
                The Plankton Aerosol Cloud ocean Ecosystem (PACE) mission, launched on February 8, 2024, enhances our understanding of Earths oceans and atmosphere. Equipped with the Ocean Color Instrument (OCI), SPEXone polarimeter, and HARP2, PACE collects crucial data on phytoplankton communities and aerosol interactions. NASAs open science policy ensures this data is publicly accessible, but its complexity can hinder understanding, especially among young learners. By creating engaging educational materials that simplify this data, we can enhance ocean literacy and inspire students to explore the vital role of oceans in global climate systems.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Goals</h3>
                <p className="text-gray-700">
                <b>Develop Educational Resources:</b> Create a user-friendly website that consolidates PACE data and educational materials, making them accessible to students and teachers worldwide.<hr></hr>
                <b>Interactive Game Creation:</b> Design an engaging game that incorporates PACE data, allowing students to explore ocean and atmospheric science concepts in a fun and interactive way.<hr></hr>
                <b>Informative Presentation Slides:</b> Produce visually appealing slides that educators can use to introduce PACE mission concepts in the classroom, facilitating discussions around ocean literacy and environmental science.<hr></hr>
                <b>Promote Ocean Literacy:</b> Increase awareness and understanding of ocean ecosystems among students by providing captivating and digestible educational materials that enhance their learning experience.<hr></hr>
                <b>Encourage Curiosity and Exploration:</b> Inspire students to engage with real-world data through hands-on activities and projects, fostering a sense of curiosity and a passion for scientific inquiry.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-dark-blue-900">Learn More</h3>
                <p className="text-gray-700">
                Learn more about the PACE satellite mission and its groundbreaking contributions to ocean and atmospheric science. The PACE (Plankton, Aerosol, Cloud, ocean Ecosystem) mission, launched in 2024, collects detailed data on phytoplankton communities, aerosols, and carbon dioxide exchange between the ocean and atmosphere. This data is publicly accessible, thanks to NASA’s open science policy. Dive deeper into the PACE mission by exploring educational resources, interactive lesson plans, and hands-on projects designed to enhance ocean literacy and environmental awareness in classrooms worldwide. Discover how PACE data helps address climate change and fosters curiosity about Earths ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>



    </div>





  );
}
