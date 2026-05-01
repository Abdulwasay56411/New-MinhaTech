import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroImages = [
    { id: 1, image: "/hero 1.png" },
    { id: 2, image: "/hero 2.png" },
    { id: 3, image: "/hero 3.png" },
    { id: 4, image: "/hero 4.png" },
    { id: 5, image: "/hero 5.png" },
  ];

  const repeatedImages = [...heroImages, ...heroImages, ...heroImages, ...heroImages];

  return (
   
    <div id='home' className='w-full overflow-hidden lg:-mt-33.75 -mt-27.5'>
 
      <div className='max-w-350 mx-auto px-5 pt-32 lg:pt-52'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className='flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12'
        >
          <div className='w-full lg:w-[48%] xl:w-[45%] pt-10 lg:pt-20 text-center lg:text-left space-y-3 md:space-y-5'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-8 sm:leading-12 lg:leading-14  text-[#F2F6F7] font-poppins'>
              Mobile App<span className='text-[#06A9EA]'> Development</span> <br /> That Drive Results
            </h1>
            <p className='text-[#C6C7C8] lg:max-w-lg xl:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-montserrat'>
              Transforming ideas into seamless digital experiences people love to use
            </p>
            <div className='flex flex-wrap gap-3 sm:gap-4 pt-3 md:pt-12 pb-10 justify-center lg:justify-start'>
              <button className='bg-linear-to-r from-[#06A9EA] to-[#06D27E] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-3xl text-white font-semibold shadow-lg shadow-blue-500/20 text-xs sm:text-sm md:text-base cursor-pointer hover:scale-105 transition-transform'>
                Get Free App Consultation
              </button>
              <button className='border border-white/30 px-5 sm:px-7 md:px-10 py-2 sm:py-3 md:py-4 rounded-3xl text-white text-xs sm:text-sm md:text-base cursor-pointer hover:bg-white/10 transition-all'>
                View Pricing
              </button>
            </div>
          </div>
          <div className='relative w-full lg:w-[50%] flex justify-center lg:justify-end items-start lg:-mt-20 overflow-hidden'>
            {/* Mobile View */}
            <div className='lg:hidden flex gap-2 sm:gap-3 justify-center'>
              {[1, 2].map((col) => (
                <div key={col} className='relative h-80 sm:h-96 w-32 sm:w-40 overflow-hidden rounded-xl'>
                  <motion.div
                    className='flex flex-col gap-3 sm:gap-4'
                    animate={{ y: col === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{
                      duration: 75,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                  >
                    {repeatedImages.map((img, index) => (
                      <img key={`mobile-col${col}-${index}`} src={img.image} className='w-full h-auto rounded-lg' alt="app-screen" />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className='hidden lg:flex gap-5 xl:gap-6 w-full justify-end'>
              {[1, 2].map((col) => (
                <div key={col} className='relative h-162.5 xl:h-187.5 w-52 xl:w-60 overflow-hidden rounded-b-2xl'>
                  <motion.div
                    className='flex flex-col gap-5 xl:gap-6 pt-5'
                    animate={{ y: col === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{
                      duration: 75,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                  >
                    {repeatedImages.map((img, index) => (
                      <img key={`desk-col${col}-${index}`} src={img.image} className='w-full h-auto rounded-xl shadow-2xl' alt="app-screen" />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;