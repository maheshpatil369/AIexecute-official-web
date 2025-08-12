import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/#services" },
  { name: "Projects", path: "/#projects" },
  { name: "Careers", path: "/careers" },
  { name: "Board", path: "/board" },
  { name: "Contact", path: "/#contact" },
];

const Navigation = ({ isVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <nav className="flex gap-8 px-8 py-3 rounded-2xl bg-[#0B1224]/80 backdrop-blur-md shadow-lg border border-white/5">
        {navLinks.map((link) =>
          link.path.startsWith("/#") ? (
            <button
              key={link.name}
              onClick={() => handleScrollLink(link.path.replace("/#", ""))}
              className="text-[#6EE7B7] font-semibold text-lg hover:text-white transition-colors duration-300"
            >
              {link.name}
            </button>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `font-semibold text-lg transition-colors duration-300 ${
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
