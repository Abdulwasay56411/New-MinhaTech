import React, { useEffect } from "react";
import { project } from "../../Data/project";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ProjectDetails = () => {
  const { slug } = useParams();

  const item = project.find(
    (p) => p.slug.toLowerCase().trim() === slug?.toLowerCase().trim()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);


  return (
    <div className="max-w-350 mx-auto px-5 pt-20">
      <Link to="/">
        <div className="flex items-center gap-2">
          <IoArrowBack className="text-[#FFFFFFD4] text-2xl" />
          <p className="text-[#FFFFFFED] text-xl ">Back to Home</p>
        </div>
      </Link>

      <div className="pt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] py-2">{item.heroTitle}</h1>
        <p className="text-[#C6C7C8] text-xl">{item.heroDesc}</p>
      </div>

      <div className="flex items-center justify-between py-5 sm:max-w-150 lg:max-w-200 gap-2 lg:gap-5">
        <p className="text-[#C6C7C8] text-xs sm:text-sm  md:text-base lg:text-xl">Client: <span className="text-[#FFFFFFED] font-semibold text-sm sm:text-base md:text-xl lg:text-2xl pl-2"> {item.client}</span></p>
        <p className="text-[#C6C7C8] text-xs sm:text-sm  md:text-base lg:text-xl">Duration: <span className="text-[#FFFFFFED] font-semibold text-sm sm:text-base md:text-xl lg:text-2xl pl-2"> {item.duration}</span></p>
        <p className="text-[#C6C7C8] text-xs sm:text-sm md:text-base lg:text-xl">Year: <span className="text-[#FFFFFFED] font-semibold text-sm sm:text-base md:text-xl lg:text-2xl pl-2"> {item.year}</span></p>
      </div>

      <div className="w-full bg-[#06B8FF33] rounded-4xl my-10 p-5">
        <img className="w-full object-cover" src={item.image} alt="" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-20">
        <div className="w-full flex flex-col items-center justify-center border border-[#06B8FF21] bg-[#06B8FF21] rounded-2xl shadow-[0px_4px_36.6px_0px_rgba(6,184,255,0.2)] p-5">
          <img className="w-7 h-7 object-cover" src="/download.png" alt="" />
          <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl lg:text-4xl py-2">{item.downloads}</p>
          <p className="text-[#C6C7C8] text-sm md:text-base lg:text-lg">Downloads</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center border border-[#06B8FF21] bg-[#06B8FF21] rounded-2xl shadow-[0px_4px_36.6px_0px_rgba(6,184,255,0.2)] p-5">
          <img className="w-7 h-7 object-cover" src="/download.png" alt="" />
          <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl lg:text-4xl py-2">{item.rating}</p>
          <p className="text-[#C6C7C8] text-sm md:text-base lg:text-lg">App Rating</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center border border-[#06B8FF21] bg-[#06B8FF21] rounded-2xl shadow-[0px_4px_36.6px_0px_rgba(6,184,255,0.2)] p-5">
          <img className="w-7 h-7 object-cover" src="/download.png" alt="" />
          <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl lg:text-4xl py-2">{item.user}</p>
          <p className="text-[#C6C7C8] text-sm md:text-base lg:text-lg">Active users</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center border border-[#06B8FF21] bg-[#06B8FF21] rounded-2xl shadow-[0px_4px_36.6px_0px_rgba(6,184,255,0.2)] p-5">
          <img className="w-7 h-7 object-cover" src="/download.png" alt="" />
          <p className="text-[#FFFFFF] font-bold text-2xl md:text-3xl lg:text-4xl py-2">{item.retention}</p>
          <p className="text-[#C6C7C8] text-sm md:text-base lg:text-lg">Retention</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-[#F2F6F7] font-bold text-3xl">Overview</h1>
              <p className="text-[#C6C7C8] text-xl py-2">{item.overView}</p>
            </div>

            <div>
              <h1 className="text-[#F2F6F7] font-bold text-3xl">The Challenge</h1>
              <p className="text-[#C6C7C8] text-xl py-2">{item.challenge}</p>
            </div>

            <div>
              <h1 className="text-[#F2F6F7] font-bold text-3xl">Our Solutions</h1>
              <p className="text-[#C6C7C8] text-xl py-2">{item.solution}</p>
            </div>

            <div>
              <h1 className="text-[#F2F6F7] font-bold text-3xl mb-4">Key Results</h1>
              <div className="flex flex-col gap-3">
                {item.results && item.results.map((res, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img className="w-4 h-4 object-cover" src="/result.png" alt="bullet" />
                    <p className="text-[#C6C7C8] text-xl">{res}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-5">

          <div className="bg-[#06B8FF29] rounded-4xl p-8 border border-[#06B8FF21] flex-1">
            <h1 className="text-[#F2F6F7] font-bold text-3xl mb-5">Features</h1>
            <div className="flex flex-col gap-4">
              {item.features && item.features.map((res, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img className="w-4 h-4 object-cover" src="/result.png" alt="bullet" />
                  <p className="text-[#C6C7C8] text-xl">{res}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#06D27E29] rounded-4xl p-8 border border-[#06D27E21] flex-1">
            <h1 className="text-[#F2F6F7] font-bold text-3xl my-5">Technologies</h1>
            <div className="py-5">
              <div>
                <button className="w-45 py-2 text-xl text-[#F8F8F8] border border-[#00FB94] bg-[#00FB9433] rounded-2xl">
                  {item.figma}
                </button>
                <button className="w-45 py-2 text-xl text-[#F8F8F8] border border-[#00FB94] bg-[#00FB9433] rounded-2xl ml-3">
                  {item.react}
                </button>
              </div>
              <div>
                <button className="w-60 py-2 text-xl text-[#F8F8F8] border border-[#00FB94] mt-5 bg-[#00FB9433] rounded-2xl">
                  {item.Cloud}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;