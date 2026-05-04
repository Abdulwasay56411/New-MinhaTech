import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Project from "./pages/Project";


const App = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-[#0A0D21] h-auto min-h-screen relative ">

      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-9999"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <Navbar />
      
      <div className="relative z-10">
        <Routes>
    
          <Route path="/" element={<Home />} />
          

          <Route path="/project/:slug" element={<Project/>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;