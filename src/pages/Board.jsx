import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import Alex from '../assets/Alex Transparent.png'; 
import Alexi from '../assets/Alexi Transparent.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const boardMembers = [
    { name: "Soham Raut", title: "Founder & CEO, AIExecute", team: "Core", img: "/src/assets/Board-persons/1-Soham-Raut.jpg" },
    { name: "Dweep Vartak", title: "Chief Technical Officer (BS)", team: "Tech", img: "/src/assets/Board-persons/2-Dweep-Vartak.jpg" },
    { name: "Prasad Devkar", title: "Chief Operating Officer (BS)", team: "Operations", img: "/src/assets/Board-persons/3-Prasad-Devkar.jpg" },
    { name: "Abhiram Acharya", title: "Chief Innovation Officer (BS)", team: "Tech", img: "/src/assets/Board-persons/4-Abhiram-Acharya.jpg"},
    { name: "Urjita Roy", title: "Chief Marketing Officer (BS)", team: "Marketing", img: "/src/assets/Board-persons/5-Urjita-Roy.jpg" },
    { name: "Tanushree Hajare", title: "Chief Technical Officer (LS)", team: "Tech", img: "/src/assets/Board-persons/6-Tanushree-Hajare.jpg" },
    { name: "Om Raut", title: "Chief Marketing Officer (LS)", team: "Marketing", img: "/src/assets/Board-persons/7-Om-Raut.jpg" },
    { name: "Daksh Tanna", title: "Chief Operating Officer (LS)", team: "Operations", img: "/src/assets/Board-persons/8-Daksh-Tanna.jpg" },
    { name: "Hardik Patel", title: "Chief Innovation Officer (LS)", team: "Tech", img: "/src/assets/Board-persons/9-Hardik-Patel.jpg" },
];

const MemberCard = ({ member }) => (
  <motion.div
    className="relative group text-center"
    variants={itemVariants}
    whileHover={{ y: -6 }}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
    <div className="relative p-4 sm:p-6 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 h-full flex flex-col items-center justify-center">
      <img src={member.img} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 border-2 border-white/20 object-cover" />
      <h3 className="text-base sm:text-lg font-bold text-white">{member.name}</h3>
      <p className="text-purple-300 text-xs sm:text-sm">{member.title}</p>
      <div className="flex gap-3 mt-3">
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={16} /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={16} /></a>
      </div>
    </div>
  </motion.div>
);

const Board = () => {
  return (
   <div
  className="relative w-full text-white px-4 py-16 sm:py-24 md:px-8 lg:px-16 min-h-screen"
  style={{
    background: 'radial-gradient(circle at 50% 50%, rgba(30, 0, 60, 0.5), transparent 70%)'
  }}
>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
            Meet The <span className="rainbow-text">AIExecute Board</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
           The navigators steering AIExecute through every frontier of innovation.
          </p>
        </motion.div>

        {/* Board Members Layout */}
        <div className="flex flex-col items-center gap-y-8">
        
          {/* Founder */}
          <motion.div 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {boardMembers.slice(0, 1).map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>

          {/* Second Row (4 members) */}
          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {boardMembers.slice(1, 5).map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>

          {/* Third Row (4 members) */}
          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {boardMembers.slice(5, 9).map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Alexi Image (Fixed Bottom Left) */}
      <motion.img
        src={Alexi}
        alt="Alexi Character"
        className="hidden lg:block fixed bottom-0 left-0 h-1/3 object-contain z-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      />
      {/* Alex Image (Fixed Bottom Right) */}
      <motion.img
        src={Alex}
        alt="Alex Character"
        className="hidden lg:block fixed bottom-0 right-0 h-1/3 object-contain z-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      />
    </div>
  );
};

export default Board;
