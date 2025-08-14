import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, X, Filter, Eye, ExternalLink } from 'lucide-react';
import AILogo from '../assets/bg-aiexecute.png';

// --- Import Service Logos ---
import logo1 from '../assets/services-logo/1.png';
import logo2 from '../assets/services-logo/2.png';
import logo3 from '../assets/services-logo/3.png';
import logo4 from '../assets/services-logo/4.png';
import logo5 from '../assets/services-logo/5.png';
import logo6 from '../assets/services-logo/6.png';
import logo7 from '../assets/services-logo/7.png';
import logo8 from '../assets/services-logo/8.png';
import logo9 from '../assets/services-logo/9.png';
import logo11 from '../assets/services-logo/11.png';
import logo12 from '../assets/services-logo/12.png';
import logo13 from '../assets/services-logo/13.png';
import logo14 from '../assets/services-logo/14.png';
import logo15 from '../assets/services-logo/15.png';
import logo17 from '../assets/services-logo/17.png';
import logo18 from '../assets/services-logo/18.png';
import logo19 from '../assets/services-logo/19.png';

// --- Import Project Images ---
import projectImg1 from '../assets/Project img/ProjectsDisplay1.png';
import projectImg2 from '../assets/Project img/ProjectsDisplay2.png';
import projectImg3 from '../assets/Project img/ProjectsDisplay3.png';
import projectImg4 from '../assets/Project img/ProjectsDisplay4.png';
import projectImg5 from '../assets/Project img/ProjectsDisplay5.png';
import projectImg6 from '../assets/Project img/ProjectsDisplay6.png';
import projectImg7 from '../assets/Project img/ProjectsDisplay7.png';
import projectImg8 from '../assets/Project img/ProjectsDisplay8.png';
import projectImg9 from '../assets/Project img/ProjectsDisplay9.png';
import projectImg10 from '../assets/Project img/ProjectsDisplay10.png';
import projectImg11 from '../assets/Project img/ProjectsDisplay11.png';
import projectImg12 from '../assets/Project img/ProjectsDisplay12.png';
import projectImg13 from '../assets/Project img/ProjectsDisplay13.png';
import projectImg14 from '../assets/Project img/ProjectsDisplay14.png';
import projectImg15 from '../assets/Project img/ProjectsDisplay15.png';
import projectImg16 from '../assets/Project img/ProjectsDisplay16.png';
import projectImg17 from '../assets/Project img/ProjectsDisplay17.png';
import projectImg18 from '../assets/Project img/ProjectsDisplay18.png';
import projectImg19 from '../assets/Project img/ProjectsDisplay19.png';
import projectImg20 from '../assets/Project img/ProjectsDisplay20.png';


// --- Service Icon Mapping ---
const serviceIcons = {
  "AR VR": logo5,
  "Web Dev": logo3,
  "Data Science": logo2,
  "AI": logo1,
  "Data Analytics": logo11,
  "App Dev": logo4,
  "Software Dev": logo6,
  "UI/UX": logo15,
  "Data Engineering": logo12,
  "Computer Vision": logo14,
  "Quant Research": logo19,
  "Blockchain": logo18,
  "Automation": logo8,
  "ML": logo13,
  "BI": logo7,
  "Gen AI": logo9,
  "3D Modelling": logo17,
};

// --- Service Display Name Mapping ---
const serviceDisplayMap = {
  "AR VR": "AR/VR Development",
  "Web Dev": "Web Development",
  "Data Science": "Data Science",
  "AI": "Artificial Intelligence",
  "Data Analytics": "Data Analytics",
  "App Dev": "App Development",
  "Software Dev": "Software Development",
  "UI/UX": "UI/UX Design",
  "Data Engineering": "Data Engineering",
  "Computer Vision": "Computer Vision",
  "Quant Research": "Quantitative Research",
  "Blockchain": "Blockchain",
  "Automation": "Automation",
  "ML": "Machine Learning",
  "BI": "Business Intelligence",
  "Gen AI": "Generative AI",
  "3D Modelling": "3D Modelling",
};


// --- Updated Project Data ---
const allProjects = [
  {
    title: "Virtual Real Estate Experience",
    description: "A web platform that lets clients explore properties in first-person, measure spaces in real time, view layouts and models, all without apps or headsets.",
    image: projectImg1,
    serviceIcon: "AR VR",
    liveUrl: "https://aiexecute-virtual-experience.web.app",
  },
  {
    title: "GreenWatt: Household Energy Consumption Tracker",
    description: "A web dashboard that tracks household electricity usage, identifies inefficiencies and suggests cost-saving measures.",
    image: projectImg2,
    serviceIcon: "Web Dev",
    liveUrl: "https://green-watt.vercel.app/",
  },
  {
    title: "MeddiSynx: Scalable Synthetic Data Generation",
    description: "An AI platform that generates HIPAA/GDPR-compliant synthetic patient datasets, accelerating healthcare R&D while eliminating privacy and compliance risks.",
    image: projectImg3,
    serviceIcon: "Data Science",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "AstroLynx: Navigating Indian Satellite Data",
    description: "An AI-powered virtual assistant that uses NLP and dynamic knowledge graph modeling to instantly retrieve precise answers from complex web portals like MOSDAC, supporting geospatial data queries.",
    image: projectImg4,
    serviceIcon: "AI",
    liveUrl: "https://astrolynxi.vercel.app/",
  },
  {
    title: "VisionYT: YouTube Growth Analysis",
    description: "An intelligent analytics platform that tracks YouTube channel performance, identifies audience engagement patterns and predicts content trends.",
    image: projectImg5,
    serviceIcon: "Data Analytics",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "AI Vocal Coach",
    description: "A platform that analyzes pitch, tone, and breath control to provide singers with personalized, studio-quality vocal training.",
    image: projectImg6,
    serviceIcon: "AI",
    liveUrl: "https://vocal-coach-app.onrender.com/",
  },
  {
    title: "FitnestX: Gamified Workout Challenge App",
    description: "A mobile app that turns workouts into engaging challenges with rewards, leaderboards, and community interaction.",
    image: projectImg7,
    serviceIcon: "App Dev",
    liveUrl: "https://drive.google.com/file/d/1TOgcpI1fOUv5zODnYms3T-e3mYpU-gZ/view?usp=drive_link",
  },
  {
    title: "KrishiConnect: Farmer Assistant App",
    description: "A multilingual voice and text mobile app that provides farmers with real-time weather updates, market prices, and government scheme information.",
    image: projectImg8,
    serviceIcon: "Software Dev",
    liveUrl: "https://drive.google.com/file/d/1TMAtNpjPp9iNPIPc9D4SxFkUWbTefBeu/view?usp=sharing",
  },
  {
    title: "PlanPal: Personalized Travel Itinerary Website",
    description: "A responsive web app that creates personalized travel itineraries with location-based recommendations and optimized day plans.",
    image: projectImg9,
    serviceIcon: "UI/UX",
    liveUrl: "https://trip-manager-pro-rx7z.vercel.app/",
  },
  {
    title: "Intelligent Nutrition Data Dashboard",
    description: "A web-based dashboard that instantly consolidates verified nutritional data from multiple sources for any packaged food product.",
    image: projectImg10,
    serviceIcon: "Data Engineering",
    liveUrl: "https://nutrition-2pmsnxz4yyfukgto2emuol.streamlit.app/",
  },
  {
    title: "Automated Sports Match Analyzer",
    description: "A computer vision platform that processes sports footage to deliver instant stats, tactical breakdowns, and highlight reels.",
    image: projectImg11,
    serviceIcon: "Computer Vision",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "EcoFootprint: Personal Carbon Impact Tracker",
    description: "A web dashboard that calculates and tracks an individual's daily carbon footprint while offering actionable eco-friendly tips.",
    image: projectImg12,
    serviceIcon: "UI/UX",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "Real Estate Price Forecasting Engine",
    description: "A predictive analytics engine that estimates property values using macroeconomic, neighborhood, and rental yield data.",
    image: projectImg13,
    serviceIcon: "Quant Research",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "Decentralized E-Commerce Marketplace",
    description: "A blockchain-based marketplace enabling secure peer-to-peer product sales through escrow smart contracts.",
    image: projectImg14,
    serviceIcon: "Blockchain",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "Smart Vehicle Maintenance Reminder System",
    description: "A platform that automatically tracks vehicle service, insurance, and pollution check dates, sending timely alerts via Email, WhatsApp, and Google Calendar.",
    image: projectImg15,
    serviceIcon: "Automation",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "Integrated Streaming & Box Office Analytics",
    description: "A platform that merges OTT and theatrical data to reveal high-potential content, untapped audiences, and hidden revenue opportunities.",
    image: projectImg16,
    serviceIcon: "Data Analytics",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "Reinforcement Learning Trading Agent",
    description: "An AI trading system that uses advanced reinforcement learning to execute trades and adapt to real-time market conditions.",
    image: projectImg17,
    serviceIcon: "ML",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "IPL Insights 2025",
    description: "An analytics platform combining all seasons of IPL history with live 2025 stats to deliver performance trends, predictions, and actionable game insights.",
    image: projectImg18,
    serviceIcon: "BI",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "AI Campaign Content Generator",
    description: "An AI-powered content generator that produces high-conversion marketing copy and visuals tailored to campaign KPIs.",
    image: projectImg19,
    serviceIcon: "Gen AI",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
  {
    title: "Interactive AI Bot",
    description: "A 3D AI-powered bot designed to deliver engaging, personalized educational experiences in classrooms or virtual environments.",
    image: projectImg20,
    serviceIcon: "3D Modelling",
    liveUrl: "https://live-demo-two.vercel.app/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard = ({ project, index, onPreview }) => {
  const fromColors = ['from-purple-600', 'from-cyan-500', 'from-green-400'];
  const toColors = ['to-pink-600', 'to-blue-500', 'to-teal-500'];
  const hoverFromColors = ['group-hover:from-teal-400', 'group-hover:from-yellow-400', 'group-hover:from-red-500'];
  const hoverToColors = ['group-hover:to-blue-500', 'group-hover:to-orange-500', 'group-hover:to-rose-500'];

  const colorIndex = index % 3;

  return (
    <motion.div
      className="relative group h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`absolute -inset-1.5 bg-gradient-to-r ${fromColors[colorIndex]} ${toColors[colorIndex]} rounded-2xl blur opacity-25 group-hover:opacity-60 ${hoverFromColors[colorIndex]} ${hoverToColors[colorIndex]} transition duration-1000 group-hover:duration-300`}
      ></div>
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm h-full flex flex-col">
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
            <button
              onClick={() => onPreview(project.image)}
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <Eye size={20} className="text-white" />
            </button>
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
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
          </div>
          <div className="flex justify-between items-center mt-auto">
            <div className="flex items-center gap-2">
              <img src={AILogo} alt="AIExecute Logo" className="h-7 w-7 sm:h-8 sm:w-8" />
              <img src={serviceIcons[project.serviceIcon]} alt={project.serviceIcon} className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const services = Object.keys(serviceIcons);

  const handleFilterChange = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const filteredProjects = selectedServices.length === 0
    ? allProjects
    : allProjects.filter(project => selectedServices.includes(project.serviceIcon));

  return (
    <div className="w-full text-white px-4 pt-24 pb-24 md:px-8 lg:px-16" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight sm:tracking-[0.35em] rainbow-text mb-6">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
           A glimpse into our world of innovation, covering every frontier of technology.
          </p>
        </motion.div>

        <div className="text-left mb-8">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            <Filter size={18} />
            Filter Projects
          </button>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-black/60 z-40"
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-black/20 backdrop-blur-lg p-6 z-50 shadow-2xl flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Filter by Service</h3>
                  <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-white">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex-grow overflow-y-auto pr-2">
                  <div className="space-y-3">
                    {services.map(service => (
                      <label key={service} className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-white/10 transition-colors">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => handleFilterChange(service)}
                          className="form-checkbox h-5 w-5 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                        />
                        <span>{serviceDisplayMap[service] || service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {selectedServices.length > 0 && (
                  <button
                    onClick={() => setSelectedServices([])}
                    className="mt-6 w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                )}
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onPreview={setPreviewImage} />
          ))}
        </div>

        <AnimatePresence>
          {previewImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4"
            >
              <motion.img
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                src={previewImage}
                alt="Project Preview"
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
