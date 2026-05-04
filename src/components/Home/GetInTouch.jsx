import React from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";

const mail = [
  {
    id: 1,
    title: "info@minhatech.org",
    image: "/mail.png",
  },
  {
    id: 2,
    title: "+92 315 4666899",
    image: "phone.png",
  },
  {
    id: 3,
    title: "Lahore , Pakistan",
    image: "location.png",
  },
];

const choose = [
  {
    id: 1,
    image: "/blueTick.png",
    text: "4+ years of proven expertise in mobile app development?"
  },
  {
    id: 2,
    image: "/blueTick.png",
    text: "Dedicated project manager for seamless communicaion"
  },
  {
    id: 3,
    image: "/blueTick.png",
    text: "Angile methodology with bi-weekly sprint reviews"
  },
  {
    id: 4,
    image: "/blueTick.png",
    text: "Post launch support and growth optimization"
  },
]


const GetInTouch = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact" className="max-w-350 mx-auto px-5 py-10">
      <Heading title="Let’s Build Something Amazing" para="Ready to turn your app idea into reality? Get in touch today" />
      <div className="flex flex-wrap justify-center lg:justify-between gap-4">
        <div>
          {mail.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="flex justify-center items-center w-14 h-14 border my-4 rounded-2xl border-[#06B8FF33] bg-[#06B8FF1A] backdrop-blur-xl shadow-2xl shadow-[#06B8FF33]">
                <img className="w-7 h-7 object-contain" src={item.image} alt="" />
              </div>
              <p className="text-[#FFFFFF] text-xl font-montserrat">{item.title}</p>
            </div>
          ))}
          <div className=" w-full md:w-150 mt-7 h-auto border border-[#FFFFFF1A] bg-[#06B8FF26] rounded-[30px] p-8">
            <h1 className="font-semibold text-2xl pb-3 text-[#FFFFFFD4]">Why Choose MinhaTech?</h1>
            {choose.map((item) => (
              <div key={item.id} className="flex items-center gap-4" >
                <img className="w-3.75 h-2.5" src={item.image} alt="" />
                <p className="text-[#C6C7C8] text-sm sm:text-base py-1.5">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-140 h-137 rounded-3xl bg-[#06B8FF26] border border-[#FFFFFF33] backdrop-blur-2xl shadow-2xl shadow-[#06B8FF33] p-5">
          <form>
            <label className="block text-white">First Name</label>
            <input
              className="w-full h-14 bg-[#AFECFF1A] mt-3 mb-6 rounded-[20px] outline-none px-5 text-[#C6C7C8] font-medium font-montserrat text-lg"
              type="text"
              placeholder="First Name"
              required
            />
            <label className="block text-white">Email</label>
            <input
              className="w-full h-14 bg-[#AFECFF1A] mt-3 mb-6 rounded-[20px] outline-none px-5 text-[#C6C7C8] font-medium font-montserrat text-lg"
              type="email"
              placeholder="Email"
              required
            />
            <label className="block text-white">Project Details</label>
            <textarea
              className="resize-none w-full h-38 outline-none mt-3 p-5 rounded-[20px] text-lg font-medium bg-[#AFECFF1A] text-[#C6C7C8]"
              placeholder="Tell us about your project idea"
              required
            ></textarea>
            <div className="py-5">
              <button
                type="submit"
                className="bg-linear-to-r from-[#0598D3] to-[#07D580] w-full h-13 font-montserrat font-semibold text-lg text-[#FFFFFFED] cursor-pointer rounded-2xl hover:scale-102 hover:shadow-2xl hover:shadow-[#0598D3]/30 duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
