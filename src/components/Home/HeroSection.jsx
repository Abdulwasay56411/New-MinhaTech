import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

const HeroSection = () => {
  const [isHover, setIsHover] = useState(null);
  const [isCursor, setIsCursor] = useState(false);

  return (
    <div className='pt-10 px-4 py-5 bg-[#09182B] w-full min-h-screen bg-[url("/square.png")] bg-cover bg-center bg-no-repeat'>
      <div className="max-w-350 mx-auto">
        <div className="text-center">
          <p className="text-white font-poppins text-xl">
            We Design More Than Just Apps, we elevate app
          </p>
          <h1 className="bg-linear-to-r font-poppins from-[#06B8FF] to-[#00FB94] text-4xl sm:text-6xl md:text-7xl lg:text-[135px] xl:text-[150px] bg-clip-text text-transparent font-bold ">
            Development
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center w-full lg:w-1/3">
            <img
              className="w-72 md:w-96 lg:w-full h-auto object-contain"
              src="/Hero.png"
              alt="Hero"
            />
          </div>

          {/* TEXT + BUTTONS (MOBILE ROW) */}
          <div className="order-2 w-full flex flex-wrap  flex-row justify-center gap-5 md:justify-between px-5 py-5 sm:py-16 lg:hidden">
            <div className="w-full sm:max-w-[50%] text-center sm:text-left">
              <h1 className="font-montserrat text-[#F3F4F5] text-xl leading-tight">
                From concept to launch we simplify your app journey and build
                what truly matters
              </h1>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col py-4 sm:py-0 gap-2">
              {heroButton.map((item) => (
                <button
                  onMouseEnter={() => setIsHover(item.id)}
                  onMouseLeave={() => setIsHover(null)}
                  key={item.id}
                  className={`w-65 h-13 rounded-[40px] text-sm text-white font-montserrat cursor-pointer hover:scale-105 ${
                    isHover === item.id
                      ? "bg-linear-to-r from-[#00FB94] to-[#00FB94]"
                      : "bg-linear-to-r from-[#00FB94] to-[#06B8FF]"
                  }`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>

          {/* DESKTOP TEXT */}
          <div className="hidden lg:block order-1 w-1/3 text-left px-10">
            <h1 className="font-montserrat text-[#F3F4F5] text-2xl leading-tight">
              From concept to launch we simplify your app journey and build what
              truly matters
            </h1>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex order-3 w-1/3 flex-col px-5 items-end gap-3">
            {heroButton.map((item) => (
              <button
                onMouseEnter={() => setIsHover(item.id)}
                onMouseLeave={() => setIsHover(null)}
                key={item.id}
                className={`w-62 h-14 rounded-[40px] text-base text-white font-montserrat cursor-pointer hover:scale-105 ${
                  isHover === item.id
                    ? "bg-linear-to-r from-[#00FB94] to-[#00FB94]"
                    : "bg-linear-to-r from-[#00FB94] to-[#06B8FF]"
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
        <div
          onMouseEnter={() => setIsCursor(true)}
          onMouseLeave={() => setIsCursor(false)}
          className="flex w-fit mx-auto group cursor-pointer justify-center relative items-center mt-10"
        >
          <button
            className={`text-white font-montserrat cursor-pointer w-64 sm:w-72 md:w-80 rounded-4xl h-14 border border-[#00FB94] font-medium transition-all duration-300 z-10 ${
              isCursor
                ? "bg-linear-to-r from-[#00FB94] to-[#00FB94]"
                : "bg-linear-to-r from-[#00FB94] to-[#06B8FF]"
            }`}
          >
            Book Free Consultation
          </button>

          <div
            className={`absolute flex items-center justify-center rounded-full transition-all duration-500
      w-12 h-12 sm:w-13 sm:h-13
      translate-x-38 sm:translate-x-42.5 md:translate-x-46.5
      /* Hover position (Button ke andar slide ho kar aayega) */
      group-hover:-translate-x-42 md:group-hover:-translate-x-45.5
      ${
        isCursor ? "bg-[#00FB94]" : "bg-linear-to-r from-[#00FB94] to-[#06B8FF]"
      }`}
          >
            <IoMdArrowForward
              size={24}
              className={`transition-transform duration-300 ${
                isCursor ? "rotate-0" : "-rotate-45"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const heroButton = [
  {
    id: 1,
    text: "Andriod App Development",
  },
  {
    id: 2,
    text: "Ios App Development",
  },
  {
    id: 3,
    text: "Custom App Design",
  },
];
