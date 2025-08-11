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
    <div className="relative z-10 flex flex-col items-center min-h-screen text-center px-6">
      {/* Logo */}
      <motion.img
        src={AILogo}
        alt="AIExecute Logo"
        className="w-80 h-auto md:w-[24rem] mb-8 mt-32"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Heading */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
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

        {/* Tagline */}
        <p className="font-dancing text-base md:text-lg tracking-[0.05em] font-semibold rainbow-text max-w-2xl">
          Your one-stop platform to create AI, drive innovation and Learn Tech shaping the future.
        </p>
      </motion.div>

      {/* Bottom text */}
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
      className="home-background relative"
      style={{
        '--glow-opacity': 1,
      }}
    >
      {/* Left and Right Light Glow */}
      <div
        className="absolute top-[-200px] left-[-300px] w-[900px] h-[900px] rounded-full pointer-events-none z-0 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,133,255,var(--glow-opacity)) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-[-200px] right-[-300px] w-[900px] h-[900px] rounded-full pointer-events-none z-0 blur-3xl"
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
