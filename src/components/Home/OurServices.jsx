import React, { useState } from "react";

const OurServices = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-350 mx-auto">
      <div className="mx-5 mt-12 sm:mx-7 lg:mx-10">
       <div className="flex items-center gap-2">
        <img src="/star.png" className="w-7 h-7" alt="" />
        <h1 className="font-montserrat font-bold text-[#FFFFFF] text-4xl">Services</h1>
       </div>
        {services.map((item) => (
          <div
            key={item.id}
            className={`w-full my-10 px-5 lg:px-10  rounded-3xl py-3 lg:py-10 bg-[#06B8FF6B] ${
              open === item.id ? "h-auto" : "h-auto"
            }`}
          >
            <div className="flex justify-between  gap-2 sm:gap-10  md:gap-20 lg:gap-40">
              <h1 className="font-montserrat font-semibold text-6xl text-[#FFFFFF6B]">
                {item.number}
              </h1>
              <div>
                <h2 className="font-montserrat font-bold pt-2 pl-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#00FB94]">
                  {item.heading}
                </h2>
                <p className=" text-sm md:text-base pl-2 lg:text-xl text-[#FFFFFFD4] pt-3">
                  {item.text}
                </p>
                <div
                  className={`flex flex-wrap gap-4 sm:gap-8 md:gap-10 lg:gap-14 my-8 ${
                    open === item.id ? "block" : "hidden"
                  }`}
                >
                  <img
                    className="max-w-145 w-full h-auto object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div>
                    <h1 className="text-[#00FB94] font-montserrat font-bold text-xl">
                      {item.head2}
                    </h1>
                    <div className="flex items-center gap-2">
                      <h1 className="w-3 h-3 bg-[#00FB94] rounded-full"></h1>
                      <p className="text-sm sm:text-xl text-[#FFFFFFD4] py-2 sm:py-3 ">
                        {item.para}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="w-3 h-3 bg-[#00FB94] rounded-full"></h1>
                      <p className="text-sm sm:text-xl text-[#FFFFFFD4] py-2 sm:py-3 ">
                        {item.para1}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="w-3 h-3 bg-[#00FB94] rounded-full"></h1>
                      <p className="text-sm sm:text-xl text-[#FFFFFFD4] py-2 sm:py-3 ">
                        {item.para2}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h1 className="w-3 h-3 bg-[#00FB94] rounded-full"></h1>
                      <p className="text-sm sm:text-xl text-[#FFFFFFD4] py-2 sm:py-3 ">
                        {item.para3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setOpen(open === item.id ? null : item.id)}
                className="flex items-center cursor-pointer justify-center w-14 h-12 rounded-full bg-[#06B8FF6B] hover:bg-[#06B8FF] transition-all duration-300 select-none"
              >
                <img
                  className="w-7 mx-6 my-3 transition-all duration-300"
                  src={open === item.id ? "/minus.png" : "/plus.png"}
                  alt="toggle"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

const services = [
  {
    id: 1,
    number: "01.",
    heading: "Android App Development",
    text: "We build powerful, scalable Android applications tailored to your business needs. From idea validation to deployment, our team ensures smooth performance, user-friendly interfaces and compatibility across all Android devices.",
    image: "/mobile.png",
    head2: "What We Offers:",
    para: "Custom Android app development",
    para1: "UI integration with smooth navigation",
    para2: "Performance optimization",
    para3: "Play Store deployment support",
  },
  {
    id: 2,
    number: "02.",
    heading: "IOS App Development",
    text: "Our iOS apps are designed with precision elegance and performance in mind. We create seamless experiences for iPhone and iPad users using the latest Apple technologies.",
    image: "/mobile.png",
    head2: "What We Offers:",
    para: "Custom IOS app development",
    para1: "UI integration with smooth navigation",
    para2: "Performance optimization",
    para3: "Play Store deployment support",
  },
  {
    id: 3,
    number: "03.",
    heading: "App Store Optimization ",
    text: "We help your app get discovered. Our ASO strategies improve visibility, increase downloads and enhance your app’s ranking on app stores.",
    image: "/mobile.png",
    head2: "What We Offers:",
    para: "Custom Android app development",
    para1: "UI integration with smooth navigation",
    para2: "Performance optimization",
    para3: "Play Store deployment support",
  },
  {
    id: 4,
    number: "04.",
    heading: "App UI/ UX Design",
    text: "We design visually stunning and user-centric interfaces that keep users engaged. Our focus is on creating intuitive, smooth and memorable user experiences.",
    image: "/mobile.png",
    head2: "What We Offers:",
    para: "Custom Android app development",
    para1: "UI integration with smooth navigation",
    para2: "Performance optimization",
    para3: "Play Store deployment support",
  },
  {
    id: 5,
    number: "05.",
    heading: "Quality Assurance",
    text: "We ensure your app works flawlessly before launch. Our QA process focuses on performance, security and bug-free user experience.",
    image: "/mobile.png",
    head2: "What We Offers:",
    para: "Custom Android app development",
    para1: "UI integration with smooth navigation",
    para2: "Performance optimization",
    para3: "Play Store deployment support",
  },
];
