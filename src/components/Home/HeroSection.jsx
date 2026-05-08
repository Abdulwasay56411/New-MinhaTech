import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { FaXmark, FaArrowRight, FaShieldHalved } from "react-icons/fa6";
import { FiChevronDown, FiCheck } from 'react-icons/fi';

const services = [
  {
    id: "saas",
    title: "Andriod App Development",
    desc: "Native Android apps built with Kotlin and Java for optimal performance and user experience"
  },
  {
    id: "ai",
    title: "Ios App Development",
    desc: "Crafting premium iOS experiences using Swift and SwiftUI optimized for Apple ecosystem."
  },
  {
    id: "mobile",
    title: "Flutter / Cross Platforms App",
    desc: "Cost effective cross platforms solutions with a single codebase for IOS & Android"
  },
  {
    id: "cloud",
    title: "App Monetization & ASO",
    desc: "Maximize revenue with in app purchases, ads and App Store optimization strategies"
  }
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      const handleLoad = () => setIsLoaded(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  const heroImages = [
    { id: 1, image: "/hero 1.png" }, { id: 2, image: "/hero 2.png" }, { id: 3, image: "/hero 3.png" },
    { id: 4, image: "/hero 4.png" }, { id: 5, image: "/hero 5.png" }, { id: 6, image: "/hero 6.png" },
    { id: 7, image: "/hero 7.png" }, { id: 8, image: "/hero 8.png" }, { id: 9, image: "/hero 9.png" },
    { id: 10, image: "/hero 10.png" }, { id: 11, image: "/hero 11.png" }, { id: 12, image: "/hero 12.png" },
    { id: 13, image: "/hero 13.png" }, { id: 14, image: "/hero 14.png" }, { id: 15, image: "/hero 15.png" },
    { id: 16, image: "/hero 16.png" }, { id: 17, image: "/hero 17.png" }, { id: 18, image: "/hero 18.png" },
    { id: 19, image: "/hero 19.png" }, { id: 20, image: "/hero 20.png" }, { id: 21, image: "/hero 21.png" },
    { id: 22, image: "/hero 22.png" }, { id: 23, image: "/hero 23.png" }, { id: 24, image: "/hero 24.png" },
    { id: 25, image: "/hero 25.png" }, { id: 26, image: "/hero 26.png" }, { id: 27, image: "/hero 27.png" },
    { id: 28, image: "/hero 28.png" }, { id: 29, image: "/hero 29.png" },
  ];

  const repeatedImages = [...heroImages, ...heroImages];

  return (
    <div
      id='home'
      className='relative isolate w-full bg-[url("/herobg.png")] bg-no-repeat bg-cover bg-center overflow-hidden lg:-mt-33.75 -mt-27.5'
    >
      <AnimatePresence>
        {isLoaded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
                x: [0, -15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                opacity: { duration: 2 }
              }}
              className='hidden lg:block absolute -bottom-[20%] left-[-20%] md:left-[-5%] w-75 md:w-125 h-75 md:h-125 rounded-full blur-[100px] md:blur-[140px] pointer-events-none z-[-1]'
              style={{ backgroundColor: 'green' }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.1, 0.18, 0.1],
                x: [0, 20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                opacity: { duration: 2 }
              }}
              className='hidden lg:block absolute top-[5%] right-[-20%] md:right-[-5%] w-87.5 md:w-137.5 h-87.5 md:h-137.5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-[-1]'
              style={{ backgroundColor: '#0ACF83' }}
            />
          </>
        )}
      </AnimatePresence>

      <div className='relative z-10 max-w-350 mx-auto px-5 pt-32 lg:pt-52'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className='flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12'
        >
          {/* TEXT SECTION */}
          <div className='relative w-full pt-10 lg:pt-20 space-y-3 md:space-y-5'>
            <h1 className='font-bold text-2xl sm:text-3xl text-center lg:text-left md:text-[41px] lg:text-[51px] text-[#0ACF83] lg:leading-tight tracking-wide'>
              Building<span className='text-[#F2F6F7] text-5xl sm:text-6xl md:text-[71px] lg:text-[81px]'> <br /> iOS & Andriod </span> <span className='text-[#06A9EA] block text-xl sm:text-2xl md:text-[35px] lg:text-[45px]'>Apps that Transform</span>
            </h1>
            <p className='text-[#D9E3EF] lg:max-w-152 text-center lg:text-left tracking-wide text-sm sm:text-base'>
              From concept to market leadership, MinhaTech engineers high performance, secure, and intuitive mobile solutions that set new industry standards
            </p>

            <div className='flex flex-wrap gap-3 sm:gap-4 pt-3 justify-center lg:justify-start'>
              <button
                onClick={() => setIsModalOpen(true)}
                className='group relative flex items-center gap-1 bg-linear-to-r from-[#06A9EA] to-[#06D27E] px-2 sm:px-4 py-3 md:py-4 rounded-4xl text-white font-semibold shadow-lg shadow-blue-500/20 text-xs sm:text-sm md:text-base cursor-pointer overflow-hidden'
              >
                <div className="relative h-6 flex flex-col overflow-hidden">
                  <span className="flex items-center gap-1 transition-all duration-500 ease-in-out group-hover:-translate-y-full">
                    Get Free App Consultation <img className='w-5 h-5' src="/book free.png" alt="" />
                  </span>
                  <span className="absolute left-0 top-0 flex items-center gap-1 translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0">
                    Get Free App Consultation <img className='w-5 h-5' src="/book free.png" alt="" />
                  </span>
                </div>
              </button>

              <HashLink smooth to="/#pricing">
                <button className='group flex items-center gap-1 border border-[#06B8FF] px-2 sm:px-4 py-3 md:py-4 rounded-4xl text-white text-xs sm:text-sm md:text-base cursor-pointer hover:bg-[#0F1D3433] transition-all'>
                  Explore Options <img className='w-6 h-6 transition-transform duration-300 group-hover:translate-y-1' src="/down arrow.png" alt="" />
                </button>
              </HashLink>
            </div>

            <div className='flex justify-center lg:justify-start gap-3 my-10 lg:my-12 '>
              <img className='w-23 h-10' src="/four img.png" alt="" />
              <div>
                <p className='text-[#06B8FF] font-semibold text-lg sm:text-2xl leading-1 '>*****</p>
                <h1 className='text-[#0ACF83]'>98% on time delivery</h1>
                <p className='text-[#C6C7C8] text-xs sm:text-base'>join 100+ brands scaling with us.</p>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className='relative w-full lg:w-[50%] flex justify-center lg:justify-end items-start lg:-mt-20 overflow-hidden'>
            <div className='lg:hidden flex gap-5 justify-center'>
              {[1, 2].map((col) => (
                <div key={col} className='relative h-80 sm:h-96 w-32 sm:w-40 overflow-hidden rounded-xl'>
                  <motion.div
                    className='flex flex-col gap-3 sm:gap-4'
                    animate={{ y: col === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                  >
                    {repeatedImages.map((img, index) => (
                      <img key={`mobile-${col}-${index}`} src={img.image} className='w-full h-auto rounded-lg' alt="" />
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
                    transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
                    style={{ willChange: "transform" }}
                  >
                    {repeatedImages.map((img, index) => (
                      <img key={`desk-${col}-${index}`} src={img.image} className='w-full h-auto rounded-xl shadow-[0_0px_10px_rgba(8,112,184,0.7)]' alt="" />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-999 overflow-y-scroll bg-[#0B324280] custom-scrollbar  backdrop-blur-md flex justify-center">
            <div className="fixed inset-0 z-0" onClick={() => setIsModalOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-xl bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.2)] border-[0.74] border-[#06B8FF80] rounded-3xl my-32 mx-4 h-fit"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full transition-colors z-20"
              >
                <FaXmark className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-10">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6">
                  <img className='w-3.5 h-3.5' src="/timer.png" alt="" />
                  <span className="text-[10px] text-[#07D580] uppercase tracking-widest font-medium">30-minute discovery call</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Book a Free <span className='text-[#06B8FF]'>Consultation</span></h2>
                <p className="text-[#FFFFFF] text-[11px]  leading-relaxed mb-8">
                  Tell us what you’re building and where you need support. We’ll follow up
                  with the right next step, delievery, approach and time line guidence.
                </p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-[11px] pl-2 text-[#FFFFFF] uppercase tracking-widest">Your Name*</label>
                      <input type="text" placeholder="John Smith" className="w-full bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.1)] border border-[#06B8FF80] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06A9EA]" required />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] pl-2 text-[#FFFFFF] uppercase tracking-widest">Company</label>
                      <input type="text" placeholder="Your Company" className="w-full bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.1)] border border-[#06B8FF80] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06A9EA]" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] pl-2 text-[#FFFFFF] uppercase tracking-widest">Work Email*</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.1)] border border-[#06B8FF80] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06A9EA]" required />
                  </div>

                  <div className="space-y-2">
                    <label className="block pl-2 text-[#FFFFFF] text-[11px] font-bold tracking-[0.2em] uppercase">
                      What do you need help with?
                    </label>
                    <div className="border border-[#06B8FF80] rounded-2xl bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.1)] overflow-hidden  transition-all duration-300">
                      <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors"
                      >
                        <div className="flex flex-col text-left">
                          <h3 className="text-[#FFFFFF] font-bold text-sm">
                            {selectedService ? selectedService.title : "Select a service"}
                          </h3>
                          {selectedService && (
                            <p className="text-gray-400 text-[10px] mt-1 leading-tight">
                              {selectedService.desc}
                            </p>
                          )}
                        </div>
                        <FiChevronDown
                          className={`text-gray-400 text-xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </div>

                      {isOpen && (
                        <div className="p-2 space-y-2 border-t border-[#06B8FF30]">
                          {services.map((item) => {
                            const isSelected = selectedService?.id === item.id;
                            return (
                              <div
                                key={item.id}
                                onClick={() => { setSelectedService(item); setIsOpen(false); }}
                                className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300
                                  ${isSelected ? 'bg-white' : 'hover:bg-[#151515]'}`}
                              >
                                <div className={`mt-1 w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors
                                  ${isSelected ? 'bg-black border-black' : 'border-gray-700 group-hover:border-gray-500'}`}>
                                  {isSelected && <FiCheck className="text-white text-xs" />}
                                </div>

                                <div className="text-left">
                                  <h4 className={`font-bold text-sm transition-colors ${isSelected ? 'text-black' : 'text-white'}`}>
                                    {item.title}
                                  </h4>
                                  <p className={`text-[11px] mt-1 leading-relaxed transition-colors 
                                    ${isSelected ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-[#FFFFFF] pl-2 uppercase tracking-widest">Tell us about your project</label>
                    <textarea rows="3" placeholder="Briefly describe your product, team stages, timeline, and the outcome you want us to help deliver" className="w-full text-[11px] bg-[#02081E] border border-[#06B8FF80] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06A9EA] resize-none"></textarea>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-[#FFFFFF] bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.1)] p-4 rounded-xl border border-[#06B8FF80]">
                    <img className='w-4 h-4' src="/shield.png" alt="" />
                    <span>Your information stays private and is only used to prepare your consultation and follow-up.</span>
                  </div>

                  <button className="group w-full bg-linear-to-r from-[#06A9EA] to-[#06D27E] text-[#FFFFFF] flex items-center justify-between p-4 rounded-2xl transition-all mt-4 cursor-pointer overflow-hidden shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.2)]">

                    <div className="relative overflow-hidden text-left h-10 sm:h-12">

                      <div className="flex flex-col h-full justify-center transition-all duration-500 ease-in-out group-hover:-translate-y-full">
                        <p className="font-bold text-sm sm:text-lg leading-tight">Book Your Free Consultation</p>
                        <p className="text-[9px] sm:text-[11px] opacity-60">We'll reply with the right next step within 24 hours</p>
                      </div>
                      <div className="absolute inset-0 flex flex-col h-full justify-center translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0">
                        <p className="font-bold text-sm sm:text-lg leading-tight">Book Your Free Consultation</p>
                        <p className="text-[9px] sm:text-[11px] opacity-60">We'll reply with the right next step within 24 hours</p>
                      </div>
                    </div>

                    <div className="bg-[#D9D9D9B2] p-2 sm:p-3 rounded-full text-white transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                      <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;