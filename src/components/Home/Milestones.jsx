import React, { useState, useEffect, useRef } from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";

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
  // 1. Dummy Data Array
  const milestonesData = [
    { id: 1, value: 5, suffix: "B+", label: "Downloads" },
    { id: 2, value: 98, suffix: "%", label: "Client Satisfaction" },
    { id: 3, value: 900, suffix: "+", label: "Successful Projects" },
    { id: 4, value: 300, suffix: "+", label: "Partners" },
  ];

  return (
    <motion.div 
    initial={{opacity: 0, y:50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 1.2, ease: "easeOut"}}
    viewport={{once: true, amount: 0.2}}
    id="about" className="max-w-350 mx-auto px-5 py-10">
      <Heading 
        title="What We Delivered" 
        para="Delivering measurable results through innovation, performance and user-focused mobile solutions" 
      />
      
      {/* <div className="flex items-center my-8">
        <img className="object-cover" src="/milestones.png" alt="Milestones" />
      </div> */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 items-start">
        {milestonesData.map((item) => (
          <div 
            key={item.id} 
            className="w-full h-35 sm:h-44 rounded-3xl bg-[#173C4C] border border-[#FFFFFF1A] flex flex-col justify-between py-8 items-center backdrop-blur-sm"
          >
            <h1 className="font-poppins text-[#FFFFFF] font-semibold text-3xl sm:text-5xl md:text-6xl">
              <Counter endValue={item.value} suffix={item.suffix} />
            </h1>
            <p className="font-montserrat text-sm sm:text-lg md:text-[24px] pt-2 text-center text-[#C6C7C8] px-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Milestones;