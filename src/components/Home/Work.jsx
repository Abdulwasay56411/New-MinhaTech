import React, { useState } from "react";
import Heading from "../Heading";

const Work = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="max-w-350 mx-auto px-5 py-10">
      <Heading title="How we work" />

      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-5 my-5 items-start">
        {howWork.map((item, index) => (
          <div key={item.id} className="flex items-stretch select-none">
            <div className="w-1.5 lg:h-110 bg-linear-to-t from-[#00FB94] to-[#06B8FF] rounded-2xl"></div>

            <div
              onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
              className={`w-full lg:w-55 rounded-lg py-3 px-4 ml-2 transition-all duration-200 cursor-pointer ${getTop(
                index
              )} ${
                isOpen === item.id
                  ? "h-auto lg:h-42 bg-[#06B8FF6E]"
                  : "h-16 bg-[#078ABE]"
              }`}
            >
              <h1 className={`text-[28px] font-bold pb-1 ${isOpen === item.id ? "text-[#00FB94]" : "text-white"}`}>
                {item.title}
              </h1>
              <div className={`${isOpen === item.id ? "block" : "hidden"}`}>
                <hr className="border-[#06B8FF80] my-2" />
                <p className="text-white text-sm ">{item.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

const howWork = [
  {
    id: 1,
    title: "Research",
    para: "We explore user needs, business goals and market trends to inform smart decisions",
  },
  {
    id: 2,
    title: "Design",
    para: "We create intuitive and engaging UI/UX experiences",
  },
  {
    id: 3,
    title: "Prototype",
    para: "We build interactive prototypes to validate ideas quickly",
  },
  {
    id: 4,
    title: "Develop",
    para: "We develop scalable and high-performance solutions",
  },
  {
    id: 5,
    title: "Test",
    para: "We test thoroughly to ensure quality and reliability",
  },
];

const getTop = (index) => {
  switch (index) {
    case 0:
      return "lg:mt-10";
    case 1:
      return "lg:mt-30";
    case 2:
      return "lg:mt-40";
    case 3:
      return "lg:mt-50";
    case 4:
      return "lg:mt-60";
    default:
      return "lg:mt-0";
  }
};
