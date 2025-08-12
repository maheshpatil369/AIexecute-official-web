import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Board from "./pages/Board";
import Careers from "./pages/Careers";
import GridBackground from "./components/GridBackground";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  // Loader state
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  // Scroll hide/show header logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      setScrollPosition(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // Loader end logic
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll initially

    if (videoRef.current) {
      videoRef.current.onended = () => {
        setIsLoaded(true);
        document.body.style.overflow = "auto"; // Enable scroll after loader
      };
    }
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollPosition / 600);

  return (
    <div className="main-container bg-[#020018]">
      {/* Loader */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none filter brightness-90 contrast-110"
          >
            <source src="/AIExecute Opening Video.mp4" type="video/mp4" />
          </video>
          {/* Overlay to disguise video feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
        </div>
      )}

      {/* Main Website */}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <GridBackground scrollPosition={scrollPosition} />
        <Navigation isVisible={headerVisible} />
        <Routes>
          <Route path="/" element={<HomePage opacity={heroOpacity} />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
