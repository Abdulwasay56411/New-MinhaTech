import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// 1. Variables ko hamesha component se pehle rakhein taake error na aaye
const navbarLink = [
  { id: 1, name: "Home", Link: "/#home" },
  { id: 2, name: "Projects", Link: "/#project" },
  { id: 3, name: "Services", Link: "/#services" },
  { id: 4, name: "About Us", Link: "/#about" },
];

const menuNavbar = [
  ...navbarLink,
  { id: 5, name: "Contact Us", Link: "/#contact" },
];

const Navbar = () => {
  const [isCursor, setIsCursor] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
    <div className="sticky font-montserrat top-0 left-0 z-50 w-full">
      {/* Topbar */}
      <div className="bg-[#033C53] w-full">
        <div className="max-w-350 mx-auto flex flex-row justify-between items-center px-5 py-1.5 text-white">
          <div className="flex flex-row items-center gap-3 sm:gap-10">
            <p className="flex text-xs sm:text-base items-center gap-3">
              <MdEmail size={20} />
              info@minhatech.org
            </p>
            <p className="hidden sm:flex text-xs sm:text-base items-center gap-3">
              <IoMdCall size={20} />
              +92 315 4666899
            </p>
          </div>
          <p className="flex sm:hidden text-xs sm:text-base items-center gap-3">
              <IoMdCall size={20} />
              +92 315 4666899
            </p>
          <div className="hidden sm:flex items-center gap-3 lg:gap-5">
            <FaLinkedinIn size={14} className="hover:text-[#06B8FF] cursor-pointer" />
            <FaInstagram size={14} className="hover:text-[#06B8FF] cursor-pointer"/>
            <FaFacebookF size={14} className="hover:text-[#06B8FF] cursor-pointer "/>
          </div>
        </div>
      </div>
      <div className="w-full transition-all duration-300 shadow-xl p bg-[#0A0D21]/20 backdrop-blur-2xl">
        <div className="max-w-350 mx-auto px-5 py-2">
          <div className="w-full flex justify-between items-center px-5 py-2 bg-[#8EDFFF33] rounded-[10px]">
          <Link to="/">
          <img className="w-18 sm:w-23 sm:h-15 object-contain" src="/MinhaTech.png" alt="MinhaTech Logo" />
          </Link>
            
            <div className="hidden md:flex gap-10 items-center">
              {navbarLink.map((item) => (
                <ul key={item.id} className="group relative py-2">
                  <HashLink smooth to={item.Link}>
                    <li className="md:text-sm lg:text-base cursor-pointer text-center text-[#FFFFFF] font-montserrat font-medium">
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
              className="hidden md:flex group cursor-pointer items-center"
            >
              <HashLink smooth to="/#contact">
                <button className="text-[#ffffff] bg-linear-to-r from-[#00FB94] to-[#06B8FF] cursor-pointer w-39 rounded-xl h-12 border border-[#00FB94] hover:shadow-[0px_5px_10px_rgba(6,184,255,0.45)]  font-medium hover:scale-105 duration-300">
                  Contact Us
                </button>
              </HashLink>
            </div>

            {/* Mobile Menu */}
            <div onClick={() => setIsOpen(!isOpen)} className="block relative md:hidden">
              <div className="group relative flex items-center gap-2 rounded-4xl px-3 py-2 cursor-pointer select-none bg-[#06B8FF] overflow-hidden h-8">
                <div className="relative h-5 overflow-hidden">
                  <span className="block text-white font-bold text-sm transition-all duration-300 group-hover:-translate-y-full">Menu</span>
                  <span className="absolute left-0 top-0 text-white font-bold text-sm translate-y-full group-hover:translate-y-0 transition-all duration-300">Menu</span>
                </div>
                <FaPlus className={`text-xs text-white transition-all duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
              </div>
              
              <div className={`absolute right-0 top-10 w-41 h-auto shadow-2xl rounded-lg px-5 py-4 text-white bg-[#0A1E38] transform transition-all duration-300 z-50 ${isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-10 opacity-0 scale-95 pointer-events-none"}`}>
                {menuNavbar.map((item) => (
                  <HashLink key={item.id} smooth to={item.Link} onClick={() => setIsOpen(false)}>
                    <h1 className="leading-10 hover:font-bold hover:text-[#00FB94] duration-300 transition-all">{item.name}</h1>
                  </HashLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;