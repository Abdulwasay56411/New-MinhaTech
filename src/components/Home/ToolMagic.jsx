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
    title: "Launch",
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
          <Heading title="Our" subtitle="Process" para="A proven methodology from concept to market success" />
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
                className={`px-6 cursor-pointer py-2 rounded-lg transition-all duration-300 ${activeTab === tech.id
                  ? "bg-[#12253E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.2)] text-[#06B8FF] border border-[#06B8FF]"
                  : "bg-[#12253E]/50 text-white border border-transparent"
                  }`}
              >
                {tech.title}
              </button>
            ))}
          </div>
          <div className="max-w-300 mx-auto px-5">
            <div className="flex items-center h-auto py-5 border border-[#06B8FF] bg-[#0B0F23] shadow-[0px_0px_61px_0px_rgba(6,184,255,0.14)] rounded-[17px]">
              <div className="flex items-center justify-center flex-wrap gap-5 lg:gap-20 px-5 w-fit mx-auto">
                {currentImage && currentImage.image.map((tool, index) => (
                  <div key={index} className="flex  gap-2 items-center">
                    <img className="w-5 h-5 md:w-9 md:h-9" src={tool.src} alt="" />
                    <p className="text-[#F7F7F7] text-base md:text-2xl font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
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
    image: [
      { src: "/Design1.png", name: "Figma" },
      { src: "/Design2.png", name: "Adobe XD" },
      { src: "/Design3.png", name: "Illustrator" },
      { src: "/Design4.png", name: "Photoshop" },
      { src: "/Design5.png", name: "Canva" },
    ]
  },
  {
    id: 2,
    image: [
      { src: "/frontend1.png", name: "Kotlin" },
      { src: "/frontend2.png", name: "Flutter" },
      { src: "/frontend3.png", name: "React Native" },
      { src: "/frontend 4.png", name: "Jetpack Compose" },
    ]

  },
  {
    id: 3,
    image: [
      { src: "/backend1.png", name: "Firebase" },
      { src: "/backend2.png", name: "Node.js" },
      { src: "/backend3.png", name: "Laravel" },
      { src: "/backend4.png", name: "Django" },
      { src: "/backend5.png", name: "Spring Boot" },
    ]

  },
  {
    id: 4,
    image: [
      { src: "/backend1.png", name: "Firebase" },
      { src: "/database1.png", name: "MYSQL" },
      { src: "/database2.png", name: "PostgreSQL" },
      { src: "/database3.png", name: "MongoDB" }
    ]

  },
  {
    id: 5,
    image: [
      { src: "/cloud1.png", name: "Google Cloud Platform" },
      { src: "/cloud2.png", name: "Amazon Web Services" },
      { src: "/cloud3.png", name: "Microsoft Azure" },
    ]

  },
]