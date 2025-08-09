import React from 'react';
import { NavLink } from 'react-router-dom';

// Navigation links array, now with "Home" added at the beginning.
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];

const Navigation = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-auto z-50">
      <nav className="bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg">
        <ul className="flex justify-center items-center px-3 py-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* NavLink automatically handles the 'active' state for styling */}
              <NavLink
                to={link.path}
                // The 'end' prop ensures the Home link is only active on the exact path "/"
                end={link.path === '/'} 
                className={({ isActive }) =>
                  `block px-4 py-1.5 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
