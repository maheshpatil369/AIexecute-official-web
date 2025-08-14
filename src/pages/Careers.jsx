import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Database, Code, Lightbulb, Clapperboard, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const departments = [
  {
    name: "The Data Den",
    description: "Where insights are discovered and data tells its story.",
    role: "Data Roles",
    icon: <Database size={32} className="text-cyan-400" />,
  },
  {
    name: "The Brain Lab",
    description: "Where artificial intelligence comes to life.",
    role: "AI/ML Roles",
    icon: <BrainCircuit size={32} className="text-pink-400" />,
  },
  {
    name: "The Code Garage",
    description: "Where ideas are engineered into powerful software.",
    role: "SDE Roles",
    icon: <Code size={32} className="text-green-400" />,
  },
  {
    name: "The Idea Studio",
    description: "Where the future is born from groundbreaking concepts.",
    role: "Emerging Roles",
    icon: <Lightbulb size={32} className="text-yellow-400" />,
  },
  {
    name: "The Motion Chamber",
    description: "Where stories are told and brands come alive.",
    role: "Content & Editing",
    icon: <Clapperboard size={32} className="text-orange-400" />,
  },
  {
    name: "The Creator Client Club",
    description: "Where we build relationships and drive growth.",
    role: "UGC & Marketing",
    icon: <Handshake size={32} className="text-purple-400" />,
  },
];

const roles = [
    "Data Science", "Data Analytics", "Business Intelligence", "Data Engineering", "Cloud & Big Data",
    "Artificial Intelligence", "Machine Learning", "Computer Vision", "Generative AI", "Quant Research",
    "Web Development", "App Development", "Software Engineering", "Automation", "Cybersecurity Analyst",
    "UI/UX Design", "AR/VR Development", "Game Design & Development", "3D Modelling", "Blockchain Development",
    "Digital Content Editing", "Content Strategy", "Growth Strategist", "Growth Associate"
];


const Careers = () => {
  return (
    <div className="w-full text-white px-4 py-24 md:px-8 lg:px-16 overflow-hidden cursor-pointer">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.35em] rainbow-text mb-6">
       OUR <span className="rainbow-text">DEPARTMENTS</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
           The specialized engines driving execution across every domain we touch.
          </p>
        </motion.div>

        {/* --- Departments Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {departments.map((dept) => (
            <motion.div
              key={dept.name}
              className="relative group h-full"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
              <div className="relative p-6 sm:p-8 rounded-xl bg-black/70 backdrop-blur-sm border border-white/10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  {dept.icon}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{dept.name}</h3>
                </div>
                <p className="text-gray-400 mb-4 flex-grow text-sm sm:text-base">{dept.description}</p>
                <span className="text-purple-300 font-semibold bg-white/10 px-3 py-1 rounded-full self-start text-xs sm:text-sm">
                  {dept.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* --- New Apply Now Section --- */}
        <motion.div
            className="relative text-center mt-20 sm:mt-24 rounded-2xl p-6 sm:p-10 overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30 animate-gradient-x"></div>
            <div className="relative z-20">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Want to build real things & not just stack certificates on a resume?</h2>
                <p className="text-xl sm:text-2xl font-semibold rainbow-text mb-6">
                    JOIN US TO BUILD, GROW AND EXECUTE!
                </p>
                <a
                    href="http://linktr.ee/AIExecute" // Link to your application form
                    className="relative inline-flex items-center gap-2 overflow-hidden text-white font-semibold py-3 px-8 sm:px-12 rounded-lg border border-white/30 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl hover:border-white/60 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transform hover:scale-105"
                >
                    Apply Now <ArrowRight size={18} />
                </a>
                
                <div className="mt-12 text-left">
                    <h4 className="font-semibold text-lg sm:text-xl mb-4">We onboard for the following roles:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-3">
                        {roles.map(role => (
                            <div key={role} className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                                <CheckCircle size={16} className="text-green-400" />
                                <span>{role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
