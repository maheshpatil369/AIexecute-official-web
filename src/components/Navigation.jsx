import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState('first-slide');

  const navLinks = [
    { id: 'first-slide', label: 'Home', type: 'scroll' },
    { id: 'services', label: 'Services', type: 'scroll' },
    { id: 'projects', label: 'Projects', type: 'scroll' },
    { id: 'contact', label: 'Contact Us', type: 'scroll' },
    { path: '/about', label: 'About', type: 'link' },
    { path: '/careers', label: 'Careers', type: 'link' },
    { path: '/board', label: 'Board', type: 'link' }
  ];

  // Effect to track which section is visible on the homepage
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = navLinks
          .filter(link => link.type === 'scroll')
          .map(link => document.getElementById(link.id));

        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          if (section) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      };
      
      // Handle scrolling to hash when navigating from another page
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname, location.hash]);

  const handleScrollClick = (sectionId) => {
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the homepage with a hash, e.g., "/#services"
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            AIexecute
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = (link.type === 'link' && location.pathname === link.path) || 
                               (link.type === 'scroll' && location.pathname === '/' && activeSection === link.id);

              return link.type === 'scroll' ? (
                <button
                  key={link.id}
                  onClick={() => handleScrollClick(link.id)}
                  className="relative py-2 text-sm font-medium transition-colors duration-200 text-slate-300 hover:text-white"
                >
                  <span className={isActive ? 'text-white' : 'text-slate-300'}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-link"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-2 text-sm font-medium transition-colors duration-200 text-slate-300 hover:text-white"
                >
                  <span className={isActive ? 'text-white' : 'text-slate-300'}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-link"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;