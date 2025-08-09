import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Careers from './pages/Careers';
import Board from './pages/Board';

function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden transition-colors duration-300">
        <ParticleBackground theme={theme} />
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;