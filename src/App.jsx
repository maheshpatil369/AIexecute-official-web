import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Board from "./pages/Board";
import Careers from "./pages/Careers";

// The import for ParticleBackground has been removed from here.

function App() {
  return (
    <>
      {/* The old <ParticleBackground /> component has been removed from here. */}
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;
