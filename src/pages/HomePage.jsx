import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Library } from 'lucide-react';
import ContactUs from "/src/components/ContactUs";
import MiddlePage from "/src/pages/MiddlePage";
import AILogo from "/src/assets/bg-aiexecute.png";
import ServicesSection from "/src/pages/ServicesSection";
import FeaturedProjects from "/src/pages/FeaturedProjects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Section 1: AIExecute Hero
const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
      <motion.img
        src={AILogo}
        alt="AIExecute Logo"
        className="w-72 sm:w-80 md:w-[28rem] lg:w-[28rem] xl:w-[30rem] h-auto mb-4 mt-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.p
        className="text-white text-sm sm:text-base md:text-lg sm:max-w-md md:max-w-3xl tracking-widest font-light uppercase mb-10"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        YOUR ONE-STOP PLATFORM TO BUILD AI,
        <br className="sm:hidden" /> DRIVE INNOVATION AND LEARN TECH
        <br className="sm:hidden" /> SHAPING THE FUTURE.
      </motion.p>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="rainbow-text font-semibold tracking-[0.2em] sm:tracking-[0.35em] text-sm sm:text-base md:text-xl uppercase whitespace-nowrap">
          Learn • Build • Grow • Execute
        </p>
      </motion.div>
    </div>
  );
};

// Section 2: What is AIExecute
const AboutSection = () => {
  return (
    <div className="relative w-full text-white px-4 py-24 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
         <h1 className="text-3xl md:text-[3rem] font-extrabold uppercase tracking-tight md:tracking-[0.25em] leading-tight mb-4 whitespace-nowrap">
          <span
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent
                       hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500
                       transition-all duration-500"
          >
            What is AIExecute?
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
          AIExecute is an innovation-driven company offering a one-stop solution for individuals, professionals and businesses seeking to thrive in today’s fast-evolving technological world.
        </p>

        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Learning Solutions Section */}
          <motion.div className="relative group" variants={itemVariants}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative p-6 md:p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">
                LEARNING SOLUTIONS
              </h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-center">
                Building a future-ready generation by delivering transformative learning experiences in artificial intelligence, technology, innovation and business strategy.
              </p>
          <p className="font-semibold mt-4 text-center text-lg md:text-xl italic rainbow-text">
            Adapt - Implement - Evolve
           </p>


            </div>
          </motion.div>
          {/* Business Solutions Section */}
          <motion.div className="relative group" variants={itemVariants}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative p-6 md:p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">
                BUSINESS SOLUTIONS
              </h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-center">
                Helping businesses unlock growth through tailored AI solutions, strategic consulting, innovation services and digital transformation.
              </p>
             <p className="font-semibold mt-4 text-center text-lg md:text-xl italic rainbow-text">
                 Assess - Innovate - Empower
             </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Main Home Page Component
const HomePage = () => {
  return (
    <div className="home-background relative overflow-hidden bg-transparent">
      {/* Section 1: AIExecute Hero */}
      <section id="aiexecute">
          <HeroSection />
      </section>

      <div className="bg-inherit relative z-10">
        {/* Section 2: What is AIExecute */}
        <section id="about">
            <AboutSection />
        </section>
        
        {/* Section 3: Services */}
        <section id="services">
            <ServicesSection />
        </section>
        
        {/* Section 4: Our Projects */}
        <section id="projects">
            <FeaturedProjects />
        </section>
        
        {/* Section 5: Discover */}
        <section id="discover">
          <MiddlePage />
        </section>

        {/* Section 6: Contact */}
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default HomePage;

