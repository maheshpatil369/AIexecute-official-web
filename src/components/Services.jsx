import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Service data can be easily expanded here
const allServices = [
  { title: "Web Development", description: "Crafting beautiful and performant websites tailored to your needs." },
  { title: "App Development", description: "Building intuitive mobile applications for both iOS and Android platforms." },
  { title: "SaaS Solutions", description: "Developing scalable and secure Software-as-a-Service products." },
  { title: "AI & ML Integration", description: "Leveraging Artificial Intelligence to build smarter applications." },
  { title: "Cloud Services", description: "Architecting robust cloud infrastructure for reliability and scale." },
  { title: "UI/UX Design", description: "Creating stunning user interfaces that are a joy to use." },
  { title: "DevOps & Automation", description: "Streamlining development pipelines for faster, reliable releases." },
  { title: "E-commerce Platforms", description: "Building feature-rich online stores to drive your business." },
  { title: "Big Data & Analytics", description: "Turning large datasets into actionable business intelligence." },
  { title: "Cybersecurity", description: "Protecting your digital assets with advanced security solutions." },
  { title: "Blockchain Development", description: "Innovating with decentralized applications and smart contracts." },
  { title: "Consulting", description: "Providing expert guidance to solve your toughest technology challenges." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const initialServices = allServices.slice(0, 6);
  const servicesToShow = showAll ? allServices : initialServices;

  return (
    <div className="w-full text-white px-4 py-24 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our <span className="rainbow-text">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We transform ideas into reality by offering a wide spectrum of services. Here's how we can help you excel.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesToShow.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden p-8 rounded-xl border border-white/10 bg-black/30 hover:bg-white/5 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 10px 30px rgba(128, 0, 128, 0.3)' }}
            >
              {/* This is the new shine element */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{service.title}</h3>
                <p className="text-gray-400 text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="relative inline-block overflow-hidden text-white font-semibold py-3 px-10 rounded-lg border border-white/30 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:border-white/60 hover:bg-white/10"
            >
              <span className="relative z-10">View All Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
