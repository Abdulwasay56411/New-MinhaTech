import React from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";

const ourPlans = [
  {
    id: 1,
    title: "Starter App",
    para: "(for small businesses / MVPs)",
    amount: "$500 - $700 ",
    btn: "Schedule a demo",
    text1: "3-5 Screens (UI Design)",
    text2: "Basic UX Flow",
    text3: "Android OR iOS (single platform)",
    text4: "Simple Backend (if needed)",
    text5: "1 Revision Round",
    text6: "Delivery Time (e.g., 2-3 weeks)",
  },
  {
    id: 2,
    title: "Growth App",
    para: " (for scaling startups)",
    amount: " $700 - $1,000",
    btn: "Schedule a demo",
    text1: "6-12 Screens",
    text2: "Advanced UI/UX Design",
    text3: "Android + iOS (cross-platform)",
    text4: "API Integration",
    text5: "2-3 Revisions",
    text6: "Delivery Time (e.g., 2-6 weeks)",
  },
  {
    id: 3,
    title: "Advanced App",
    para: " (for serious businesses)",
    amount: " $1,000- $2,000",
    btn: "Schedule a demo",
    text1: "Unlimited / Complex Features",
    text2: "Custom Backend System",
    text3: "Payment Integration",
    text4: "Scalability + Security",
    text5: "Ongoing Support",
    text6: "Timeline: Based on scope",
  },
];

const hire = [
  {
    id: 1,
    image: "/Designer.png",
    title: "Developer Resources",
    price: "$&32/ hr",
    para: "Hire skilled developers with flexible pricing based on your project timeline. Rates update automatically as your scope evolves.",
    btn: "Hire Developer"
  },
  {
    id: 2,
    image: "/Developer.png",
    title: "Designer Resources",
    price: "$&28/ hr",
    para: "Work with creative designers and get better rates based on your needs. Pricing adjusts automatically with project duration.",
    btn: "Hire Designer"
  },
]




const Plans = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 1.2, ease: "easeOut"}}
    viewport={{once: true, amount: 0.05}}
    className="max-w-350 mx-auto px-5 py-7" id="pricing" >
      <Heading title="Transparent Pricing" para="Choose the perfect plan for your project" />
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
        {ourPlans.map((item) => (
          <div
            key={item.id}
            className="bg-[#0B1D33] border border-[#FFFFFF33] hover:bg-[#00D8FF]/20 hover:shadow-[0_10px_50px_-10px_rgba(0,216,255,0.2)] duration-200 cursor-pointer w-full h-auto p-5 mx-2 rounded-4xl"
          >
            <h1 className="text-[#F9F9F9] font-medium text-2xl">
              {item.title}
            </h1>
            <p className="text-base text-[#C6C7C8]">
              {item.para}
            </p>
            <div
              className="my-6 w-full h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06B8FF80 50%, transparent 50%)",
                backgroundSize: "20px 2px",
              }}
            />
            <h1 className="text-2xl font-bold pb-4 text-[#F9F9F9]">
              {item.amount} <span className="text-lg font-normal">/ month</span>
            </h1>
            <button className="w-full h-15 rounded-2xl text-lg font-medium mb-8 text-[#F9F9F9] border border-[#06B8FF] bg-[#06B8FF42] cursor-pointer duration-200 hover:bg-linear-to-r hover:from-[#00FB94] hover:to-[#06B8FF] hover:shadow-2xl hover:shadow-[#06B8FF42] hover:scale-102">
              {item.btn}
            </button>
            <div>
              {[
                item.text1,
                item.text2,
                item.text3,
                item.text4,
                item.text5,
                item.text6,
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 pt-4">
                  <img className="w-4 h-4" src="/Tick.png" alt="" />
                  <p className="text-lg text-[#C6C7C8] ">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-2 ">
        {hire.map((item) => (
          <div key={item.id} className="w-full h-auto lg:my-5 p-8 rounded-[30px] bg-[#0B1D33] border border-[#FFFFFF33]">
            <img className="w-17 h-15 object-contain mb-5" src={item.image} alt="" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h1 className="font-bold text-lg md:text-2xl text-[#F9F9F9]">{item.title}</h1>
              <p className="font-bold text-lg md:text-3xl text-[#F9F9F9]">{item.price}</p>
            </div>
            <p className="text-[#C6C7C8] text-sm sm:text-base lg:text-xl py-3">{item.para}</p>
            <button className="w-full h-16 bg-[#06B8FF63] border border-[#06B8FF] text-white rounded-2xl mt-3 cursor-pointer duration-200 hover:scale-102 hover:shadow-2xl hover:shadow-[#06B8FF42]">{item.btn}</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Plans;