import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Board from "./pages/Board";
import Careers from "./pages/Careers";
import Services from "./components/Services";
import Projects from "./components/Projects";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  }, [pathname]);

  return null;
}

function App() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const loaderVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (loaderVideoRef.current) {
      loaderVideoRef.current.onended = () => {
        setIsLoaded(true);
        document.body.style.overflow = "auto";
      };
    } else {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = "auto";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="main-container">
      <video id="bg-video" autoPlay loop muted playsInline>
        <source src="/Website BG Video Loop.mp4" type="video/mp4" />
      </video>

      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
          <video
            ref={loaderVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/AIExecute Opening Video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div
        className={`transition-opacity duration-700 relative z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation isVisible={headerVisible} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/board" element={<Board />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
