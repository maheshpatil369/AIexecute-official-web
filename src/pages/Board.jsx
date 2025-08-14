import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';

import sohamRautImg from "/src/assets/Board-persons/1-Soham-Raut.jpg";
import dweepVartakImg from "/src/assets/Board-persons/2-Dweep-Vartak.jpg";
import prasadDevkarImg from "/src/assets/Board-persons/3-Prasad-Devkar.jpg";
import abhiramAcharyaImg from "/src/assets/Board-persons/4-Abhiram-Acharya.jpg";
import urjitaRoyImg from "/src/assets/Board-persons/5-Urjita-Roy.jpg";
import tanushreeHajareImg from "/src/assets/Board-persons/6-Tanushree-Hajare.jpg";
import omRautImg from "/src/assets/Board-persons/7-Om-Raut.jpg";
import dakshTannaImg from "/src/assets/Board-persons/8-Daksh-Tanna.jpg";
import hardikPatelImg from "/src/assets/Board-persons/9-Hardik-Patel.jpg";


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
    { name: "Soham Raut", title: "Founder & CEO, AIExecute", team: "Core", img: sohamRautImg, linkedin: "https://www.linkedin.com/in/soham-raut-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/im_soham_raut_?igsh=aWdrZ21zOGwzbmNt", email: "soham.raut@aiexecute.in" },
    { name: "Dweep Vartak", title: "Chief Technical Officer (BS)", team: "Tech", img: dweepVartakImg, linkedin: "https://www.linkedin.com/in/dweep-vartak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/_dweep_vartak_?igsh=ajV0YWxzcHhsamgx", email: "2004dweep@gmail.com" },
    { name: "Prasad Devkar", title: "Chief Operating Officer (BS)", team: "Operations", img: prasadDevkarImg, linkedin: "https://www.linkedin.com/in/devkarprasad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "#", email: "devkarprasad00@gmail.com" },
    { name: "Abhiram Acharya", title: "Chief Innovation Officer (BS)", team: "Tech", img: abhiramAcharyaImg, linkedin: "https://www.linkedin.com/in/abhiram-acharya-7839aa245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/itz.abhiram?igsh=MmhzeGFwN29kY3k3", email: "acharyaabhiram7@gmail.com" },
    { name: "Urjita Roy", title: "Chief Marketing Officer (BS)", team: "Marketing", img: urjitaRoyImg, linkedin: "https://www.linkedin.com/in/urjita-roy-43501027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/_.urjita_.roy?igsh=MThtdng4NmNncDhhdQ==", email: "royurjita@gmail.com" },
    { name: "Tanushree Hajare", title: "Chief Technical Officer (LS)", team: "Tech", img: tanushreeHajareImg, linkedin: "https://www.linkedin.com/in/tanushree-hajare-4a5182237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/tanuwushree?igsh=cWw2cGh1NDVxd2pu", email: "tanushrihajare@gmail.com" },
    { name: "Om Raut", title: "Chief Marketing Officer (LS)", team: "Marketing", img: omRautImg, linkedin: "https://www.linkedin.com/in/om-raut-a33690337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "#", email: "omrautkeephopes@gmail.com" },
    { name: "Daksh Tanna", title: "Chief Operating Officer (LS)", team: "Operations", img: dakshTannaImg, linkedin: "https://www.linkedin.com/in/daksh-t-271588201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/daksh_tanna?igsh=MTI3cXI2ZTh5Y3Q3cw==", email: "tannadaksh10@gmail.com" },
    { name: "Hardik Patel", title: "Chief Innovation Officer (LS)", team: "Tech", img: hardikPatelImg, linkedin: "https://www.linkedin.com/in/hardik-patel-5a1543261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/hardikthewavv?igsh=MXUxNnRsbWM4aWh6bg==", email: "hardikpatelmr@gmail.com" },
];

const MemberCard = ({ member, colorClasses }) => (
  <motion.div
    className="relative group text-center"
    variants={itemVariants}
    whileHover={{ y: -6 }}
  >
    <div className={`absolute -inset-1 bg-gradient-to-r ${colorClasses} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-tilt`}></div>
    <div className="relative p-4 sm:p-6 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 h-full flex flex-col items-center justify-center">
      <img src={member.img} alt={member.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 border-2 border-white/20 object-cover" />
      <h3 className="text-base sm:text-lg font-bold text-white">{member.name}</h3>
      <p className="text-purple-300 text-xs sm:text-sm">{member.title}</p>
      <div className="flex gap-3 mt-3">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={16} /></a>
        )}
        {member.instagram && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={16} /></a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white transition-colors"><Mail size={16} /></a>
        )}
      </div>
    </div>
  </motion.div>
);

const Board = () => {
  return (
   <div
      className="relative w-full text-white px-4 py-16 sm:py-24 md:px-8 lg:px-16 min-h-screen flex flex-col"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(30, 0, 60, 0.5), transparent 70%)'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex-grow w-full">
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
           The navigators steering AIExecute through every frontier of innovation.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-y-8">
        
          <motion.div 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {boardMembers.slice(0, 1).map((member) => (
              <MemberCard key={member.name} member={member} colorClasses="from-yellow-400 to-orange-500" />
            ))}
          </motion.div>

          {/* Second Row (4 members) */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {boardMembers.slice(1, 5).map((member) => (
              <MemberCard key={member.name} member={member} colorClasses="from-blue-500 to-teal-400" />
            ))}
          </motion.div>

          {/* Third Row (4 members) */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {boardMembers.slice(5, 9).map((member) => (
              <MemberCard key={member.name} member={member} colorClasses="from-purple-600 to-pink-600" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Board;
