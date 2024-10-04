'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const LessonPlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header Section */}
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
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Game Header */}
          <div className="bg-dark-blue-900 p-6">
            <h2 className="text-3xl text-white font-bold">Game Name: OceanQuest</h2>
          </div>

          {/* Game Content */}
          <div className="p-6">
            <p className="text-gray-700 text-lg mb-6">
            Welcome to OceanQuest, an interactive learning game that simplifies and engages students with satellite data from NASA’s PACE (Plankton, Aerosol, Cloud, ocean Ecosystem). Built for the NASA Space Apps Challenge 2024, this game turns complex environmental data into an immersive experience, empowering players to explore real-world issues like ocean health, climate change, and pollution.

Introduction
OceanQuest is designed to bring NASA’s PACE satellite data to life, making it accessible and fun for students and educators. In this game, players embark on a mission to explore Earth’s oceans, track pollution, monitor phytoplankton growth, and protect marine ecosystems using real satellite data. The game incorporates augmented reality (AR) and dynamic animations to offer a unique, engaging learning experience.
            </p>

            {/* Open Modal Button */}
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-4"
            >
              Play Ocean Explorer
            </button>

            {/* Download Game Link */}
            <a
              href="#"
              className="block text-blue-600 hover:underline"
              download="OceanExplorerGame.zip"
            >
              Download Ocean Explorer
            </a>
          </div>
        </div>
      </main>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full h-full">
            {/* Modal Header */}
            <div className="absolute top-0 left-0 w-full bg-dark-blue-900 p-4 flex justify-between items-center">
              <h2 className="text-2xl text-white">Ocean Explorer</h2>
              <button onClick={closeModal} className="text-white text-3xl">&times;</button>
            </div>

            {/* Fullscreen Game Content */}
            <div className="w-full h-full">
              {/* Unity Game */}
              <iframe
                src="https://play.unity.com/en/games/7d74707b-2238-4aa4-ad3a-fe818d4353b6/webgl-builds"
                title="Ocean Explorer Game"
                className="w-full h-full border-none"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPlans;
