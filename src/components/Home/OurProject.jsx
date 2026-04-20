import React, { useState } from "react";
import Heading from "../Heading";

const OurProject = () => {
  const [isEffect, setIsEffect] = useState(null);

  return (
    <div className="max-w-350 mx-auto">
      <div className="px-5 py-10">
        <Heading title="Our Latest Projects" />
        <div className="flex flex-wrap justify-center gap-5 my-5">
          {project.map((item) => (
            <div>
              <div
                onMouseEnter={() => setIsEffect(item.id)}
                onMouseLeave={() => setIsEffect(null)}
                className={`relative w-auto h-auto px-2 py-5 rounded-4xl transition-all duration-300 ${
                  isEffect === item.id
                    ? "bg-linear-to-r from-[#00FB94] to-[#09182B] opacity-60 cursor-pointer"
                    : "bg-[#00FB9440] opacity-100"
                }`}
                key={item.id}
              >
                <img
                  className={`object-center w-full h-auto ${item.className} `}
                  src={item.image}
                  alt=""
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    isEffect === item.id ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <div className="bg-linear-to-r from-[#00FB94] to-[#06B8FF] rounded-full w-20 h-20 p-5 flex items-center justify-center">
                    <img className="w-10 h-10" src="/Arrow.png" alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="text-[#FFFFFF] py-5 px-4">
                <p className="font-montserrat text-sm sm:text-xl">
                  {item.title}
                </p>
                <h1 className="text-lg sm:text-[28px] font-bold font-poppins">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProject;

const project = [
  {
    id: 1,
    image: "/project 1.png",
    title: "UI/ UX Design/ Development",
    name: "Draw House Planner",
    className: "sm:w-[590px] sm:h-[455px]",
  },
  {
    id: 2,
    image: "/project 2.png",
    title: "UI/ UX Design/ Development",
    name: "Draw House Planner",
    className: "sm:w-[590px]",
  },
  {
    id: 3,
    image: "/project 3.png",
    title: "UI/ UX Design/ Development",
    name: "Phone Cleaner",
    className: "sm:w-[386px]",
  },
  {
    id: 4,
    image: "/project 4.png",
    title: "UI/ UX Design/ Development",
    name: "Video Player",
    className: "sm:w-[386px]",
  },
  {
    id: 5,
    image: "/project 5.png",
    title: "UI/ UX Design/ Development",
    name: "VPN",
    className: "sm:w-[386px]",
  },
];
