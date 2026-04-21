import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [isCursor, setIsCursor] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky font-montserrat top-0 left-0 z-50 w-full mx-auto">
      {/* Blue Navbar */}
      <div className="w-full sm:flex sm:flex-row sm:justify-between items-center flex flex-col justify-center px-4 md:px-8 lg:px-16 py-1 bg-[#076895] text-white">
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
      <div
        className={`flex w-full items-center pb-3 justify-between px-4 md:px-12 lg:px-14 ${
          isScroll ? "shadow-2xl bg-[#09182B]/5 backdrop-blur-2xl" : ""
        }`}
      >
        <img className="w-26 h-17" src="/MinhaTech.png" alt="" />
        <div className="hidden md:flex md:justify-center md:w-95 lg:w-130 xl:w-158 bg-[#06B8FF33] rounded-[40px] mt-4 mb-2 py-2 px-4 text-[#FFFFFF] md:gap-8 lg:gap-10 xl:gap-16">
          {navbarLink.map((item) => (
            <ul key={item.id} className="group relative py-2">
              <HashLink smooth to={item.Link}>
                <li className="md:text-sm lg:text-xl cursor-pointer text-center font-medium">
                  {item.name}
                </li>
              </HashLink>
              <span className="absolute w-0 h-0.5 left-0 bottom-0 group-hover:w-full transition-all duration-300 bg-linear-to-r from-[#00FB94] to-[#06B8FF]"></span>
            </ul>
          ))}
        </div>
        <div
          onMouseEnter={() => setIsCursor(true)}
          onMouseLeave={() => setIsCursor(false)}
          className="hidden md:flex group cursor-pointer relative items-center mr-5"
        >
          {/* Button */}
          <button
            className={`text-[#09182B] cursor-pointer md:w-30 lg:w-38 rounded-3xl h-10 border border-[#00FB94] font-medium transition-all duration-300 z-10 ${
              isCursor
                ? "bg-linear-to-r from-[#00FB94] to-[#00FB94]"
                : "bg-linear-to-r from-[#00FB94] to-[#06B8FF]"
            }`}
          >
            Contact Us
          </button>

          <div className="absolute md:-right-9 -right-11 md:w-9 md:h-9 lg:h-10 lg:w-10 bg-transparent"></div>
          <div
            className={`absolute md:-right-9 lg:-right-10 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full transition-all duration-300 md:group-hover:-translate-x-39 lg:group-hover:-translate-x-48 ${
              isCursor
                ? "bg-[#00FB94]"
                : "bg-linear-to-r from-[#00FB94] to-[#06B8FF]"
            }`}
          >
            <img
              className={`transition-transform duration-300 w-5 h-5 ${
                isCursor ? "rotate-45" : "rotate-0"
              }`}
              src="/Arrow.png"
              alt=""
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="block relative md:hidden"
        >
          <div className="group relative flex items-center gap-2 rounded-4xl px-3 py-2 cursor-pointer select-none bg-[#06B8FF] overflow-hidden h-8">
            <div className="relative h-5 overflow-hidden">
              <span
                className="block text-white font-bold text-sm
                     transition-all duration-300
                     group-hover:-translate-y-full"
              >
                Menu
              </span>
              <span
                className="absolute left-0 top-0 text-white font-bold text-sm
                     translate-y-full
                     group-hover:translate-y-0
                     transition-all duration-300"
              >
                Menu
              </span>
            </div>

            <FaPlus
              className={`text-xs text-white transition-all duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`absolute right-8 top-10 w-41 h-auto shadow-2xl rounded-lg px-5 py-4 text-white bg-[#0A1E38] transform transition-all duration-300 z-50 ${isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95 pointer-events-none"}`}
          >
            {navbarLink.map((item) => (
              <HashLink key={item.id} smooth to={item.Link}>
                <h1
                  onClick={() => setIsOpen(false)}
                  className="leading-10 hover:font-bold hover:text-[#00FB94] duration-300 transition-all"
                >
                  {item.name}
                </h1>
              </HashLink>
            ))}
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
    Link: "/#home",
  },
  {
    id: 2,
    name: "Projects",
    Link: "/#project",
  },
  {
    id: 3,
    name: "Services",
    Link: "/#services",
  },
  {
    id: 4,
    name: "About Us",
    Link: "/#about us",
  },
];
