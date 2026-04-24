import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerText = [
  {
    id: 1,
    title: "Services",
    links: ["Android Development", "IOS Development", "Cross Platforms Apps Development", "App Monetization", "ASO Services"]
  },
  {
    id: 2,
    title: "Company",
    links: ["Home", "About Us", "Projects", "Contact Us"]
  },
];

const Footer = () => {
  return (
    <div className="max-w-350 mx-auto bg-linear-to-t from-[#12253E00] to-[#12253E] py-6 px-5">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_.5fr] gap-x-20 gap-y-5 px-5">
        <div>
          <h1 className="text-[#06B8FF] font-semibold text-5xl">MinhaTech</h1>
          <p className="text-[#C6C7C8] text-lg mt-2">
            Buliding revenue generated mobile apps for startups and enterprises. From Idea to App Store, we deliver excellence
          </p>
          <div className="flex items-center gap-2 my-8">
            <div className="bg-[#06B8FF26] text-white w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer">
              <FaInstagram size={22} />
            </div>
            <div className="bg-[#06B8FF26] text-white w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer">
              <FaLinkedinIn size={22} />
            </div>
            <div className="bg-[#06B8FF26] text-white w-12 h-12 flex items-center justify-center rounded-2xl cursor-pointer">
              <FaFacebookF size={22} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-white mb-3">Services</h1>
          {footerText[0].links.map((link, index) => (
            <p key={index} className="text-[#C6C7C8] cursor-pointer hover:text-white mb-2">
              {link}
            </p>
          ))}
        </div>
        <div>
          <h1 className="font-bold text-white mb-3">Company</h1>
          {footerText[1].links.map((link, index) => (
            <p key={index} className="text-[#C6C7C8] cursor-pointer hover:text-white mb-2">
              {link}
            </p>
          ))}
        </div>
      </div>
      {/* Full width shiny text section */}
      <div className="w-full mt-10 mb-5 overflow-hidden">
        <h1 className="text-shine text-[16vw] font-bold text-[#FFFFFF1A] uppercase text-center tracking-tighter w-full leading-none">
          MINHATECH
        </h1>
      </div>
      <hr className="text-[#D9D9D96B] py-3" />
      <div className="flex flex-wrap gap-2 justify-center sm:justify-between">
        <p className="font-medium text-sm text-[#FFFFFFC7]">©2022-2023 Minha Tech. All Rights Reserved</p>
        <div className="flex gap-5">
          <p className="font-medium text-sm text-[#FFFFFFC7]">Privacy Policy</p>
          <p className="font-medium text-sm text-[#FFFFFFC7]">Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
