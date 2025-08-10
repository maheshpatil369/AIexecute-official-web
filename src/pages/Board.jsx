import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

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
  { name: "Soham", title: "Founder & CEO", team: "Core", img: "https://placehold.co/400x400/020018/FFF?text=S" },
  { name: "Alex", title: "Ambassador", team: "Core", img: "https://placehold.co/400x400/020018/FFF?text=A" },
  { name: "Alexi", title: "Ambassador", team: "Core", img: "https://placehold.co/400x400/020018/FFF?text=A" },
  { name: "Dweep", title: "CTO (BS)", team: "Tech", img: "https://placehold.co/400x400/020018/FFF?text=D" },
  { name: "Prasad", title: "COO (BS)", team: "Operations", img: "https://placehold.co/400x400/020018/FFF?text=P" },
  { name: "Abhiram", title: "CIO (BS)", team: "Tech", img: "https://placehold.co/400x400/020018/FFF?text=A" },
  { name: "Urjita", title: "CMO (BS)", team: "Marketing", img: "https://placehold.co/400x400/020018/FFF?text=U" },
  { name: "Tanushree", title: "CTO (LS)", team: "Tech", img: "https://placehold.co/400x400/020018/FFF?text=T" },
  { name: "Om", title: "CMO (LS)", team: "Marketing", img: "https://placehold.co/400x400/020018/FFF?text=O" },
  { name: "Daksh", title: "COO (LS)", team: "Operations", img: "https://placehold.co/400x400/020018/FFF?text=D" },
  { name: "Hardik", title: "CIO (LS)", team: "Tech", img: "https://placehold.co/400x400/020018/FFF?text=H" },
  { name: "Sravan", title: "Chief R&D Officer (BS)", team: "Tech", img: "https://placehold.co/400x400/020018/FFF?text=S" },
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
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={16} /></a>
      </div>
    </div>
  </motion.div>
);

const Board = () => {
  return (
    <div className="w-full text-white px-4 py-16 sm:py-24 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
            Meet The <span className="rainbow-text">AIExecute Board</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            The visionaries, strategists, and innovators leading our charge into the future.
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {boardMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Board;
