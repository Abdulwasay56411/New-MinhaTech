import React, { useState, useEffect, useRef } from "react";
import Heading from "../Heading";

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

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const Milestones = () => {
  return (
    <div id="about" className="max-w-350 mx-auto px-5 py-10">
      <Heading title="What We Delivered" para="Delivering measurable results through innovation, performance and user-focused mobile solutions" />
      <div className="flex items-center">
        <img
          className="object-cover"
          src="/milestones.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-5 py-10 items-start text-[#EFEFEF]">
        <div className="w-full h-64 rounded-3xl bg-[#0598D333] border border-[#0776A333] flex flex-col justify-between py-10 items-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl">
            <Counter endValue={5} suffix="B+" />
          </h1>
          <p className="font-montserrat text-lg md:text-[24px] text-center px-2">
            Downloads
          </p>
        </div>
        <div className="w-full h-52 rounded-3xl mt-11 bg-[#0598D333] border border-[#0776A333] flex flex-col justify-between py-8 items-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl">
            <Counter endValue={98} suffix="%" />
          </h1>
          <p className="font-montserrat text-lg md:text-[24px]  text-center px-2">
            Client Satisfaction
          </p>
        </div>
        <div className="w-full h-64 rounded-3xl bg-[#0598D333] border border-[#0776A333] flex flex-col justify-between py-10 items-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl">
            <Counter endValue={900} suffix="+" />
          </h1>
          <p className="font-montserrat text-lg md:text-[24px] text-center px-2">
            Successful Projects
          </p>
        </div>

        <div className="w-full h-52 rounded-3xl  md:mt-0 lg:mb-11 bg-[#0598D333] border border-[#0776A333] backdrop-blur-sm flex flex-col justify-between py-8 items-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl">
            <Counter endValue={300} suffix="+" />
          </h1>
          <p className="font-montserrat text-lg md:text-[24px] text-center px-2">
            Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
