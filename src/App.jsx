import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import OurProject from "./pages/OurProject";

const App = () => {
  return (
    <div className="bg-[#09182B] h-auto" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<OurProject/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
