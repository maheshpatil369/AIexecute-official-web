import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Star } from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiPython, SiTensorflow, SiStripe,
  SiFirebase, SiGraphql, SiNodedotjs, SiMongodb, SiVuedotjs,
  SiExpress, SiPostgresql, SiSocketdotio, SiGo, SiElasticsearch,
  SiKibana, SiSolidity, SiEthers, SiTypescript, SiTailwindcss, SiVite
} from 'react-icons/si';

// --- Tech Icon Mapping ---
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

// --- Combined Project Data ---
const allProjects = [
  {
    title: "Virtual Real Estate Experience",
    description: "A web platform that lets clients explore properties in first-person, measure spaces in real time, view layouts and models, all without apps or headsets.",
    image: "https://i.postimg.cc/zXj9ZDzm/projectimg.png",
    tech: ["React", "Go"],
    liveUrl: "#",
    isClient: false,
  },
  {
    title: "Green Watt: Household Energy Consumption Tracker",
    description: "A web dashboard that tracks household electricity usage, identifies inefficiencies and suggests cost-saving measures.",
    image: "https://i.postimg.cc/mkMBNvCL/projectimg.png",
    tech: ["Next.js", "PostgreSQL"],
    liveUrl: "#",
    isClient: false,
  },
  {
    title: "MeddiSynx: Scalable Synthetic Data Generation",
    description: "An AI platform that generates HIPAA/GDPR-compliant synthetic patient datasets, accelerating healthcare R&D while eliminating privacy and compliance risks.",
    image: "https://i.postimg.cc/mkMBNvCL/projectimg.png",
    tech: ["Python", "TensorFlow"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "AstroLynx: Navigating Indian Satellite Data",
    description: "An AI-powered virtual assistant that uses NLP and dynamic knowledge graph modeling to instantly retrieve precise answers from complex web portals like MOSDAC, supporting geospatial data queries.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=AstroLynx",
    tech: ["Python", "GraphQL"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Vision YT: YouTube Growth Analysis",
    description: "An intelligent analytics platform that tracks YouTube channel performance, identifies audience engagement patterns and predicts content trends.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=Vision+YT",
    tech: ["Next.js", "Elasticsearch", "Kibana"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "AI Vocal Coach",
    description: "A platform that analyzes pitch, tone, and breath control to provide singers with personalized, studio-quality vocal training.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=AI+Vocal+Coach",
    tech: ["React", "Python"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "FitnestX: Gamified Workout Challenge App",
    description: "A mobile app that turns workouts into engaging challenges with rewards, leaderboards, and community interaction.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=FitnestX",
    tech: ["React Native", "MongoDB"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "KrishiConnect: Farmer Assistant App",
    description: "A multilingual voice and text mobile app that provides farmers with real-time weather updates, market prices, and government scheme information.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=KrishiConnect",
    tech: ["React Native", "Express", "Node.js"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "PlanPal: Personalized Travel Itinerary Website",
    description: "A responsive web app that creates personalized travel itineraries with location-based recommendations and optimized day plans.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=PlanPal",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Intelligent Nutrition Data Dashboard",
    description: "A web-based dashboard that instantly consolidates verified nutritional data from multiple sources for any packaged food product.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Nutrition+Dashboard",
    tech: ["React", "MongoDB"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Automated Sports Match Analyzer",
    description: "A computer vision platform that processes sports footage to deliver instant stats, tactical breakdowns, and highlight reels.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Sports+Analyzer",
    tech: ["Python", "TensorFlow"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "EcoFootprint: Personal Carbon Impact Tracker",
    description: "A web dashboard that calculates and tracks an individual's daily carbon footprint while offering actionable eco-friendly tips.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=EcoFootprint",
    tech: ["Next.js", "PostgreSQL"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Real Estate Price Forecasting Engine",
    description: "A predictive analytics engine that estimates property values using macroeconomic, neighborhood, and rental yield data.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Real+Estate+Forecasting",
    tech: ["Python", "TensorFlow"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Decentralized E-Commerce Marketplace",
    description: "A blockchain-based marketplace enabling secure peer-to-peer product sales through escrow smart contracts.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=Decentralized+E-Commerce",
    tech: ["Solidity", "Ethers.js"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Smart Vehicle Maintenance Reminder System",
    description: "A platform that automatically tracks vehicle service, insurance, and pollution check dates, sending timely alerts via Email, WhatsApp, and Google Calendar.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=Vehicle+Reminder",
    tech: ["Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Integrated Streaming & Box Office Analytics",
    description: "A platform that merges OTT and theatrical data to reveal high-potential content, untapped audiences, and hidden revenue opportunities.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Streaming+Analytics",
    tech: ["Python", "PostgreSQL"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Reinforcement Learning Trading Agent",
    description: "An AI trading system that uses advanced reinforcement learning to execute trades and adapt to real-time market conditions.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Trading+Agent",
    tech: ["Python", "TensorFlow"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "IPL Insights 2025",
    description: "An analytics platform combining all seasons of IPL history with live 2025 stats to deliver performance trends, predictions, and actionable game insights.",
    image: "https://placehold.co/600x400/020018/94a3b8?text=IPL+Insights",
    tech: ["React", "Python", "GraphQL"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "AI Campaign Content Generator",
    description: "An AI-powered content generator that produces high-conversion marketing copy and visuals tailored to campaign KPIs.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Content+Generator",
    tech: ["Next.js", "Python"],
    liveUrl: "#",
    // isClient: true,
  },
  {
    title: "Interactive AI Bot",
    description: "A 3D AI-powered bot designed to deliver engaging, personalized educational experiences in classrooms or virtual environments.",
    image: "https://placehold.co/600x400/020018/a78bfa?text=Interactive+AI+Bot",
    tech: ["React", "Python", "WebAssembly"],
    liveUrl: "#",
    // isClient: true,
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
      {project.isClient && (
        <div className="absolute top-4 right-4 bg-purple-600/50 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm border border-white/20">
          <Star size={12} className="text-yellow-300" />
          <span>Client Project</span>
        </div>
      )}
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
  return (
    // Added pt-24 for top padding to avoid overlap with navigation
    <div className="w-full text-white px-4 pt-24 pb-24 md:px-8 lg:px-16" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-[0.35em] rainbow-text mb-6">
            Our Projects
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
           A glimpse into our world of innovation, covering every frontier of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Now mapping over all projects */}
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
