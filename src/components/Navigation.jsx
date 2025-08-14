import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import AILogo from '../assets/bg-aiexecute.png';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Careers", path: "/careers" },
  { name: "Board", path: "/board" },
  { name: "Contact", path: "/#contact" }, // This will scroll on the homepage
];

const Navigation = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (sectionId) => {
    setIsOpen(false); // Close mobile menu on link click
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* --- Desktop Navigation --- */}
      <header
        className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-3 rounded-2xl bg-[#0B1224]/80 backdrop-blur-md shadow-lg border border-white/5">
          {navLinks.map((link) =>
            link.path.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => handleScrollLink(link.path.replace("/#", ""))}
                className="text-[#6EE7B7] font-semibold text-base md:text-lg hover:text-white transition-colors duration-300"
              >
                {link.name}
              </button>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `font-semibold text-base md:text-lg transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#6EE7B7] hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>
      </header>

      {/* --- Mobile Navigation --- */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#0B1224]/80 backdrop-blur-md shadow-lg border-b border-white/5">
        <div className="flex justify-between items-center px-4 py-3">
          <img src={AILogo} alt="AIExecute Logo" className="h-8 w-auto" />
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-black/20 backdrop-blur-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                 <img src={AILogo} alt="AIExecute Logo" className="h-10 w-auto" />
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-y-6">
                {navLinks.map((link) =>
                  link.path.startsWith("/#") ? (
                    <button
                      key={link.name}
                      onClick={() => handleScrollLink(link.path.replace("/#", ""))}
                      className="text-left text-lg font-semibold text-[#6EE7B7] hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-semibold transition-colors ${
                          isActive ? "text-white" : "text-[#6EE7B7] hover:text-white"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )
                )}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
