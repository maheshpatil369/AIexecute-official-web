import React from 'react';
import { motion } from 'framer-motion';
import { MoveUpRight, Youtube, Instagram, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import AILogo from '../assets/bg-aiexecute.png';
// CORRECTED FILE PATHS
import Alex from '../assets/Alex Transparent.png'; 
import Alexi from '../assets/Alexi Transparent.png';

// Data for the contact cards, matching the design
const contactLinks = [
  {
    name: "Our Brochure",
    description: "A complete guide to our mission, services, and initiatives driving AI, tech, and business innovation.",
    icon: <img src={AILogo} alt="AIExecute Logo" className="w-10 h-10" />,
    href: "#", // Add your brochure link here
  },
  {
    name: "YouTube",
    description: "Watch our videos in English, Hindi and Marathi to learn and explore AI, tech, and innovation.",
    icon: <div className="bg-red-500 p-2 rounded-full"><Youtube size={24} className="text-white" /></div>,
    href: "#", // Add your YouTube link here
  },
  {
    name: "Instagram",
    description: "Catch our daily reels and stories on diverse AI & tech topics, shared in a unique and engaging format.",
    icon: <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-2 rounded-full"><Instagram size={24} className="text-white" /></div>,
    href: "#", // Add your Instagram link here
  },
  {
    name: "LinkedIn",
    description: "Connect with us for professional updates, industry insights, and opportunities to grow.",
    icon: <div className="bg-blue-600 p-2 rounded-full"><Linkedin size={24} className="text-white" /></div>,
    href: "#", // Add your LinkedIn link here
  },
  {
    name: "Mail",
    description: "Reach us anytime for queries, collaborations, or service requests.",
    icon: <div className="bg-gray-600 p-2 rounded-full"><Mail size={24} className="text-white" /></div>,
    href: "mailto:contact@aiexecute.com",
  },
  {
    name: "WhatsApp",
    description: "Chat or call us instantly for quick support and inquiries.",
    icon: <div className="bg-green-500 p-2 rounded-full"><FaWhatsapp size={24} className="text-white" /></div>,
    href: "#", // Add your WhatsApp link here
  },
];

const ContactCard = ({ item }) => (
  <motion.a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group h-full flex flex-col p-6 rounded-2xl bg-[#0A0F2B] border border-white/10 min-h-[180px]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    viewport={{ once: true, amount: 0.5 }}
    whileHover={{ y: -5, scale: 1.02, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)' }}
  >
    <div className="flex items-center gap-4 mb-3">
      {item.icon}
      <h3 className="text-xl font-bold text-white">{item.name}</h3>
    </div>
    <p className="text-gray-400 text-sm flex-grow">{item.description}</p>
    <MoveUpRight className="absolute bottom-4 right-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
  </motion.a>
);

const ContactUs = () => {
  return (
    <div className="relative w-full text-white px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center py-16 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-[0.35em] rainbow-text">
            GET IN TOUCH
          </h1>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactLinks.map((link) => (
            <ContactCard key={link.name} item={link} />
          ))}
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-500 pt-20 text-sm tracking-wide">
          © 2025 AIExecute. All Rights Reserved.
        </footer>
      </div>

      {/* Alex and Alexi Images */}
      <motion.img
        src={Alexi}
        alt="Alexi Character"
        className="hidden lg:block absolute bottom-0 left-0 h-1/2 object-contain"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      />
      <motion.img
        src={Alex}
        alt="Alex Character"
        className="hidden lg:block absolute bottom-0 right-0 h-1/2 object-contain"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      />
    </div>
  );
};

export default ContactUs;
