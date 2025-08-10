import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import AILogo from '../assets/bg-aiexecute.png';

// Animation variants
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
      className="relative z-10 flex flex-col justify-between items-center min-h-screen text-center px-6 py-10"
      style={{ opacity: opacity, transition: 'opacity 0.3s ease-out' }}
    >
      {/* Top content */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo (bigger now) */}
        <motion.img
          src={AILogo}
          alt="AIExecute Logo"
          className="w-56 h-auto md:w-64 mb-8"
          variants={itemVariants}
        />

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white leading-snug mb-4"
          variants={itemVariants}
        >
          Learning Anything Into Everything
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 mb-14"
          variants={itemVariants}
        >
          Through Action Into Excellence
        </motion.h2>

        {/* Premium Button */}
        <motion.a
          href="#contact"
          className="relative inline-block overflow-hidden text-white font-semibold py-4 px-14 rounded-lg border border-white/30 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:border-white/60 hover:bg-white/10"
          variants={itemVariants}
        >
          <span className="relative z-10">Join Me</span>
          <span className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
        </motion.a>
      </motion.div>

      {/* Bottom tagline moved down */}
      <motion.p
        className="absolute bottom-8 text-sm md:text-base uppercase tracking-[0.35em] font-semibold rainbow-text"
        variants={itemVariants}
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
