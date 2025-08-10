import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Board', path: '/board' },
];

const Navigation = ({ isVisible }) => {
  return (
    <header 
      className={`fixed top-5 left-1/2 -translate-x-1/2 w-auto z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-24'}`}
    >
      {/* This parent div creates the gradient border */}
      <nav className="p-[2px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* This inner div creates the dark background, revealing the gradient behind it */}
        <div className="bg-black/80 backdrop-blur-sm rounded-[10px]">
          <ul className="flex justify-center items-center px-3 py-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'} 
                  className={({ isActive }) =>
                    `block px-4 py-1.5 text-sm font-medium rounded-lg transition-colors duration-300 ${
                      isActive
                        ? 'bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;