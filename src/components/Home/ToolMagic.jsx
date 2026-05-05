import React from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";


const toolImages = [
  { id: 1, image: "/Tool 3.png" },
  { id: 2, image: "/Tool 5.png" },
  { id: 3, image: "/Tool 4.png" },
  { id: 4, image: "/Tool 6.png" },
  { id: 5, image: "/Tool 1.png" },
  { id: 6, image: "/Tool 2.png" },
  { id: 7, image: "/Tool 7.png" },
];

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
      staggerChildren: 0.3, // Har box ke darmiyan 0.3s ka delay
      delayChildren: 0.2,   // Shuru hone se pehle halka sa wait
    },
  },
};

// Items Variants: Boxes niche se upar ayenge
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Line Variant: Line left se right grow karegi
const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" }
  },
};

const ToolMagic = () => {

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
          <div className="relative flex flex-wrap justify-center lg:justify-between gap-x-5  py-5 ">

            <div className="hidden lg:block absolute top-18 left-0 w-full h-0.5 bg-linear-to-r from-[#06B8FF33] via-[#06B8FF] to-[#06B8FF33] -translate-y-1/2 z-0"></div>

            {processImage.map((item) => (
              <div key={item.id} className="relative z-10 flex flex-col items-center group">

                <div className="w-20 h-20 sm:w-24  sm:h-24 rounded-lg sm:rounded-2xl bg-linear-to-t p-0.5 from-[#06B8FF] to-[#00FB94B2] sm:shadow-[0px_4px_20px_0px_rgba(6,184,255,0.38)] cursor-pointer hover:scale-105 duration-200">
                  <div className="w-full h-full bg-[#09182B] rounded-[5px] sm:rounded-2xl flex items-center justify-center">
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain" src={item.image} />
                  </div>
                </div>
                <h1 className="text-center text-[#FFFFFFD4] text-base font-semibold py-3">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-linear-to-t  from-[#112139] to-[#09182B00] pb-10">
          <Heading title="Tools Behind Our Magic" para="Everything we use to make things happen" />
          <div className="flex flex-wrap justify-center  gap-5 max-w-250 mx-auto px-5">
            {toolImages.map((item) => (
              <div key={item.id}
                className="w-32 h-13 sm:w-56 sm:h-20 flex items-center justify-center rounded-xl p-0.5  bg-linear-to-r from-[#06B8FF] to-[#07D580] cursor-pointer hover:scale-105 duration-300"
              >
                <div className="bg-[#0F1D34] w-full h-full rounded-[10px] flex items-center justify-center">
                  <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ToolMagic;
