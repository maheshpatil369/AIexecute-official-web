import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AILogo from '../assets/bg-aiexecute.png';

// Data for the six cards with correct links
const middlePageData = [
  {
    title: "What is AIExecute?",
    description: "We are an innovation-driven company offering a one-stop solution for individuals, professionals, and businesses.",
    image: "https://placehold.co/600x400/020018/1e1b4b?text=AIExecute",
    link: "/about"
  },
  {
    title: "Our Services",
    description: "We offer 20 cutting-edge AI, software and business transformation services tailored to diverse industry needs.",
    image: "https://placehold.co/600x400/020018/312e81?text=Services",
    link: "/services"
  },
  {
    title: "Our Projects",
    description: "We build industry-grade AI solutions across 20+ booming sectors, delivering measurable impact.",
    image: "https://placehold.co/600x400/020018/4338ca?text=Projects",
    link: "/projects"
  },
  {
    title: "Our Departments",
    description: "Our specialized departments unite experts from AI, data, coding, innovation and creative domains.",
    image: "https://placehold.co/600x400/020018/5b21b6?text=Departments",
    link: "/careers"
  },
  {
    title: "Our Board",
    description: "Led by a visionary board of members driving innovation with strategic execution.",
    image: "https://placehold.co/600x400/020018/7e22ce?text=Board",
    link: "/board"
  },
  {
    title: "Join us - Internships",
    description: "Kickstart your career with hands-on AIExecute internships, working on real projects with industry leaders.",
    image: "https://placehold.co/600x400/020018/a855f7?text=Internships",
    link: "/careers"
  },
];

// Reusable card component with a working onClick handler
const InfoCard = ({ item }) => {
  const navigate = useNavigate();

  // This function handles the navigation when a card is clicked
  const handleClick = () => {
    navigate(item.link);
  };

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
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition-all duration-500"></div>
      
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.2em] sm:tracking-[0.35em] rainbow-text mb-6">
            Explore AIExecute
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Discover the core of our mission, services, and the people who make it all happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {middlePageData.map((item) => (
            <InfoCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
