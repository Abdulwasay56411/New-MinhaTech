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
 
  const milestonesData = [
    { id: 1, value: 100, suffix: "+", label: "Published Apps" },
    { id: 2, value: 5, suffix: "M+", label: "Downlaods" },
    { id: 3, value: 15, suffix: "+", label: "Partners" },
    { id: 4, value: 98, suffix: "+", label: "Satisfaction Rate" },
  ];

  return (
    <motion.div 
    initial={{opacity: 0, y:50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 1.2, ease: "easeOut"}}
    viewport={{once: true, amount: 0.2}}
    id="about" className="max-w-350 mx-auto px-5 py-10">
      <Heading 
        title="What We"
        subtitle="Delivered" 
        para="With innovative ideas and modern development techniques we have successfully built and published high quality mobile apps that continue to engage users and deliver real value" 
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 lg:py-6 items-start">
        {milestonesData.map((item) => (
          <div 
            key={item.id} 
            className="w-full h-37 rounded-[14px] bg-[#0F1D3426] opacity-80 border-[0.74px] border-[#06B8FF] flex flex-col justify-between py-8 items-center backdrop-blur-sm"
          >
            <h1 className="text-[#FFFFFF] font-bold text-3xl sm:text-[51px]">
              <Counter endValue={item.value} suffix={item.suffix} />
            </h1>
            <p className="text-sm sm:text-[17px] font-semibold pt-2 text-center text-[#01D89F] px-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Milestones;