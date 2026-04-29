import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../Heading";

const ClientSays = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    if (currentCard < ourClient.length - 1) {
      setCurrentCard((prev) => prev + 1);
    }
  };

  const handleprev = () => {
    if (currentCard > 0) {
      setCurrentCard((prev) => prev - 1);
    }
  };

  const item = ourClient[currentCard];

  return (
    <div className="max-w-350 mx-auto overflow-hidden px-5 py-10">
      {/* Section Heading */}
      <Heading title="Clients Success Stories" para="Hear from founders and teams we've helped succeed"/>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="relative w-80 h-80  flex shrink-0 items-center justify-center md:order-1">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="absolute w-full h-full"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path
                id="circlePath"
                d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"
                fill="none"
              />
              <text className="text-[26px] fill-[#00FB94] font-medium tracking-[0.25em] uppercase">
                <textPath href="#circlePath">
                  MinhaTech App Development IT Company Minhatech
                </textPath>
              </text>
            </svg>
          </motion.div>

          <img src="/Vector.png" alt="quotes" className="w-24 h-auto z-10" />
        </div>
        <div className="max-w-190 px-2 md:px-5 lg:px-10 md:order-2">
          <div key={item.id} className="w-full">
            <p className="text-[#FFFFFFD4] text-base md:text-2xl font-montserrat font-light leading-relaxed  md:text-left">
              {item.para}
            </p>

            <hr className="border-[#D9D9D987] mt-10 mb-8" />

            <div className="flex gap-4 justify-end sm:justify-between flex-wrap">
              <div className="flex gap-5">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="text-left">
                  <h1 className="text-xl md:text-2xl text-white font-bold font-montserrat">
                    {item.name}
                  </h1>
                  <p className="text-[#FFFFFFD4] text-sm md:text-base font-montserrat opacity-80">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-30 sm:w-40 h-11 rounded-4xl bg-[#06B8FF40]  ">
                <div className="flex items-center gap-5 select-none">
                  <FaChevronLeft
                    onClick={handleprev}
                    className={`text-xl sm:text-2xl ${
                      currentCard === 0
                        ? "text-[#00FB9480]"
                        : "text-[#00FB94] cursor-pointer"
                    }`}
                  />
                  <h1 className="text-[#06B8FF]">
                    {currentCard + 1} / {ourClient.length}
                  </h1>
                  <FaChevronRight
                    onClick={handleNext}
                    className={`text-xl sm:text-2xl ${
                      currentCard === ourClient.length - 1
                        ? "text-[#00FB9480] "
                        : "text-[#00FB94] cursor-pointer"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSays;

const ourClient = [
  {
    id: 1,
    para: "“Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life, resulting in a product that exceeded our expectations”",
    image: "/Client.png",
    name: "Conor Bradley",
    text: "Senior Marketing Specialist, TechNova",
  },
  {
    id: 2,
    para: "“ MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life, resulting in a product that exceeded our expectations”",
    image: "/Client.png",
    name: "Conor Bradley",
    text: "Senior Marketing Specialist, TechNova",
  },
  {
    id: 3,
    para: "“ This is 3rd MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life, resulting in a product that exceeded our expectations”",
    image: "/Client.png",
    name: "Conor Bradley",
    text: "Senior Marketing Specialist, TechNova",
  },
];
