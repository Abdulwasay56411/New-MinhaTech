import React, { useState, useRef, useEffect } from "react";

const image = [
  { id: 1, image: "/work 1.png", className: "w-[120px] md:w-[230px]" },
  { id: 2, image: "/work 2.png", className: "w-[90px] md:w-[170px]" },
  { id: 3, image: "/work 3.png", className: "w-[180px] md:w-[350px]" },
  { id: 4, image: "/work 4.png", className: "w-[40px] md:w-[70px]" },
  { id: 5, image: "/work 5.png", className: "w-[80px] md:w-[160px]" },
  { id: 6, image: "/work 6.png", className: "w-[90px] md:w-[175px]" },
  { id: 7, image: "/work 7.png", className: "w-[80px] md:w-[165px]" },
  { id: 8, image: "/work 8.png", className: "w-[110px] md:w-[210px]" },
];

const Work = () => {
  const imageTools = [...image, ...image];
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let position = 0;
    const speed = 0.8;

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
    <div className="max-w-350 mx-auto">
      <div className="overflow-hidden mt-14 w-full h-20 bg-[#0A1E38] flex items-center">
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
                className={`object-contain h-12 ${item.className}`}
                src={item.image}
                alt="tool"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
