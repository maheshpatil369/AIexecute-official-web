import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Board from "./pages/Board";
import Careers from "./pages/Careers";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const loaderVideoRef = useRef(null);

  // Scroll hide/show header
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

  // Loader logic
  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (loaderVideoRef.current) {
      loaderVideoRef.current.onended = () => {
        setIsLoaded(true);
        document.body.style.overflow = "auto";
      };
    }
  }, []);

  return (
    <div className="main-container">
      {/* 🔹 Permanent Background Video */}
      <video
        id="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Website BG Video.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Loader Video */}
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

      {/* Main Website */}
      <div
        className={`transition-opacity duration-700 relative z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation isVisible={headerVisible} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
