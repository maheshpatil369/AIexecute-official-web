import React, { useEffect, useRef } from 'react';

const GridBackground = () => {
  const gridRef = useRef(null);

  // This effect adds a mouse move listener to create the spotlight effect.
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gridRef.current) {
        const { clientX, clientY } = e;
        // We set CSS custom properties to the mouse coordinates.
        gridRef.current.style.setProperty('--mouse-x', `${clientX}px`);
        gridRef.current.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 z-0"
      style={{
        // The background is now defined here instead of index.css
        background: `
          radial-gradient(
            600px circle at var(--mouse-x, 100px) var(--mouse-y, 100px),
            rgba(128, 0, 128, 0.15),
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
        transition: 'background 0.2s ease-out',
      }}
    />
  );
};

export default GridBackground;
