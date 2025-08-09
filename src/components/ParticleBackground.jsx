import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="background-container">
      {/* This is for the moving gradient blobs */}
      <motion.div
        className="gradient-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </motion.div>
      
      {/* This is for the new grid overlay */}
      <div className="grid-overlay"></div>
    </div>
  );
};

export default ParticleBackground;