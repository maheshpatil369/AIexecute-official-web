import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import logo1 from '/src/assets/services-logo/1.png';
import logo2 from '/src/assets/services-logo/2.png';
import logo3 from '/src/assets/services-logo/3.png';
import logo4 from '/src/assets/services-logo/4.png';
import logo5 from '/src/assets/services-logo/5.png';

const featuredServices = [
  { title: "Artificial Intelligence", logo: logo1 },
  { title: "Data Science", logo: logo2 },
  { title: "Web Development", logo: logo3 },
  { title: "App Development", logo: logo4 },
  { title: "AR/VR Development", logo: logo5 },
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="group relative flex-shrink-0 w-64 h-48 sm:w-72 sm:h-56 overflow-hidden p-6 rounded-xl border border-white/10 bg-black/30 flex flex-col justify-center items-center text-center"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <img src={service.logo} alt={`${service.title} logo`} className="h-16 w-16 sm:h-20 sm:w-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
      {service.title}
    </h3>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <div className="w-full text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.35em] rainbow-text mb-4">
            Our Services
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-4 horizontal-scrollbar">
            {featuredServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
             <Link
                to="/services"
                className="relative inline-flex items-center gap-2 overflow-hidden text-white font-semibold py-3 px-8 sm:px-12 rounded-lg border border-white/30 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl hover:border-white/60 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transform hover:scale-105"
            >
                View All Services <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

