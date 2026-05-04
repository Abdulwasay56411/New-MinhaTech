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
        <h1 className="text-5xl font-semibold text-[#FFFFFF] py-2">{item.heroTitle}</h1>
        <p className="text-[#C6C7C8] text-xl">{item.heroDesc}</p>
      </div>

      <div className="flex items-center justify-between py-5 max-w-200 gap-5">
        <p className="text-[#C6C7C8] text-xl">Client: <span className="text-[#FFFFFFED] font-semibold text-2xl pl-2"> {item.client}</span></p>
        <p className="text-[#C6C7C8] text-xl">Duration: <span className="text-[#FFFFFFED] font-semibold text-2xl pl-2"> {item.duration}</span></p>
        <p className="text-[#C6C7C8] text-xl">Year: <span className="text-[#FFFFFFED] font-semibold text-2xl pl-2"> {item.year}</span></p>
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

      <div>
        <div className="flex flex-col gap-5">
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

          <div className="py-5">
            <h1 className="text-[#F2F6F7] font-bold text-3xl mb-5">Key Results</h1>
            <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default ProjectDetails;