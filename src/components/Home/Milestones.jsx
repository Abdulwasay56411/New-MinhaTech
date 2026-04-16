import React, { useState, useEffect, useRef } from "react";


const Counter = ({ endValue, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; 
    const increment = endValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};



const Milestones = () => {
  return (
    <div>
      <div className="flex items-center p-10 max-w-350 mx-auto ">
        <img className="w-10 h-10" src="/star.png" alt="" />
        <h1 className="font-montserrat text-2xl md:text-4xl font-semibold text-white">
          Milestones Unlocked
        </h1>
      </div>
      <div className="flex items-center">
        <img
          className=" object-cover cursor-pointer transform"
          src="/milestones.png"
          alt=""
        />
      </div>
      
      
      <div className="flex flex-wrap justify-center  gap-4 px-5 py-10">
        <div className="w-75 h-80 rounded-3xl bg-[#06B8FF6B] text-[#00FB94]">
          <h1 className="font-poppins font-bold text-[#00FB94] text-6xl py-20 pl-20">
            <Counter endValue={5} suffix="B+" />
          </h1>
          <p className="font-montserrat text-[28px] pt-10 text-center">
            Downloads
          </p>
        </div>

        <div className="w-75 h-61 rounded-3xl mt-20 bg-[#06B8FF6B] text-[#00FB94]">
          <h1 className="font-poppins font-bold text-[#00FB94] text-6xl py-10 pl-8">
            <Counter endValue={98} suffix="%" />
          </h1>
          <p className="font-montserrat text-[28px] pt-10 text-center">
            Client Statisfaction
          </p>
        </div>

        <div className="w-75 h-80 rounded-3xl bg-[#06B8FF6B] text-[#00FB94]">
          <h1 className="font-poppins font-bold text-[#00FB94] text-6xl py-20 pl-10">
            <Counter endValue={900} suffix="+" />
          </h1>
          <p className="font-montserrat text-[28px] pt-10 text-center">
            Successful Projects
          </p>
        </div>

        <div className="w-75 h-61 rounded-3xl bg-[#06B8FF6B] text-[#00FB94]">
          <h1 className="font-poppins font-bold text-[#00FB94] text-6xl py-10 pl-16">
            <Counter endValue={300} suffix="+" />
          </h1>
          <p className="font-montserrat text-[28px] pt-10 pl-16">Partners</p>
        </div>
      </div>
    </div>
  );
};

export default Milestones;