import React from "react";
import { motion } from "framer-motion";
import Heading from "../Heading";

const ToolMagic = () => {
  const duplicatedTools = [...toolImages, ...toolImages];

  return (
    <div className="max-w-350 mx-auto">
      <div className="mx-5 overflow-hidden py-10">
        <Heading title="Tools Behind The Magic"/>
        <motion.div
          className="flex gap-5 w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedTools.map((item, index) => (
            <div
              key={index}
              className="min-w-24.5 md:min-w-94 h-20 md:h-42 shrink-0 flex justify-center items-center rounded-2xl p-0.5 bg-linear-to-r from-[#06B8FF] to-[#00FB94]"
            >
              <div className="bg-[#09182B] w-full h-full rounded-2xl flex justify-center items-center">
                <img
                  className="w-7 h-7 md:w-24 md:h-24 object-contain"
                  src={item.image}
                  alt={`Tool ${item.id}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const toolImages = [
  { id: 1, image: "/Tool 1.png" },
  { id: 2, image: "/Tool 2.png" },
  { id: 3, image: "/Tool 3.png" },
  { id: 4, image: "/Tool 4.png" },
  { id: 5, image: "/Tool 5.png" },
  { id: 6, image: "/Tool 6.png" },
  { id: 7, image: "/Tool 7.png" },
];

export default ToolMagic;
