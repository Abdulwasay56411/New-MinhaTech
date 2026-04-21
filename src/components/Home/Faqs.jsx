import React, { useState } from "react";
import Heading from "../Heading";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="max-w-350 mx-auto px-5 py-10">
        <Heading title="Find Your Answers in Seconds" />
        <div className="flex flex-wrap justify-between gap-4">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold text-[#00FB94]">FAQS</h1>
          <div>
            {faqsCard.map((item) => (
              <div
                key={item.id}
                className="bg-[#06B8FF6B] w-full lg:w-160 rounded-2xl my-4 py-5 px-5"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
                >
                  <h1 className="font-semibold text-lg font-montserrat text-[#00FB94]">
                    {item.title}
                  </h1>
                  <div className="w-9 h-auto rounded-full p-2 transition-all duration-300 bg-[#06B8FF] flex justify-center items-center">
                    <img
                      className={`w-7 transition-transform duration-300 ${
                        isOpen === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      src={isOpen === item.id ? "/minus.png" : "/plus.png"}
                      alt="toggle"
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen === item.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-5 pb-3 text-sm text-[#FFFFFFD4]">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Faqs;

const faqsCard = [
  {
    id: 1,
    title: "How long does it take to develop a mobile app?",
    para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements.",
  },
  {
    id: 2,
    title: "How much does app development cost?",
    para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements.",
  },
  {
    id: 3,
    title: " Do you provide both Android and iOS app development?",
    para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements.",
  },
  {
    id: 4,
    title: " Will you help publish the app on App Store & Play Store?",
    para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements.",
  },
  {
    id: 5,
    title: "Do you provide support after the app is launched?",
    para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements.",
  },
];
