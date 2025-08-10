import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiPython, SiTensorflow, SiStripe,
  SiFirebase, SiGraphql, SiNodedotjs, SiMongodb, SiVuedotjs,
  SiExpress, SiPostgresql, SiSocketdotio, SiGo, SiElasticsearch,
  SiKibana, SiSolidity, SiEthers, SiTypescript, SiTailwindcss, SiVite
} from 'react-icons/si';

// --- Tech Icon Mapping ---
// Added explicit size to all icons to ensure visibility
const techIcons = {
  React: <SiReact size={20} className="text-cyan-400" />,
  "Next.js": <SiNextdotjs size={20} className="text-white" />,
  Python: <SiPython size={20} className="text-yellow-400" />,
  TensorFlow: <SiTensorflow size={20} className="text-orange-500" />,
  Stripe: <SiStripe size={20} className="text-indigo-500" />,
  Firebase: <SiFirebase size={20} className="text-yellow-500" />,
  GraphQL: <SiGraphql size={20} className="text-pink-500" />,
  "React Native": <SiReact size={20} className="text-cyan-400" />,
  "Node.js": <SiNodedotjs size={20} className="text-green-500" />,
  MongoDB: <SiMongodb size={20} className="text-green-400" />,
  "Vue.js": <SiVuedotjs size={20} className="text-green-600" />,
  Express: <SiExpress size={20} className="text-white" />,
  PostgreSQL: <SiPostgresql size={20} className="text-blue-400" />,
  "Socket.io": <SiSocketdotio size={20} className="text-white" />,
  Go: <SiGo size={20} className="text-cyan-500" />,
  Elasticsearch: <SiElasticsearch size={20} className="text-teal-500" />,
  Kibana: <SiKibana size={20} className="text-pink-500" />,
  Solidity: <SiSolidity size={20} className="text-gray-400" />,
  "Ethers.js": <SiEthers size={20} className="text-indigo-400" />,
  TypeScript: <SiTypescript size={20} className="text-blue-500" />,
  TailwindCSS: <SiTailwindcss size={20} className="text-cyan-400" />,
  Vite: <SiVite size={20} className="text-purple-500" />,
};

// --- Project Data ---
const allProjects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive dashboard that visualizes complex data streams using machine learning.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=AI+Dashboard",
    tech: ["React", "TensorFlow", "Python"],
    liveUrl: "#",
  },
  {
    title: "E-commerce 'ShopSphere'",
    description: "A scalable online marketplace with a custom recommendation engine and secure payments.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=ShopSphere",
    tech: ["Next.js", "Stripe", "Firebase"],
    liveUrl: "#",
  },
  {
    title: "Fitness Coach 'FitTrack'",
    description: "An iOS and Android app that offers personalized workout plans and progress tracking.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=FitTrack",
    tech: ["React Native", "Node.js", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "SaaS for Project Management",
    description: "A collaborative tool to help teams organize tasks, track deadlines, and communicate.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=ProjectFlow",
    tech: ["Vue.js", "Socket.io", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    title: "Cybersecurity Threat Detector",
    description: "An advanced system that identifies and neutralizes security threats in real-time.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=SecureNet",
    tech: ["Go", "Elasticsearch", "Kibana"],
    liveUrl: "#",
  },
  {
    title: "Blockchain Voting System",
    description: "A decentralized application ensuring transparent and tamper-proof election processes.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=VoteLedger",
    tech: ["Solidity", "Hardhat", "Ethers.js"],
    liveUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "A high-performance chat service with end-to-end encryption and multimedia support.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=ChatApp",
    tech: ["React", "Firebase", "TailwindCSS"],
    liveUrl: "#",
  },
  {
    title: "Portfolio Website Builder",
    description: "A dynamic platform for creatives to build and deploy their personal portfolios with ease.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=PortfolioGen",
    tech: ["Next.js", "TypeScript", "Vite"],
    liveUrl: "#",
  },
  {
    title: "API for Weather Forecasting",
    description: "A robust API delivering hyper-local weather data powered by predictive AI models.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=WeatherAPI",
    tech: ["Python", "Node.js", "GraphQL"],
    liveUrl: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard = ({ project }) => (
  <motion.div
    className="relative group h-full flex flex-col"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -8 }}
  >
    <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm h-full flex flex-col">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-400 mb-6">{project.description}</p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center">
            {project.tech.map((techName, i) => (
              <div
                key={i}
                className={`relative flex items-center justify-center h-10 w-10 rounded-full bg-black/50 border-2 border-white/20 ${i > 0 ? '-ml-3' : ''}`}
                title={techName}
                style={{ zIndex: project.tech.length - i }}
              >
                {techIcons[techName] || <Code size={20} />}
              </div>
            ))}
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-purple-400 group-hover:text-pink-400 transition-colors"
          >
            Live Site <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const projectsToShow = allProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, 12));
  };

  return (
    <div className="w-full text-white px-4 py-24 md:px-8 lg:px-16" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
              Our <span className="rainbow-text">Projects</span>
            </h1>
            <p className="text-lg text-gray-400">A glimpse into our world of innovation.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {visibleCount < allProjects.length && visibleCount < 12 && (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                onClick={handleSeeMore}
                className="relative inline-flex items-center gap-2 overflow-hidden text-white font-semibold py-3 px-10 rounded-lg border border-white/30 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:border-white/60 bg-white/10 hover:bg-white/20"
              >
                  See More <ArrowRight size={18} />
              </button>
            </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
