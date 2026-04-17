import React from "react";
import { motion } from "framer-motion";

const ClientSays = () => {
  return (
    <div className="max-w-350 mx-auto">
      <div className="px-5 py-10">
        {/* Section Heading */}
        <div className="flex items-center gap-2 pb-12">
          <img className="w-10 h-10" src="/star.png" alt="star" />
          <h1 className="font-montserrat font-bold text-2xl md:text-4xl text-[#FFFFFF]">
            What Our Clients Saying
          </h1>
        </div>

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
            {ourClient.map((item) => (
              <div key={item.id} className="w-full">
                <p className="text-[#FFFFFFD4] text-base md:text-2xl font-montserrat font-light leading-relaxed  md:text-left">
                  {item.para}
                </p>

                <hr className="border-[#D9D9D987] mt-10 mb-8" />

                <div className="flex gap-5">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#00FB94]"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-left">
                    <h1 className="text-xl md:text-2xl text-[#00FB94] font-bold font-montserrat">
                      {item.name}
                    </h1>
                    <p className="text-[#FFFFFFD4] text-sm md:text-base font-montserrat opacity-80">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
];
