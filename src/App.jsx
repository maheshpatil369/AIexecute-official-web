import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Determine scroll direction
      if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
        // Scrolling down
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
      setScrollPosition(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  
  const heroOpacity = Math.max(0, 1 - scrollPosition / 600);

  return (
    <div className="main-container">
      <GridBackground scrollPosition={scrollPosition} />
      <Navigation isVisible={headerVisible} />
      <Routes>
        <Route path="/" element={<HomePage opacity={heroOpacity} />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;