import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../Heading";

const ourClient = [
  { id: 1, para: "We hired Minhatech to develop our Voice Drive GPS application and the experience was excellent from start to finish. They understood our vision perfectly and delivered a high quality app with smooth voice navigation and smart route planning features", image: "/Client.png", name: "Founder", text: "Viral Studio" },
  { id: 2, para: "What really sets Minhatech apart is not just their technical skills but the way they approach a project with ownership, clarity and attention to every small detail. The entire process felt structured, stress-free and well managed.", image: "/client 2.png", name: "Sulman Ahmad", text: "Founder & Ceo Sartaj Develoeprs" },
  { id: 3, para: "Wasiq and his team showed a strong sense of responsibility and professionalism throughout the project. Everything was delivered on time with great attention to detail. It was a pleasure working with Minhatech and I would be happy to collaborate again.", image: "/client 3.png", name: " Ahmed Al-Farsi ", text: "Entrepreneur (UAE)" },
  { id: 4, para: "We approached Minhatech with a highly complex idea that required strong technical expertise and careful execution. From day one, the team demonstrated a deep overall understanding of the challenges and handled everything with confidence and clarity.", image: "/client 4.png", name: "James Walker ", text: "CTO (UK)" },
];

const ClientSays = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev < ourClient.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  const isFirstCard = currentCard === 0;
  const isLastCard = currentCard === ourClient.length - 1;
  const item = ourClient[currentCard];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-350 mx-auto overflow-hidden px-5 pb-10"
    >
      <Heading title="Clients Success" subtitle="Stories" para="Hear from founders and teams we've helped succeed" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="relative w-50 h-50 sm:w-80 sm:h-80 flex shrink-0 items-center justify-center md:order-1">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-full h-full"
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <path id="circlePath" d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" fill="none" />
              <text className="text-[28px] fill-[#01ff95] font-medium tracking-[0.30em] uppercase">
                <textPath href="#circlePath">MinhaTech App Development IT Company</textPath>
              </text>
            </svg>
          </motion.div>
          <img src="/Vector.png" alt="quotes" className="w-18 sm:w-24 h-auto z-10" />
        </div>
        <div className="max-w-190 px-2 md:px-5 lg:px-10 md:order-2">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <p className="text-[#FFFFFFD4] text-base md:text-2xl font-light leading-relaxed md:text-left h-auto pb-5">
                  {item.para}
                </p>

                <hr className="border-[#D9D9D987] mb-8" />

                <div className="flex gap-5">
                  <img className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" src={item.image} alt={item.name} />
                  <div className="text-left">
                    <h1 className="text-lg md:text-2xl text-white font-bold">{item.name}</h1>
                    <p className="text-[#FFFFFFD4] text-sm md:text-base opacity-80">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-4 justify-center mt-8 sm:justify-between flex-wrap sm:-mt-18 relative z-20">
              <div className="hidden sm:block"></div>

              <div className="flex flex-col justify-center items-center w-26 sm:w-40 h-10 rounded-4xl bg-[#06B8FF40]">
                <div className="flex items-center gap-2 sm:gap-3 select-none">
                
                  <FaChevronLeft
                    onClick={handleprev}
                    className={`text-base sm:text-xl transition-all duration-300 ${
                      isFirstCard 
                        ? "text-[#00FB9480]" 
                        : "text-[#00FB94] cursor-pointer "
                    }`}
                  />
                  
                  <h1 className="text-[#06B8FF] font-bold">
                    {currentCard + 1} / {ourClient.length}
                  </h1>

                  {/* Next Button */}
                  <FaChevronRight
                    onClick={handleNext}
                    className={`text-base sm:text-xl transition-all duration-300 ${
                      isLastCard 
                        ? "text-[#00FB9480]" 
                        : "text-[#00FB94] cursor-pointer hover:opacity-70"
                    }`}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientSays;