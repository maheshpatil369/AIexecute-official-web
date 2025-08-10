import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import AILogo from '../assets/bg-aiexecute.png';

// Animation variants remain the same
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

const HeroSection = ({ opacity }) => {
  return (
    <div
      className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 py-10" // Changed justify-between to justify-center
      style={{ opacity: opacity, transition: 'opacity 0.3s ease-out' }}
    >
      {/* Main content container */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center" // Removed mt-10 to allow vertical centering
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo (larger now) */}
        <motion.img
          src={AILogo}
          alt="AIExecute Logo"
          className="w-64 h-auto md:w-80 mb-12" // Increased size and bottom margin
          variants={itemVariants}
        />

        {/* Combined & Styled Headings */}
        <motion.div
            className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 mb-14"
            variants={itemVariants}
        >
            <p className="leading-snug">Learning Anything Into Everything</p>
            <p className="leading-snug">Through Action Into Excellence</p>
        </motion.div>

        {/* The button has been removed */}

      </motion.div>

      {/* Bottom tagline */}
      <motion.p
        className="absolute bottom-8 text-sm md:text-base uppercase tracking-[0.35em] font-semibold rainbow-text"
        variants={itemVariants}
        // Added initial and animate props to the tagline for consistency
        initial="hidden"
        animate="visible"
      >
        Learn &bull; Build &bull; Grow &bull; Execute
      </motion.p>
    </div>
  );
};

const HomePage = ({ opacity }) => {
  return (
    <div>
      <HeroSection opacity={opacity} />
      <div id="projects">
        <Services />
      </div>
      <Projects />
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
