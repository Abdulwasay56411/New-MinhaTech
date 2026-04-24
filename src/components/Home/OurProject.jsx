import React, { useState } from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const OurProject = () => {
  const [isEffect, setIsEffect] = useState(null);

  return (
    <div id="project" className="max-w-350 mx-auto px-5 py-10">
      <Heading title="Our Latest Projects" />
      <div className="flex flex-wrap justify-center gap-5 my-5">
        {project.map((item) => (
          <div key={item.id}>
            <Link to={`/project/${item.slug}`}>
              <div
                onMouseEnter={() => setIsEffect(item.id)}
                onMouseLeave={() => setIsEffect(null)}
                className={`relative w-auto h-auto px-2 py-5 rounded-4xl transition-all duration-300 ${
                  isEffect === item.id
                    ? "bg-linear-to-t from-[#09182B] to-[#009558] opacity-80 cursor-pointer"
                    : "bg-[#00FB9440] opacity-100"
                }`}
              >
                <img
                  className={`object-center w-full h-auto ${item.className} `}
                  src={item.image}
                  alt={item.name}
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
            </Link>
            <div className="text-[#FFFFFF] py-5 px-4">
              <p className="font-montserrat text-sm sm:text-xl">{item.title}</p>
              <h1 className="text-lg sm:text-[28px] font-bold font-poppins">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProject;

const project = [
  {
    id: 1,
    slug: "ai-image-generator",
    image: "/project 1.png",
    title: "UI/ UX Design/ Development",
    name: "Draw House Planner",
    className: "sm:w-[590px] sm:h-[455px]",
  },
  {
    id: 2,
    slug: "house-planner",
    image: "/project 2.png",
    title: "UI/ UX Design/ Development",
    name: "Draw House Planner",
    className: "sm:w-[590px]",
  },
  {
    id: 3,
    slug: "phone-cleaner",
    image: "/project 3.png",
    title: "UI/ UX Design/ Development",
    name: "Phone Cleaner",
    className: "sm:w-[386px]",

  },
  {
    id: 4,
    slug: "video-player",
    image: "/project 4.png",
    title: "UI/ UX Design/ Development",
    name: "Video Player",
    className: "sm:w-[386px]",
  },
  {
    id: 5,
    slug: "vpn",
    image: "/project 5.png",
    title: "UI/ UX Design/ Development",
    name: "VPN",
    className: "sm:w-[386px]",
  },
];