import React from 'react';
import Projects from '../components/Projects';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';

// This is the new Hero section component
const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">Looking for next-gen tech...?</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          Your Vision, Our Innovation:
        </h1>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-8">
          AIExecute
        </h2>
        <p className="text-lg text-gray-300 mb-12">Welcome!</p>
        <a href="#projects" className="inline-flex items-center bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg border border-white/30 transition-colors duration-300">
          See our work
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};


const HomePage = () => {
  return (
    <div>
      {/* The new Hero Section is now the first thing on the page */}
      <HeroSection />

      {/* Your other sections remain below */}
      <div id="projects">
        <Projects />
      </div>
      <Services />
      <ContactUs />
    </div>
  );
};

export default HomePage;
