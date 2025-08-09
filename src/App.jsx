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

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // The opacity is calculated here for a smooth fade-out effect.
  const opacity = Math.max(0, 1 - scrollPosition / 500);

  return (
    <>
      <GridBackground scrollPosition={scrollPosition} />
      <div style={{ opacity: opacity, transition: 'opacity 0.3s ease-out' }}>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage opacity={opacity} />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;