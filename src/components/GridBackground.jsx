import React, { useEffect, useRef } from 'react';

const GridBackground = ({ scrollPosition }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gridRef.current) {
        const { clientX, clientY } = e;
        gridRef.current.style.setProperty('--mouse-x', `${clientX}px`);
        gridRef.current.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const opacity = Math.max(0, 1 - scrollPosition / 500);

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 z-0"
      style={{
        background: `
          radial-gradient(
            600px circle at var(--mouse-x, 100px) var(--mouse-y, 100px),
            rgba(88, 28, 135, 0.15),
            transparent 80%
          ),
          repeating-linear-gradient(to right, 
              rgba(255, 255, 255, 0.05), 
              rgba(255, 255, 255, 0.05) 1px, 
              transparent 1px, 
              transparent 100px
          ),
          repeating-linear-gradient(to bottom, 
              rgba(255, 255, 255, 0.05), 
              rgba(255, 255, 255, 0.05) 1px, 
              transparent 1px, 
              transparent 100px
          )
        `,
        transition: 'opacity 0.3s ease-out',
        opacity: opacity,
      }}
    />
  );
};

export default GridBackground;