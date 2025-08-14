import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../assets/services-logo/1.png';
import logo2 from '../assets/services-logo/2.png';
import logo3 from '../assets/services-logo/3.png';
import logo4 from '../assets/services-logo/4.png';
import logo5 from '../assets/services-logo/5.png';
import logo6 from '../assets/services-logo/6.png';
import logo7 from '../assets/services-logo/7.png';
import logo8 from '../assets/services-logo/8.png';
import logo9 from '../assets/services-logo/9.png';
import logo10 from '../assets/services-logo/10.png';
import logo11 from '../assets/services-logo/11.png';
import logo12 from '../assets/services-logo/12.png';
import logo13 from '../assets/services-logo/13.png';
import logo14 from '../assets/services-logo/14.png';
import logo15 from '../assets/services-logo/15.png';
import logo16 from '../assets/services-logo/16.png';
import logo17 from '../assets/services-logo/17.png';
import logo18 from '../assets/services-logo/18.png';
import logo19 from '../assets/services-logo/19.png';
import logo20 from '../assets/services-logo/20.png';
import logo21 from '../assets/services-logo/21.png';

const allServices = [
  { title: "Artificial Intelligence", description: "We develop smart AI systems that automate reasoning, learning, and human-like interactions.", logo: logo1 },
  { title: "Data Science", description: "We build intelligent data solutions that turn complex datasets into actionable business insights.", logo: logo2 },
  { title: "Web Development", description: "We craft responsive, fast, and secure websites tailored for user engagement and business growth.", logo: logo3 },
  { title: "App Development", description: "We develop seamless, cross-platform mobile apps that deliver powerful user experiences.", logo: logo4 },
  { title: "AR/VR Development", description: "We create immersive AR/VR experiences for gaming, training, marketing, and education.", logo: logo5 },
  { title: "Software Development", description: "We engineer robust, scalable software solutions tailored to your unique business needs.", logo: logo6 },
  { title: "Business Intelligence", description: "We deliver automated BI systems and dashboards that convert data into strategic growth tools.", logo: logo7 },
  { title: "Automation", description: "We automate workflows and systems to reduce manual effort and boost operational efficiency.", logo: logo8 },
  { title: "Generative AI", description: "We build next-gen generative models for AI-powered content creation in text, visuals, and audio.", logo: logo9 },
  { title: "Cloud & Big Data", description: "We provide cloud-native, big data solutions for fast, secure, and scalable information processing.", logo: logo10 },
  { title: "Data Analytics", description: "We uncover patterns and trends to empower decision-making through real-time analytics and visualization.", logo: logo11 },
  { title: "Data Engineering", description: "We design and manage high-performance data pipelines and storage architectures for scalable analytics.", logo: logo12 },
  { title: "Machine Learning", description: "We create predictive models that adapt, learn, and drive data-informed outcomes across industries.", logo: logo13 },
  { title: "Computer Vision", description: "We engineer visual intelligence systems for image detection, video analysis, and facial recognition.", logo: logo14 },
  { title: "UI/UX Design", description: "We design intuitive, user-first interfaces that enhance engagement and usability.", logo: logo15 },
  { title: "Game Development", description: "We build interactive, high-performance games with engaging storytelling and mechanics.", logo: logo16 },
  { title: "3D Modelling", description: "We craft lifelike 3D assets and integrate AI for smart, interactive virtual environments.", logo: logo17 },
  { title: "Blockchain", description: "We build secure blockchain solutions including DApps, smart contracts, and decentralized systems.", logo: logo18 },
  { title: "Quantitative Research", description: "We design data-driven financial and market models that optimize risk, return, and forecasting accuracy.", logo: logo19 },
  { title: "Cybersecurity", description: "We protect digital assets with security frameworks, testing and real-time monitoring.", logo: logo20 },
  { title: "Creative Media Production", description: "We provide end-to-end video editing, motion graphics, and videography services to craft impactful visual stories powered by technology.", logo: logo21 },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Services = () => {
  return (
    // Added pt-24 for top padding to avoid overlap with navigation
    <div className="w-full text-white px-4 md:px-8 lg:px-16 pb-16 pt-24">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.35em] rainbow-text mb-4 break-words max-w-xs sm:max-w-full mx-auto leading-snug">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
          We transform ideas into reality by offering a wide spectrum of services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden p-6 sm:p-8 rounded-xl border border-white/10 bg-black/30 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 10px 25px rgba(128, 0, 128, 0.3)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <img src={service.logo} alt={`${service.title} logo`} className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 break-words">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
