import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import AILogo from '../assets/bg-aiexecute.png';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HeroSection = () => {
  const headingText = "Welcome to AIExecute...!";

  return (
    <div className="relative z-10 flex flex-col items-center min-h-screen text-center px-4 sm:px-6 justify-center">
      {/* Logo */}
      <motion.img
        src={AILogo}
        alt="AIExecute Logo"
        className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto mb-4 sm:mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Heading & Tagline */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold rainbow-text mb-3 sm:mb-4 flex flex-wrap justify-center"
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

        <p className="font-dancing text-sm sm:text-base md:text-lg tracking-[0.02em] sm:tracking-[0.05em] font-semibold rainbow-text max-w-sm sm:max-w-lg md:max-w-2xl px-2">
          YOUR ONE-STOP PLATFORM TO CREATE AI, DRIVE INNOVATION AND LEARN TECH SHAPING THE FUTURE.
        </p>
      </motion.div>

      {/* Bottom text */}
      <motion.p
        className="absolute bottom-3 sm:bottom-4 text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.35em] font-semibold rainbow-text px-2"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Learn &bull; Build &bull; Grow &bull; Execute
      </motion.p>
    </div>
  );
};



const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // scroll distance to fade out
      const opacity = Math.max(0, 1 - scrollTop / maxScroll);
      document
        .querySelector('.home-background')
        ?.style.setProperty('--glow-opacity', opacity.toString());
    };
    window.addEventListener('scroll', handleScroll);
    document.body.style.overflowX = 'hidden'; // prevent horizontal scroll
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <div
      className="home-background relative overflow-hidden"
      style={{
        '--glow-opacity': 1,
      }}
    >
      {/* Left and Right Light Glow */}
      <div
        className="absolute top-[-120px] left-[-400px] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full pointer-events-none z-0 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,133,255,var(--glow-opacity)) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[-120px] right-[-400px] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full pointer-events-none z-0 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,133,255,var(--glow-opacity)) 0%, transparent 70%)',
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="bg-inherit relative z-10">
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
  );
};

export default HomePage;
