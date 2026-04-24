import React from "react";
import { project } from "../../Data/project";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { slug } = useParams();

  const item = project.find((p) => p.slug === slug);

  if (!item) return <h1 className="text-white">Project Not Found</h1>;

  return (
    <div className="max-w-350 mx-auto px-5 py-10 text-white">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* LEFT TEXT */}
        <div className="max-w-5xl">
          <h1 className="font-semibold text-[#00FB94] text-4xl md:text-6xl">
            {item.heroTitle}
          </h1>

          <p className="text-lg text-[#FFFFFFD4] py-5">{item.heroDesc}</p>
        </div>

        {/* BUTTON */}
        <div className="hidden md:flex relative group mr-10 items-center">
          {/* BUTTON */}
          <button className="text-[#09182B] cursor-pointer w-38 h-10 rounded-3xl border border-[#00FB94] font-medium bg-linear-to-r from-[#00FB94] to-[#06B8FF] transition-all duration-300">
            View Live Site
          </button>

          <div className="absolute -right-10 w-16 h-10 bg-transparent"></div>

          {/* ARROW CIRCLE */}
          <div className="absolute cursor-pointer -right-10 w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-[#00FB94] to-[#06B8FF] transition-all duration-300 ease-in-out will-change-transform group-hover:-translate-x-48">
            <img
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
              src="/Arrow.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
