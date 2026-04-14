import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isCursor, setIsCursor] = useState(false);
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() =>{
    const handleScroll = () =>{
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else{
        setIsScroll(false)
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className="sticky font-montserrat top-0 left-0 z-50 w-full mx-auto">
      {/* Blue Navbar */}
      <div className="w-full sm:flex sm:flex-row sm:justify-between items-center flex flex-col justify-center px-4 md:px-8 lg:px-16 py-2 bg-[#076895] text-white">
        <div className="flex flex-col items-center sm:gap-0 sm:w-100 sm:flex sm:flex-row sm:justify-between">
          <p className="flex text-sm sm:text-base items-center gap-3">
            {" "}
            <MdEmail size={20} />
            contact@minhatech.org
          </p>
          <p className="flex  text-sm sm:text-base  items-center gap-3">
            <IoMdCall size={20} />
            03440460091
          </p>
        </div>
        <div className="flex pt-1 items-center gap-4">
          <div className="w-6 flex justify-center items-center h-6 border border-white rounded-full">
            <FaLinkedinIn size={11} />
          </div>
          <div className="w-6 flex justify-center items-center h-6 border border-white rounded-full">
            <FaInstagram size={11} />
          </div>
          <div className="w-6 flex justify-center items-center h-6 border border-white rounded-full">
            <FaFacebookF size={11} />
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className={`flex w-full items-center pb-3 justify-between px-14 ${isScroll ? "shadow-2xl bg-[#09182B]": ""}`}>
        <img className="w-26 h-17" src="/MinhaTech.png" alt="" />
        <div className="hidden md:flex md:justify-center md:w-95 lg:w-158 bg-[#06B8FF33] rounded-[40px] mt-4 mb-2 py-2 px-4 text-[#FFFFFF] md:gap-8 lg:gap-16">
          {navbarLink.map((item) => (
            <ul key={item.id} className="group relative py-2">
              <li className="md:text-sm lg:text-xl cursor-pointer text-center font-medium">
                {item.name}
              </li>
              <span className="absolute w-0 h-0.5 left-0 bottom-0 group-hover:w-full transition-all duration-300 bg-linear-to-r from-[#00FB94] to-[#06B8FF]"></span>
            </ul>
          ))}
        </div>
        <div
          onMouseEnter={() => setIsCursor(true)}
          onMouseLeave={() => setIsCursor(false)}
          className="flex group cursor-pointer relative items-center"
        >
          <button className="text-white cursor-pointer bg-linear-to-r from-[#00FB94] to-[#06B8FF]  w-38 rounded-3xl h-10 border border-[#00FB94] font-medium transition-all duration-300 z-10">
            Contact Us
          </button>

          <div className="absolute -right-11 w-11 h-11 bg-transparent"></div>
          <div className="absolute -right-11 bg-linear-to-r from-[#00FB94] to-[#06B8FF] w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 group-hover:-translate-x-49">
            <IoMdArrowForward
              size={24}
              className={`transition-transform duration-300 ${
                isCursor ? "-rotate-45" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navbarLink = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Projects",
  },
  {
    id: 3,
    name: "Services",
  },
  {
    id: 4,
    name: "About Us",
  },
];
