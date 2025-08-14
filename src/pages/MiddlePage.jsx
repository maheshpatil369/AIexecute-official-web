import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AILogo from '../assets/bg-aiexecute.png';

import AiexecuteImg from '../assets/Homepage logo/1.png';
import servicesImg from '../assets/Homepage logo/2.png';
import projectsImg from '../assets/Homepage logo/3.png';
import departmentsImg from '../assets/Homepage logo/4.png';
import boardImg from '../assets/Homepage logo/5.png';
import internshipsImg from '../assets/Homepage logo/6.png';


const middlePageData = [
  {
    title: "What is AIExecute?",
    description: "We are an innovation-driven company offering a one-stop solution for individuals, professionals, and businesses.",
    image: AiexecuteImg,
    link: "/about"
  },
  {
    title: "Our Services",
    description: "We offer 20 cutting-edge AI, software and business transformation services tailored to diverse industry needs.",
    image: servicesImg,
    link: "/services"
  },
  {
    title: "Our Projects",
    description: "We build industry-grade AI solutions across 20+ booming sectors, delivering measurable impact.",
    image: projectsImg,
    link: "/projects"
  },
  {
    title: "Our Departments",
    description: "Our specialized departments unite experts from AI, data, coding, innovation and creative domains.",
    image: departmentsImg,
    link: "/careers"
  },
  {
    title: "Our Board",
    description: "Led by a visionary board of members driving innovation with strategic execution.",
    image: boardImg,
    link: "/board"
  },
  {
    title: "Join us - Internships",
    description: "Kickstart your career with hands-on AIExecute internships, working on real projects with industry leaders.",
    image: internshipsImg,
    link: "/careers"
  },
];

const InfoCard = ({ item, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.link);
  };

  const fromColors = ['from-purple-600', 'from-cyan-500', 'from-green-400'];
  const toColors = ['to-pink-600', 'to-blue-500', 'to-teal-500'];
  const hoverFromColors = ['group-hover:from-teal-400', 'group-hover:from-yellow-400', 'group-hover:from-red-500'];
  const hoverToColors = ['group-hover:to-blue-500', 'group-hover:to-orange-500', 'group-hover:to-rose-500'];

  const colorIndex = index % 3;

  return (
    <motion.div
      className="relative group h-full flex flex-col cursor-pointer"
      onClick={handleClick} // The entire card is now clickable
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div
        className={`absolute -inset-1.5 bg-gradient-to-r ${fromColors[colorIndex]} ${toColors[colorIndex]} rounded-2xl blur opacity-25 group-hover:opacity-75 ${hoverFromColors[colorIndex]} ${hoverToColors[colorIndex]} transition-all duration-500`}
      ></div>
      
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm h-full flex flex-col">
        <img src={item.image} alt={item.title} className="w-full h-40 sm:h-48 object-cover" />
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">{item.description}</p>
          </div>
          <div className="flex justify-between items-center mt-auto">
             <img src={AILogo} alt="AIExecute Icon" className="w-8 h-8 opacity-70" />
            <div
              className="inline-flex items-center font-semibold text-purple-400 group-hover:text-pink-400 transition-colors"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MiddlePage = () => {
  return (
    <div className="w-full text-white px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase rainbow-text mb-6 tracking-tight sm:tracking-[0.35em] whitespace-nowrap">
            Discover AIExecute
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Enter the execution grid where every section is a new data point in our living network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {middlePageData.map((item, index) => (
            <InfoCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
