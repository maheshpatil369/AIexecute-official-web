import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AILogo from '/src/assets/bg-aiexecute.png';

// --- Import Project Images ---
import projectImg1 from '/src/assets/Project img/ProjectsDisplay1.png';
import projectImg2 from '/src/assets/Project img/ProjectsDisplay2.png';
import projectImg3 from '/src/assets/Project img/ProjectsDisplay3.png';
import projectImg4 from '/src/assets/Project img/ProjectsDisplay4.png';
import projectImg5 from '/src/assets/Project img/ProjectsDisplay5.png';


const projects = [
   {
    title: "Virtual Real Estate Experience",
    description: "A web platform that lets clients explore properties in first-person, measure spaces in real time and view layouts.",
    image: projectImg1,
    liveUrl: "https://aiexecute-virtual-experience.web.app",
  },
  {
    title: "GreenWatt Energy Tracker",
    description: "A web dashboard that tracks household electricity usage, identifies inefficiencies and suggests cost-saving measures.",
    image: projectImg2,
    liveUrl: "https://green-watt.vercel.app/",
  },
  {
    title: "MeddiSynx Synthetic Data",
    description: "An AI platform that generates HIPAA/GDPR-compliant synthetic patient datasets, accelerating healthcare R&D.",
    image: projectImg3,
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "AstroLynx Satellite Data AI",
    description: "An AI-powered virtual assistant that uses NLP to instantly retrieve precise answers from complex web portals like MOSDAC.",
    image: projectImg4,
    liveUrl: "https://astrolynxi.vercel.app/",
  },
   {
    title: "VisionYT: YouTube Analysis",
    description: "An intelligent analytics platform that tracks YouTube channel performance and predicts content trends.",
    image: projectImg5,
    liveUrl: "https://live-demo-two.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="relative group h-96 w-80 flex-shrink-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"></div>
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm h-full flex flex-col">
        <div className="relative h-40">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
          <div className="flex justify-between items-center mt-auto pt-2">
            <img src={AILogo} alt="AIExecute Logo" className="h-8 w-8" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  return (
    <div className="w-full text-white py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.35em] rainbow-text mb-4">
            Our Projects
          </h2>
        </motion.div>
        
        <div className="relative pl-4 sm:pl-6 lg:pl-8">
            <div className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-4 horizontal-scrollbar">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </div>

        <div className="text-center mt-12">
            <Link
                to="/projects"
                className="relative inline-flex items-center gap-2 overflow-hidden text-white font-semibold py-3 px-8 sm:px-12 rounded-lg border border-white/30 transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl hover:border-white/60 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transform hover:scale-105"
            >
                View All Projects <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;

