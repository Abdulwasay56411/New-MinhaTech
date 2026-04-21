import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerText = [
  {
    id: 1,
    title: "Company",
    text: "Home",
    text1: "About Us",
    text2: "Projects",
    text3: "Contact Us",
  },
  {
    id: 2,
    title: "Services",
    text: "Android App Development",
    text1: "IOS App Development",
    text2: "ASO App Development",
    text3: "UI/ UX Design",
  },
];

const Footer = () => {
  return (
    <div className="max-w-350 mx-auto bg-[#12253E] h-auto pt-10 pb-5 md:pb-0">
      {/* Top Section */}
      <div className="lg:flex justify-between gap-4 px-5">
        <div>
          <img className="w-full h-auto lg:w-140 lg:h-70 object-cover" src="/Footer.png" alt="" />
          <div className="flex justify-between py-3">
            <p className="font-montserrat text-sm sm:text-xl text-[#FFFFFF]">Stay Connected</p>
            <p className="font-montserrat text-sm sm:text-xl text-[#FFFFFF]">contact@minhatech.org</p>
          </div>
        </div>
        
        {footerText.map((item) => (
          <div className="py-5 lg:py-0" key={item.id}>
            <h1 className="text-[#FFFFFF] font-semibold pb-2 font-montserrat text-2xl">
              {item.title}
            </h1>
            {[item.text, item.text1, item.text2, item.text3].map(
              (text, idx) => (
                <p className="text-base text-[#FFFFFF] font-montserrat py-2" key={idx}>
                  {text}
                </p>
              )
            )}
          </div>
        ))}

        <div className="flex gap-2 items-center lg:block">
          <div className="w-8 flex justify-center items-center h-8 border border-white rounded-full my-2 cursor-pointer">
            <FaLinkedinIn size={15} color="white" />
          </div>
          <div className="w-8 flex justify-center items-center h-8 border border-white rounded-full cursor-pointer">
            <FaInstagram size={15} color="white" />
          </div>
          <div className="w-8 flex justify-center items-center h-8 border border-white rounded-full my-2 cursor-pointer">
            <FaFacebookF size={15} color="white" />
          </div>
        </div>
      </div>

      {/* Bottom Section - No Absolute, Just Static Flow */}
      <div className="pt-5 pb-2 px-5">
        <hr className="text-[#D9D9D96B]"/>
        <div className="flex flex-wrap justify-between gap-4 py-5">
            <p className="hidden md:block font-montserrat font-medium text-sm text-[#FFFFFFC7]">©2025-2026 Minha Tech. All Rights Reserved</p>
            <p className="font-montserrat font-medium text-sm text-[#FFFFFFC7]">Terms of Use</p>
            <p className="font-montserrat font-medium text-sm text-[#FFFFFFC7]">Privacy Policy</p>
        </div>
      </div>
      <div className="px-5 pb-5">
        <img  src="/MinhaTechText.png" alt="" />
        <p className="block md:hidden font-montserrat font-medium text-sm text-[#FFFFFFC7] mt-3">
          ©2025-2026 Minha Tech. All Rights Reserved
        </p> 
      </div>
    </div>
  );
};

export default Footer;