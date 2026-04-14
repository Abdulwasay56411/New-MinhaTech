import React from "react";

const HeroSection = () => {
  return (
    <div className='pt-10 px-4 bg-[#09182B] w-full min-h-screen bg-[url("/square.png")] bg-cover bg-center bg-no-repeat'>
      <div className="text-center">
        <p className="text-white font-poppins text-xl">
          We Design More Than Just Apps, we elevate app
        </p>
        <h1 className="bg-linear-to-r font-poppins from-[#06B8FF] to-[#00FB94] text-4xl sm:text-6xl md:text-7xl lg:text-[135px] xl:text-[150px] bg-clip-text text-transparent font-bold ">
          Development
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-5 max-w-350 mx-auto">
        <div className="flex-1 flex justify-center order-1 lg:order-2">
          <img
            className="w-full max-w-100 lg:max-w-150 h-auto object-contain"
            src="/Hero.png"
            alt="Hero"
          />
        </div>

        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-montserrat text-[#F3F4F5] text-3xl leading-tight">
            From concept to launch we simplify your app journey and build what
            truly matters
          </h1>
        </div>

        <div className="w-full lg:w-auto order-2 lg:order-3">
          <div className="flex flex-wrap justify-center lg:flex-col gap-3">
            {heroButton.map((item) => (
              <button
                key={item.id}
                className="px-4 py-3 lg:px-8 lg:py-4 bg-linear-to-r from-[#00FB94] to-[#06B8FF] rounded-[40px] text-sm md:text-base lg:text-xl text-[#FFFFFF] font-Montserrat cursor-pointer hover:scale-105"
              >
                {item.text}
              </button>
            ))}
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
