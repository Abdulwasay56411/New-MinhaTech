import React, { useState } from "react";

const HeroSection = () => {
  const [isHover, setIsHover] = useState(null);
  const [isCursor, setIsCursor] = useState(false);

  return (
    <div
      id="home"
      className='relative overflow-hidden pt-10 px-4 bg-[#09182B] w-full h-auto bg-[url("/herobg.png")] bg-cover bg-center bg-no-repeat'
    >
      <div className="blob-base blob-left"></div>
      <div className="blob-base blob-right"></div>
      <div className="max-w-350 mx-auto relative z-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl lg:max-w-4xl">
            Mobile App <span className="text-[#06A9EA]">Development </span> That Drive Results
          </h1>
          <p className="text-[#C6C7C8] text-xl md:text-2xl lg:text-3xl font-montserrat">Transforming ideas into seamless digital experiences people love to use</p>
        </div>
        <div className="flex justify-center items-center gap-4 py-10 ">
          <button className="w-52 h-10 text-sm md:text-base  md:w-62 md:h-12 bg-linear-to-r from-[#0598D3] to-[#07D580] text-[#09182B] rounded-xl font-medium cursor-pointer hover:bg-linear-to-r hover:from-[#07D580] hover:to-[#07D580] hover:scale-105 duration-300">Get Free App Consultation</button>
          <button className="bg-transparent border border-[#E5E5E5] w-25 h-10 text-sm md:text-base md:w-38 md:h-12 rounded-xl text-white cursor-pointer hover:scale-105 duration-300">View Pricing</button>
        </div>
        <div className="flex justify-center mt-5">
          <img className="w-auto h-auto object-cover" src="/heroMobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
