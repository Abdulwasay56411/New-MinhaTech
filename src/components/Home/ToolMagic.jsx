import React from "react";
import Heading from "../Heading";


const toolImages = [
  { id: 1, image: "/Tool 3.png" },
  { id: 2, image: "/Tool 5.png" },
  { id: 3, image: "/Tool 4.png" },
  { id: 4, image: "/Tool 6.png" },
  { id: 5, image: "/Tool 1.png" },
  { id: 6, image: "/Tool 2.png" },
  { id: 7, image: "/Tool 7.png" },
];

const processImage = [
  {
    id: 1,
    image: "/idea.png",
  },
  {
    id: 2,
    image: "/designer 1.png",
  },
  {
    id: 3,
    image: "/developer 1.png",
  },
  {
    id: 4,
    image: "/testing.png",
  },
  {
    id: 5,
    image: "/launch.png",
  },
  {
    id: 6,
    image: "/growth.png",
  },
]


const ToolMagic = () => {

  return (
    <div className="max-w-350 mx-auto">
      <div className="pb-14 px-10">
        <Heading title="Our Process" para="A proven methodology from concept to market success" />
        <div className="relative flex flex-wrap justify-center lg:justify-between gap-5 py-10">

          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-[#06B8FF33] via-[#06B8FF] to-[#06B8FF33] -translate-y-1/2 z-0"></div>

          {processImage.map((item) => (
            <div key={item.id} className="relative z-10 flex flex-col items-center group">

              <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg sm:rounded-2xl bg-linear-to-t p-0.5 from-[#06B8FF] to-[#00FB94B2] sm:shadow-[0px_4px_34.5px_0px_rgba(6,184,255,0.38)] cursor-pointer hover:scale-105 duration-200">
                <div className="w-full h-full bg-[#09182B] rounded-[5px] sm:rounded-2xl flex items-center justify-center">
                  <img className="w-10 h-10 sm:w-15 sm:h-15 object-contain" src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-linear-to-r from-[#09182B00] to-[#112139]  pb-14">
        <Heading title="Tools Behind Our Magic" para="Everything we use to make things happen" />
        <div className="flex flex-wrap justify-center gap-5">
          {toolImages.map((item) => (
            <div key={item.id}
              className="w-32 h-13 sm:w-70 sm:h-29 flex items-center justify-center rounded-xl p-0.5 bg-linear-to-r from-[#00FB9414] to-[#06B8FF80] sm:bg-linear-to-r sm:from-[#06B8FF] sm:to-[#07D580] cursor-pointer hover:scale-105 duration-300"
            >
              <div className="sm:bg-[#12253E] w-full h-full rounded-[10px] flex items-center justify-center">
                <img className="w-8 h-8 sm:w-14 sm:h-14 object-cover" src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolMagic;
