import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbarLink = [
  { id: 1, name: "Home", Link: "/#home" },
  { id: 2, name: "About Us", Link: "/#about" },
  { id: 3, name: "Services", Link: "/#services" },
  { id: 4, name: "Projects", Link: "/#project" },
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
    <div className="sticky top-0 left-0 z-50 w-full">
      {/* Topbar */}
      <div className="bg-[#081D32] w-full">
        <div className="max-w-350 mx-auto flex flex-row justify-between items-center px-6 py-1.5 text-white">
          <div className="flex flex-row items-center gap-3">
            <a
              href="mailto:info@minhatech.org"
              className="flex text-xs items-center gap-2 text-[#FFFFFFED] hover:text-[#06B8FF] transition-colors"
            >
              <MdEmail size={14} className="text-[#60C1E7]" />
              info@minhatech.org
            </a>
            <span className="hidden sm:block text-[#FFFFFFED] text-xs">|</span>

            <a
              href="tel:+923154666899"
              className="hidden sm:flex text-xs items-center gap-2 text-[#FFFFFFED] hover:text-[#06B8FF] transition-colors"
            >
              <IoMdCall size={14} className="text-[#60C1E7]" />
              +92 315 4666899
            </a>
          </div>
          <a
            href="tel:+923154666899"
            className="flex sm:hidden text-xs  items-center gap-2 text-[#FFFFFFED] hover:text-[#06B8FF] transition-colors"
          >
            <IoMdCall size={14} className="text-[#60C1E7]" />
            +92 315 4666899
          </a>
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://www.linkedin.com/company/minhatech/" target="_blank">
              <FaLinkedinIn size={14} className="hover:text-[#06B8FF] text-[#60C1E7] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/minhatechofficial/" target="_blank">
              <FaInstagram size={14} className="hover:text-[#06B8FF] text-[#60C1E7] cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/minhatechofficial/" target="_blank">
              <FaFacebookF size={14} className="hover:text-[#06B8FF] text-[#60C1E7] cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full transition-all duration-300 shadow-xl  bg-[#0A0D21]/20 backdrop-blur-2xl">
        <div className="max-w-350 mx-auto px-5 pt-4 pb-2">
          <div className="w-full flex justify-between items-center px-5 py-2 bg-[#0F1D3426] border-[0.075px] border-[#06B8FF] rounded-[15px]">
            <Link to="/">
              <img className="w-15 h-10 sm:w-17 sm:h-11 object-contain" src="/MinhaTech.png" alt="MinhaTech Logo" />
            </Link>

            <div className="hidden md:flex gap-10 items-center">
              {navbarLink.map((item) => (
                <ul key={item.id} className="group relative py-2 flex flex-col items-center">
                  <HashLink smooth to={item.Link}>
                    <li className="md:text-sm lg:text-base cursor-pointer text-center text-[#FFFFFF] hover:text-[#06B8FF] duration-300 font-medium">
                      {item.name}
                    </li>
                  </HashLink>
                  <span className="absolute h-0.5 bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-7 transition-all duration-300 bg-linear-to-r from-[#00FB94] to-[#06B8FF]"></span>
                </ul>
              ))}
            </div>
            <div
              onMouseEnter={() => setIsCursor(true)}
              onMouseLeave={() => setIsCursor(false)}
              className="hidden md:flex group cursor-pointer items-center"
            >
              <HashLink smooth to="/#contact">
                <button className="text-[#ffffff] bg-linear-to-r from-[#00FB94] to-[#06B8FF] cursor-pointer w-29 text-[15px] rounded-xl h-9 border border-[#00FB94] hover:shadow-[0px_5px_10px_rgba(6,184,255,0.45)]   hover:scale-105 duration-300">
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
                    <h1 className="leading-10 hover:font-bold hover:text-[#06B8FF] duration-300 transition-all">{item.name}</h1>
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