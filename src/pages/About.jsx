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
    <div className="relative w-full text-white px-4 py-24 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
              <p className="text-gray-400 text-sm">To make learning and innovation accessible, practical and empowering for every individual and organization.</p>
            </div>
          </motion.div>

          {/* Our Vision */}
          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Eye className="mx-auto mb-4 text-pink-400" size={40} />
              <h4 className="text-xl font-bold mb-2">Our Vision</h4>
              <p className="text-gray-400 text-sm">To bridge the gap between ambition and achievement by making AI, Innovation and Execution accessible, practical and impactful for everyone.</p>
            </div>
          </motion.div>

          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Users className="mx-auto mb-4 text-teal-400" size={40} />
              <h4 className="text-xl font-bold mb-2">The Creator Client Club</h4>
              <p className="text-gray-400 text-sm">Building a space where creators don't just promote, but build, blending influence with innovation.</p>
            </div>
          </motion.div>

          <motion.div className="relative group" variants={itemVariants}>
             <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative text-center p-8 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 h-full">
              <Library className="mx-auto mb-4 text-indigo-400" size={40} />
              <h4 className="text-xl font-bold mb-2">AIExecute Library</h4>
              <p className="text-gray-400 text-sm">Building a space to grow intellectually, emotionally and practically through the power of literature.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
