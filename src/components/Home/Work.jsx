import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const image = [
  { id: 1, image: "/work 1.png", className: "w-[120px] md:w-[150px]" },
  { id: 2, image: "/work 2.png", className: "w-[90px] md:w-[160px]" },
  { id: 3, image: "/work 3.png", className: "w-[180px] md:w-[240px]" },
  { id: 4, image: "/work 4.png", className: "w-[40px] md:w-[70px]" },
  { id: 5, image: "/work 5.png", className: "w-[80px] md:w-[140px]" },
  { id: 6, image: "/work 6.png", className: "w-[90px] md:w-[155px]" },
  { id: 7, image: "/work 7.png", className: "w-[80px] md:w-[135px]" },
  { id: 8, image: "/work 8.png", className: "w-[110px] md:w-[140px]" },
];

const Work = () => {
  const imageTools = [...image, ...image];
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let position = 0;
    const speed = 2;

    const animate = () => {
      if (scrollElement) {
        position -= speed;

        const contentWidth = scrollElement.scrollWidth / 2;

        if (Math.abs(position) >= contentWidth) {
          position = 0;
        }

        scrollElement.style.transform = `translateX(${position}px)`;
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="overflow-hidden mt-14 w-full h-24 bg-[#0A1E38] flex items-center">
        <div
          ref={scrollRef}
          className="flex w-fit items-center gap-10 md:gap-16"
        >
          {imageTools.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="shrink-0 flex items-center"
            >
              <img
                className={`object-contain h-10 ${item.className}`}
                src={item.image}
                alt="tool"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
