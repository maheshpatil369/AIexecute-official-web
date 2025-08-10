import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Library } from 'lucide-react';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <div className="w-full text-white px-4 py-24 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Main Question Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Who <span className="rainbow-text">Are We?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            At the intersection of innovation and execution, we are more than just a company—we are architects of the future.
          </p>
        </motion.div>

        {/* --- Description Section (2 Boxes) --- */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="relative group" variants={itemVariants}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Journey</h3>
              <p className="text-gray-400 leading-relaxed">
                AIExecute was born from a vision to bridge the gap between complex ideas and tangible, high-impact solutions. We started as a small team of passionate innovators and have grown into a powerhouse of creativity and technical excellence, dedicated to pushing the boundaries of what's possible in the digital realm.
              </p>
            </div>
          </motion.div>
          <motion.div className="relative group" variants={itemVariants}>
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Philosophy</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe in a collaborative and client-centric approach. For us, every project is a partnership. We dive deep to understand your unique challenges and goals, ensuring that the solutions we deliver are not just technologically advanced but also perfectly aligned with your strategic objectives for sustainable growth.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Core Values Section (4 Boxes) --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Our Mission */}
          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Target className="mx-auto mb-4 text-purple-400" size={40} />
              <h4 className="text-xl font-bold mb-2">Our Mission</h4>
              <p className="text-gray-400 text-sm">To empower businesses with transformative technology and drive progress through innovation.</p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Eye className="mx-auto mb-4 text-pink-400" size={40} />
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p className="text-gray-400 text-sm">To be a global leader in intelligent execution, creating a future where technology and creativity converge.</p>
            </div>
          </motion.div>

          {/* C^3 */}
          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Users className="mx-auto mb-4 text-teal-400" size={40} />
              <h4 className="text-xl font-bold mb-2">C³: Creator, Client, Craft</h4>
              <p className="text-gray-400 text-sm">Our core principle, ensuring a seamless fusion of our team's creativity, our client's vision, and our technical craft.</p>
            </div>
          </motion.div>

          {/* AIExecute Library */}
          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Library className="mx-auto mb-4 text-indigo-400" size={40} />
              <h4 className="text-xl font-bold mb-2">AIExecute Library</h4>
              <p className="text-gray-400 text-sm">A proprietary collection of tools and frameworks that accelerate development and ensure excellence.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
