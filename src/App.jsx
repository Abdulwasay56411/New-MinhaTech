import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ImageGenarator from "./pages/ImageGenarator";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#09182B] h-auto" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aiImagegenaratorapp" element={<ImageGenarator/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
