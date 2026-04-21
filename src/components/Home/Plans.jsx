import React from "react";
import Heading from "../Heading";

const ourPlans = [
  {
    id: 1,
    title: "Starter App",
    para: "(for small businesses / MVPs)",
    amount: "$500 - $700 ",
    btn: "Schedule a demo",
    text1: "3-5 Screens (UI Design)",
    text2: "Basic UX Flow",
    text3: "Android OR iOS (single platform)",
    text4: "Simple Backend (if needed)",
    text5: "1 Revision Round",
    text6: "Delivery Time (e.g., 2-3 weeks)",
  },
  {
    id: 2,
    title: "Growth App",
    para: " (for scaling startups)",
    amount: " $700 - $1,000",
    btn: "Schedule a demo",
    text1: "6-12 Screens",
    text2: "Advanced UI/UX Design",
    text3: "Android + iOS (cross-platform)",
    text4: "API Integration",
    text5: "2-3 Revisions",
    text6: "Delivery Time (e.g., 2-6 weeks)",
  },
  {
    id: 3,
    title: "Advanced App",
    para: " (for serious businesses)",
    amount: " $1,000- $2,000",
    btn: "Schedule a demo",
    text1: "Unlimited / Complex Features",
    text2: "Custom Backend System",
    text3: "Payment Integration",
    text4: "Scalability + Security",
    text5: "Ongoing Support",
    text6: "Timeline: Based on scope",
  },
];

const Plans = () => {
  return (
    <div className="max-w-350 mx-auto px-5 py-10">
      <Heading title="Plans That Fit Your Needs" />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-5">
        {ourPlans.map((item) => (
          <div
            key={item.id}
            className="bg-[#06B8FF14] border border-[#06B8FF] w-full sm:w-100 h-160 p-5 mx-2 rounded-4xl"
          >
            <h1 className="text-[#FFFFFF] font-medium text-2xl">
              {item.title}
            </h1>
            <p className="text-base font-montserrat text-[#FFFFFF]">
              {item.para}
            </p>
            <div
              className="my-4 w-full h-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06B8FF80 50%, transparent 50%)",
                backgroundSize: "20px 2px",
              }}
            />
            <h1 className="text-3xl font-bold py-8 text-[#FFFFFF]">
              {item.amount} <span className="text-xl font-normal">/ month</span>
            </h1>
            <button className="w-full h-15 rounded-4xl text-lg font-medium mb-8 text-[#FFFFFF] border border-[#06B8FF] bg-[#06B8FF42] cursor-pointer hover:bg-linear-to-r hover:from-[#00FB94] hover:to-[#06B8FF]">
              {item.btn}
            </button>
            <div>
              {[
                item.text1,
                item.text2,
                item.text3,
                item.text4,
                item.text5,
                item.text6,
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 pt-4">
                  <img className="w-4 h-4" src="/Tick.png" alt="" />
                  <p className="text-lg font-medium text-[#FFFFFF]  font-montserrat">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;