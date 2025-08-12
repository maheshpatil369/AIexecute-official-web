import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

// Updated navLinks array for the new routing structure
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (sectionId) => {
    if (location.pathname !== "/") {
      // If we are not on the homepage, navigate there first
      navigate("/");
      // Then, scroll to the section after a short delay to allow the page to change
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      // If we are already on the homepage, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
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
  );
};

export default Navigation;
