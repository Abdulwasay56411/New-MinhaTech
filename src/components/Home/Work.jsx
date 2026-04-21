import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Heading from "../Heading";

const howWork = [
  {
    id: 1,
    title: "Research",
    para: "We explore user needs, business goals and market trends to inform smart decisions",
  },
  {
    id: 2,
    title: "Design",
    para: "We create intuitive and engaging UI/UX experiences",
  },
  {
    id: 3,
    title: "Prototype",
    para: "We build interactive prototypes to validate ideas quickly",
  },
  {
    id: 4,
    title: "Develop",
    para: "We develop scalable and high-performance solutions",
  },
  {
    id: 5,
    title: "Test",
    para: "We test thoroughly to ensure quality and reliability",
  },
];

const image = [
  { id: 1, image: "/work 1.png", className: "w-[120px] md:w-[220px]" },
  { id: 2, image: "/work 2.png", className: "w-[90px] md:w-[160px]" },
  { id: 3, image: "/work 3.png", className: "w-[180px] md:w-[340px]" },
  { id: 4, image: "/work 4.png", className: "w-[40px] md:w-[60px]" },
  { id: 5, image: "/work 5.png", className: "w-[80px] md:w-[150px]" },
  { id: 6, image: "/work 6.png", className: "w-[90px] md:w-[165px]" },
  { id: 7, image: "/work 7.png", className: "w-[80px] md:w-[155px]" },
  { id: 8, image: "/work 8.png", className: "w-[110px] md:w-[200px]" },
];

const getTop = (index) => {
  const positions = [
    "lg:mt-10",
    "lg:mt-30",
    "lg:mt-40",
    "lg:mt-50",
    "lg:mt-60",
  ];
  return positions[index] || "lg:mt-0";
};

const Work = () => {
  const [isOpen, setIsOpen] = useState(null);
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
    <div className="max-w-350 mx-auto py-10">
      <div className="px-5">
        <Heading title="How we work" />

        <div className="flex flex-col gap-y-5 lg:grid lg:grid-cols-5 p-5 items-start">
          {howWork.map((item, index) => (
            <div
              key={item.id}
              className="flex items-stretch select-none w-full lg:w-auto"
            >
              <div className="w-1.5 lg:h-110 bg-linear-to-t from-[#00FB94] to-[#06B8FF] rounded-2xl"></div>

              <div
                onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
                className={`w-full rounded-lg py-3 px-4 ml-2 transition-all duration-300 cursor-pointer ${getTop(
                  index
                )} ${
                  isOpen === item.id
                    ? "h-auto lg:h-42 bg-[#06B8FF6E]"
                    : "h-16 bg-[#078ABE]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h1
                    className={`text-[28px] font-bold pb-1 ${
                      isOpen === item.id ? "text-[#00FB94]" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <FaChevronDown
                    className={`transition-all duration-300 ${
                      isOpen === item.id
                        ? "text-[#00FB94] -rotate-180"
                        : "text-white rotate-0"
                    }`}
                  />
                </div>
                <div className={`${isOpen === item.id ? "block" : "hidden"}`}>
                  <hr className="border-[#06B8FF80] my-2" />
                  <p className="text-white text-sm">{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-14 w-full h-20 bg-linear-to-r from-[#00FB94] to-[#06B8FF] flex items-center">
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
                className={`object-contain ${item.className}`}
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
