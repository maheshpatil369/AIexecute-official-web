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
  const headingText = "Welcome to AIExecute...!";

  return (
    <div
      className="relative z-10 flex flex-col items-center min-h-screen text-center px-6"
      style={{ opacity: opacity, transition: 'opacity 0.3s ease-out' }}
    >
      {/* Bigger logo pushed down */}
      <motion.img
        src={AILogo}
        alt="AIExecute Logo"
        className="w-80 h-auto md:w-[24rem] mb-8 mt-32"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Text directly below logo */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Letter-by-letter heading */}
        <motion.h1
          className="text-2xl md:text-3xl uppercase tracking-[0.35em] font-semibold rainbow-text mb-4 flex flex-wrap justify-center"
          initial="hidden"
          animate="visible"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.05 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
       <p className="font-dancing text-base md:text-lg tracking-[0.05em] font-semibold rainbow-text max-w-2xl">
  Your one-stop platform to create AI, drive innovation and Learn Tech shaping the future.
</p>

      </motion.div>

      {/* Bottom tagline */}
      <motion.p
        className="absolute bottom-4 text-sm md:text-base uppercase tracking-[0.35em] font-semibold rainbow-text"
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
