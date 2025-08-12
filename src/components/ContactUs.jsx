// src/pages/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  MoveUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <div
        className="p-1 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743]
        hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/50"
        style={{ width: 44, height: 44 }}
      >
        <Instagram size={28} className="text-white" />
      </div>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <Youtube
        size={32}
        className="text-red-600 hover:text-red-700 transition-colors duration-300 hover:drop-shadow-[0_0_8px_#ff0000aa]"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <Linkedin
        size={32}
        className="text-blue-600 hover:text-blue-700 transition-colors duration-300 hover:drop-shadow-[0_0_8px_#0066ffaa]"
      />
    ),
  },
];

const Contact = () => {
  return (
    <div className="w-full text-white px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-between">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto w-full pt-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <h1 className="text-[2.2rem] md:text-[3rem] font-extrabold uppercase tracking-[0.25em] leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-400 mt-1 text-base md:text-lg font-light">
            Let's connect. We’re excited to hear from you.
          </p>
        </motion.div>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-purple-300 font-medium text-center mb-8 text-base md:text-lg tracking-wide"
        >
          @contact@aiexecute.com
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 mb-12 flex flex-col items-center"
        >
          <motion.a
            href="#"
            variants={itemVariants}
            className="group flex items-center justify-center gap-3 w-full max-w-md py-3 px-6
            rounded-lg border border-white/20 bg-white/5 hover:border-purple-500/60 hover:bg-purple-500/10
            text-sm md:text-base font-medium transition-all duration-300 shadow-sm hover:shadow-purple-500/30"
            whileHover={{ y: -3 }}
          >
            <Calendar className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
            Build with AIExecute - Schedule our Meet!
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          <motion.a
            href="mailto:contact@aiexecute.com"
            variants={itemVariants}
            className="group flex items-center justify-center gap-3 w-full max-w-sm py-2.5 px-6
            rounded-lg border border-white/20 bg-white/5 hover:border-pink-500/60 hover:bg-pink-500/10
            text-sm md:text-base font-medium transition-all duration-300 shadow-sm hover:shadow-pink-500/20"
            whileHover={{ y: -3 }}
          >
            Write to Us
            <MoveUpRight className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
          </motion.a>
        </motion.div>
        
        {/* Call to Action Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center w-full mb-12"
        >
          <motion.button
            className="w-auto py-3 px-10 rounded-lg text-base font-semibold text-white
                       bg-gradient-to-r from-purple-500 to-pink-500
                       hover:bg-gradient-to-l hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500
                       transition-all duration-500 shadow-lg hover:shadow-purple-500/40"
            whileHover={{ y: -3 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-8"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.15 }}
              className="inline-flex items-center justify-center"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-gray-500 pb-4 text-xs tracking-wide"
      >
        © 2025 AIExecute. All Rights Reserved.
      </motion.footer>
    </div>
  );
};

export default Contact;