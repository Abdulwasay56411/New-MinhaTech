import React from "react";


const OurServices = () => {
  return (
    <div>
      <div className="mx-10">
        {services.map((item) => (
          <div className="w-full px-5 lg:px-10 my-5 rounded-3xl h-auto py-10 bg-[#06B8FF6B]">
            <div className="flex justify-between  gap-2 sm:gap-10  md:gap-20 lg:gap-40">
              <h1 className="font-montserrat font-semibold text-6xl text-[#FFFFFF6B]">
                {item.number}
              </h1>
              <div>
                <h2 className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#00FB94]">
                  {item.heading}
                </h2>
                <p className=" text-sm md:text-base lg:text-xl text-[#FFFFFFD4] pt-5">{item.text}</p>
              </div>
              <div className="text-[#00FB94] w-14 h-11 cursor-pointer flex items-center  bg-[#06B8FF6B] rounded-full">
              <img className="w-7" src="/plus.png" alt="" />
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
  },
  {
    id: 2,
    number: "02.",
    heading: "Android App Development",
    text: "We build powerful, scalable Android applications tailored to your business needs. From idea validation to deployment, our team ensures smooth performance, user-friendly interfaces and compatibility across all Android devices.",
    image: "/mobile.png",
  },
  {
    id: 3,
    number: "03.",
    heading: "Android App Development",
    text: "We build powerful, scalable Android applications tailored to your business needs. From idea validation to deployment, our team ensures smooth performance, user-friendly interfaces and compatibility across all Android devices.",
    image: "/mobile.png",
  },
];
