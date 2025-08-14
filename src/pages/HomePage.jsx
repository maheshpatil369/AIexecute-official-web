import React from "react";
import { motion } from "framer-motion";
import ContactUs from "../components/ContactUs";
import MiddlePage from "./MiddlePage"; // Import the new MiddlePage
import AILogo from "../assets/bg-aiexecute.png";

// Animation variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6">
      
      {/* Logo */}
      <motion.img
        src={AILogo}
        alt="AIExecute Logo"
        className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto mb-6 mt-16"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Tagline */}
      <motion.p
        className="text-white text-sm sm:text-base md:text-lg max-w-3xl tracking-widest font-light uppercase mb-10"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        YOUR ONE-STOP PLATFORM TO BUILD AI, <br />
        DRIVE INNOVATION AND LEARN TECH SHAPING THE FUTURE.
      </motion.p>

      {/* Bottom Gradient Bar with Rainbow Hover Effect */}
     <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="rainbow-text font-semibold tracking-[0.35em] text-lg md:text-xl uppercase">
          Learn • Build • Grow • Execute
        </p>
      </motion.div>

    </div>
  );
};


const HomePage = () => {
  return (
    <div className="home-background relative overflow-hidden bg-transparent">
      {/* Hero Section */}
      <HeroSection />

      {/* Sections */}
      <div className="bg-inherit relative z-10">
        <section id="middle">
        </section>
            <MiddlePage />
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
