import React, { useState } from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";

const processImage = [
  {
    id: 1,
    image: "/idea.png",
    title: "Idea",
  },
  {
    id: 2,
    image: "/designer 1.png",
    title: "Design",
  },
  {
    id: 3,
    image: "/developer 1.png",
    title: "Develop",
  },
  {
    id: 4,
    image: "/testing.png",
    title: "Testing",
  },
  {
    id: 5,
    image: "/launch.png",
    title: "Lunch",
  },
  {
    id: 6,
    image: "/growth.png",
    title: "Growth"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" }
  },
};

const ToolMagic = () => {

  const [activeTab, setActiveTab] = useState(1);

  const currentImage = technologiesImage.find((img) => img.id === activeTab);

  return (
    <div className="pb-14">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-350 mx-auto px-10">
          <Heading title="Our Process" para="A proven methodology from concept to market success" />
          <div className="relative flex flex-wrap justify-center lg:justify-between gap-x-5 gap-y-4 pb-5 sm:py-5 ">

            <div className="hidden lg:block absolute top-18 left-0 w-full h-0.5 bg-linear-to-r from-[#06B8FF33] via-[#06B8FF] to-[#06B8FF33] -translate-y-1/2 z-0"></div>

            {processImage.map((item) => (
              <div key={item.id} className="relative z-10 flex flex-col items-center group">

                <div className="flex items-center justify-center w-20 h-20 sm:w-24  sm:h-24 rounded-lg sm:rounded-2xl bg-[#0F1D34]  border border-[#06B8FF]/40 sm:shadow-[0px_4px_20px_0px_rgba(6,184,255,0.38)] cursor-pointer hover:scale-105 duration-200">
                  <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain" src={item.image} />

                </div>
                <h1 className="text-center text-[#FFFFFFD4] text-base font-semibold py-3">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0A0D21] pb-10">
          <Heading
            title="Technologies"
            subtitle="We Have"
            para="Everything we use to make things happen"
          />
          <div className="flex flex-wrap justify-center gap-5 max-w-350 mx-auto px-5 mb-10">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(tech.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${activeTab === tech.id
                    ? "bg-[#12253E] text-[#06B8FF] border border-[#06B8FF]" 
                    : "bg-[#12253E]/50 text-white border border-transparent" 
                  }`}
              >
                {tech.title}
              </button>
            ))}
          </div>
          <div className="flex justify-center max-w-350 mx-auto px-5">
            <div>
              {currentImage && (
                <img
                  src={currentImage.image}
                  alt="Technology tools"
                  className="w-full h-auto object-contain animate-in fade-in duration-500"
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ToolMagic;

const technologies = [
  {
    id: 1,
    title: "Design",
  },
  {
    id: 2,
    title: "Frontend",
  },
  {
    id: 3,
    title: "Backend",
  },
  {
    id: 4,
    title: "Database",
  },
  {
    id: 5,
    title: "Cloud",
  },
]


const technologiesImage = [
  {
    id: 1,
    image: "/Design.png",
  },
  {
    id: 2,
    image: "/Frontend.png",
  },
  {
    id: 3,
    image: "/Backend.png",
  },
  {
    id: 4,
    image: "/Database.png",
  },
  {
    id: 5,
    image: "/Cloud.png",
  },
]