import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Home, Info, Briefcase, Users, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Careers", path: "/careers", icon: <Briefcase size={20} /> },
  { name: "Board", path: "/board", icon: <Users size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
];

const Navigation = ({ isVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleProjectsClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-5 right-5 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Navigation Icons */}
      <nav
        className={`absolute top-0 right-14 flex items-center gap-3 bg-black/80 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg transition-all duration-300 ${
          open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `p-2 rounded-lg transition-colors duration-300 ${
                isActive
                  ? "bg-white/10 text-purple-400"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
 