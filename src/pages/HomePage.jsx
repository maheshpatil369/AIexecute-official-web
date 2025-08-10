import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import AILogo from '../assets/bg-aiexecute.png';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- HeroSection ---
const HeroSection = ({ opacity }) => {
  return (
    <div
      className="relative z-10 flex flex-col min-h-screen text-center px-6"
      style={{ opacity: opacity, transition: 'opacity 0.3s ease-out' }}
    >
      {/* Spacer to push content down */}
      <div className="flex-grow" style={{ flexGrow: 1.5 }}></div>

      {/* This container centers the logo and the text block below it */}
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Centered Logo */}
        <motion.img
          src={AILogo}
          alt="AIExecute Logo"
          className="w-64 h-auto md:w-80 mb-12" 
          variants={itemVariants}
        />
        
        {/* All text content with unified styling */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl md:text-3xl uppercase tracking-[0.35em] font-semibold rainbow-text mb-4">
            Welcome to AIExecute !
          </h1>
          <p className="text-base md:text-lg uppercase tracking-[0.35em] font-semibold rainbow-text max-w-2xl">
            Your one-stop platform to create AI, drive innovation and Learn Tech shaping the future.
          </p>
        </motion.div>
      </motion.div>

      {/* Spacer to push tagline to the bottom */}
      <div className="flex-grow" style={{ flexGrow: 2 }}></div>

      {/* Bottom Tagline, positioned very close to the bottom */}
      <motion.p
        className="text-sm md:text-base uppercase tracking-[0.35em] font-semibold rainbow-text pb-3"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Learn &bull; Build &bull; Grow &bull; Execute
      </motion.p>
    </div>
  );
};



// --- Main HomePage Component ---
const HomePage = ({ opacity }) => {
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeEnd = 600; // The scroll distance over which the background fades
      const newOpacity = Math.max(0, 1 - scrollY / fadeEnd);
      setBgOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section with scroll-controlled background opacity */}
      <div
        className="hero-background-effect fixed inset-0" // Made background fixed
        style={{ opacity: bgOpacity, zIndex: -1 }} // Use z-index to place it behind content
      />

      {/* All content is now in a single flow */}
      <div>
        <HeroSection opacity={opacity} />
        <div className="bg-[#020018]">
          <div id="services">
            <Services />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
