import React, { useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../Heading";

const ClientSays = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const [manualIndex, setManualIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev < ourClient.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (manualIndex < ourClient.length - 1) {
      const nextIndex = manualIndex + 1;
      setManualIndex(nextIndex);
      setCurrentCard(nextIndex); 
    }
  };

  const handleprev = () => {
    if (manualIndex > 0) {
      const prevIndex = manualIndex - 1;
      setManualIndex(prevIndex);
      setCurrentCard(prevIndex); 
    }
  };

  const item = ourClient[currentCard];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-350 mx-auto overflow-hidden px-5 pb-10"
    >
      <Heading title="Clients Success Stories" para="Hear from founders and teams we've helped succeed" />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="relative w-80 h-80 flex shrink-0 items-center justify-center md:order-1">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-full h-full"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path id="circlePath" d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" fill="none" />
              <text className="text-[26px] fill-[#01ff95] font-medium tracking-[0.25em] uppercase">
                <textPath href="#circlePath">MinhaTech App Development IT Company Minhatech</textPath>
              </text>
            </svg>
          </motion.div>
          <img src="/Vector.png" alt="quotes" className="w-24 h-auto z-10" />
        </div>

        <div className="max-w-190 px-2 md:px-5 lg:px-10 md:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <p className="text-[#FFFFFFD4] text-base md:text-2xl font-montserrat font-light leading-relaxed md:text-left">
                {item.para}
              </p>

              <hr className="border-[#D9D9D987] mt-10 mb-8" />

              <div className="flex gap-4 justify-end sm:justify-between flex-wrap">
                <div className="flex gap-5">
                  <img className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" src={item.image} alt={item.name} />
                  <div className="text-left">
                    <h1 className="text-xl md:text-2xl text-white font-bold font-montserrat">{item.name}</h1>
                    <p className="text-[#FFFFFFD4] text-sm md:text-base font-montserrat opacity-80">{item.text}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center w-30 sm:w-40 h-11 rounded-4xl bg-[#06B8FF40]">
                  <div className="flex items-center gap-5 select-none">
                    {/* Back Button Logic */}
                    <FaChevronLeft
                      onClick={handleprev}
                      className={`text-xl sm:text-2xl transition-opacity duration-300 ${
                        manualIndex === 0 ? "text-[#00FB9480]" : "text-[#00FB94] cursor-pointer"
                      }`}
                    />
                    
                    <h1 className="text-[#06B8FF]">
                      {manualIndex + 1} / {ourClient.length}
                    </h1>

                    {/* Next Button Logic */}
                    <FaChevronRight
                      onClick={handleNext}
                      className={`text-xl sm:text-2xl transition-opacity duration-300 ${
                        manualIndex === ourClient.length - 1 ? "text-[#00FB9480]" : "text-[#00FB94] cursor-pointer"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientSays;

const ourClient = [
  { id: 1, para: "“Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life, resulting in a product that exceeded our expectations”", image: "/Client.png", name: "Conor Bradley", text: "Senior Marketing Specialist, TechNova" },
  { id: 2, para: "“From concept to launch, MinhaTech Pub demonstrated exceptional professionalism and creativity. Their team turned our idea into a powerful app that align our business goals.”", image: "/client 2.png", name: "Ahmed Rehman", text: "Founder and Ceo, Revo Tech" },
  { id: 3, para: "“They didn’t just build an app they built a complete digital experience for our users. Highly recommended for anyone serious about quality.”", image: "/client 3.png", name: "James Carter", text: "Creative Director, NovaSphere" },
];