import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaArrowRight } from "react-icons/fa6";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const services = [
  {
    id: "saas",
    title: "Android App Development",
    desc: "Native Android apps built with Kotlin and Java for optimal performance and user experience"
  },
  {
    id: "ai",
    title: "iOS App Development",
    desc: "Crafting premium iOS experiences using Swift and SwiftUI optimized for Apple ecosystem."
  },
  {
    id: "mobile",
    title: "Flutter / Cross Platforms App",
    desc: "Cost effective cross platforms solutions with a single codebase for iOS & Android"
  },
  {
    id: "cloud",
    title: "App Monetization & ASO",
    desc: "Maximize revenue with in app purchases, ads and App Store optimization strategies"
  }
];

const ourPlans = [
  {
    id: 1,
    title: "Starter App",
    para: "(for small businesses / MVPs)",
    amount: "$400 - $800",
    btn: "Schedule a demo",
    features: [
      "3-5 High-Quality UI Screens",
      "Basic UX Flow (User journey)",
      "Android OR iOS (Single Platform)",
      "Firebase / Basic Backend Setup",
      "Basic Animation & Interaction",
      "1 Revision Round",
      "App Icon + Splash Screen",
    ],
  },
  {
    id: 2,
    title: "Growth App",
    para: "(for scaling startups)",
    amount: "$900 - $1,500",
    btn: "Schedule a demo",
    features: [
      "6-12 Premium UI Screens",
      "Complete UX Strategy + Flow",
      "Android + iOS (Cross Platform)",
      "API Integration (e.g login, data, etc)",
      "Basic Admin Panel (Web)",
      "Push Notification Integration",
      "2-3 Revision Rounds",
      "Performance Optimization",
      "App Store Upload Guidance",
    ],
  },
  {
    id: 3,
    title: "Advanced App",
    para: "(for serious businesses)",
    amount: "Custom Pricing",
    span: "Price depends on features & complexity",
    btn: "Schedule a demo",
    features: [
      "Unlimited Screens (Custom UI/UX)",
      "Fully Scalable Backend (Custom)",
      "Real-time Features (Chat, Tracking, etc.)",
      "Advanced Admin Dashboard",
      "Security + Performance Optimization",
      "Ongoing Support (1 Month Free)",
      "User Analytics Integration",
      "Role-based System (Admin/User)",
    ],
  },
];

const hire = [
  {
    id: 1,
    image: "/Designer.png",
    title: "Developer Resources",
    price: "$32 / hr",
    para: "Hire skilled developers with flexible pricing based on your project timeline. Rates update automatically as your scope evolves.",
    btn: "Hire Developer",
  },
  {
    id: 2,
    image: "/Developer.png",
    title: "Designer Resources",
    price: "$20 / hr",
    para: "Work with creative designers and get better rates based on your needs. Pricing adjusts automatically with project duration.",
    btn: "Hire Designer",
  },
];

const Plans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      className="max-w-350 mx-auto px-5 py-7"
      id="pricing"
    >
      <Heading
        title="Transparent"
        subtitle="Pricing"
        para="Choose the perfect plan for your project"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
        {ourPlans.map((item) => (
          <div
            key={item.id}
            className="bg-[#0B1D33] border border-[#FFFFFF33] hover:bg-[#00D8FF]/20 hover:shadow-[0_10px_50px_-10px_rgba(0,216,255,0.2)] duration-200 cursor-pointer w-full h-auto p-5 mx-2 rounded-4xl"
          >
            <h1 className="text-[#F9F9F9] font-bold text-xl sm:text-2xl">
              {item.title}
            </h1>
            <p className="text-base text-[#C6C7C8]">{item.para}</p>

            <div
              className="my-6 w-full h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06B8FF80 50%, transparent 50%)",
                backgroundSize: "20px 2px",
              }}
            />

            <div className="pb-4 min-h-16">
              <h1 className="text-2xl font-bold text-[#F9F9F9]">
                {item.amount}
              </h1>
              {item.span && (
                <span className="text-sm font-normal text-[#C6C7C8] block">
                  {item.span}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full h-15 rounded-2xl text-lg font-medium my-4 text-[#F9F9F9] border border-[#06B8FF] bg-[#06B8FF42] cursor-pointer duration-200 hover:bg-linear-to-r hover:from-[#00FB94] hover:to-[#06B8FF] hover:shadow-2xl hover:shadow-[#06B8FF42] hover:scale-102">
              {item.btn}
            </button>

            <div className="pt-3">
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <img className="w-4 h-4 mt-1 shrink-0" src="/Tick.png" alt="" />
                  <p className="text-lg text-[#C6C7C8]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-5 sm:mt-2">
        {hire.map((item) => (
          <div
            key={item.id}
            className="w-full h-auto lg:my-5 p-8 rounded-[30px] bg-[#0B1D33] border border-[#FFFFFF33]"
          >
            <img
              className="w-17 h-15 object-contain mb-5"
              src={item.image}
              alt=""
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 className="font-bold text-2xl md:text-2xl text-[#F9F9F9]">
                {item.title}
              </h1>
              <p className="font-bold text-lg md:text-3xl text-[#F9F9F9]">
                {item.price}
              </p>
            </div>
            <p className="text-[#C6C7C8] text-base lg:text-[22px] py-3">
              {item.para}
            </p>
            <button className="w-full h-16 bg-[#06B8FF63] border border-[#06B8FF] text-white rounded-2xl mt-3 cursor-pointer duration-200 hover:scale-102 hover:shadow-2xl hover:shadow-[#06B8FF42]">
              {item.btn}
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-999 overflow-y-scroll bg-[#0B324280] custom-scrollbar backdrop-blur-md flex justify-center">
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
                <p className="text-[#FFFFFF] text-[11px] leading-relaxed mb-8">
                  Tell us what you're building and where you need support. We'll follow up
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
                    <div className="border border-[#06B8FF80] rounded-2xl bg-[#02081E] shadow-[0px_2.95px_44.1px_0px_rgba(6,184,255,0.1)] overflow-hidden transition-all duration-300">
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
                          {services.map((service) => {
                            const isSelected = selectedService?.id === service.id;
                            return (
                              <div
                                key={service.id}
                                onClick={() => { setSelectedService(service); setIsOpen(false); }}
                                className={`group relative flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300
                                  ${isSelected ? 'bg-white' : 'hover:bg-[#151515]'}`}
                              >
                                <div className={`mt-1 w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors
                                  ${isSelected ? 'bg-black border-black' : 'border-gray-700 group-hover:border-gray-500'}`}>
                                  {isSelected && <FiCheck className="text-white text-xs" />}
                                </div>
                                <div className="text-left">
                                  <h4 className={`font-bold text-sm transition-colors ${isSelected ? 'text-black' : 'text-white'}`}>
                                    {service.title}
                                  </h4>
                                  <p className={`text-[11px] mt-1 leading-relaxed transition-colors 
                                    ${isSelected ? 'text-gray-600' : 'text-gray-400'}`}>
                                    {service.desc}
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
    </motion.div>
  );
};

export default Plans;