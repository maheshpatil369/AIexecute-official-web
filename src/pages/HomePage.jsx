import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
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

      {/* Bottom Gradient Bar */}
      <motion.div
        className="px-6 py-3 bg-gradient-to-r from-green-300/10 via-purple-400/10 to-purple-500/10 rounded-sm"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold tracking-[0.35em] text-lg md:text-xl uppercase">
          Learn • Build • Grow • Execute
        </p>
      </motion.div>
    </div>
  );
};


const HomePage = () => {
  // Scroll glow effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const opacity = Math.max(0, 1 - scrollTop / maxScroll);
      document
        .querySelector(".home-background")
        ?.style.setProperty("--glow-opacity", opacity.toString());
    };

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflowX = "hidden";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div
      className="home-background relative overflow-hidden bg-[#020B2D]"
      style={{
        "--glow-opacity": 1,
      }}
    >
      {/* Left Glow */}
      <div
        className="absolute top-1/2 -left-72 w-[500px] h-[500px] rounded-full bg-cyan-500/30 blur-[150px] transform -translate-y-1/2"
      />
      {/* Right Glow */}
      <div
        className="absolute top-1/2 -right-72 w-[500px] h-[500px] rounded-full bg-cyan-500/30 blur-[150px] transform -translate-y-1/2"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Sections */}
      <div className="bg-inherit relative z-10">
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
