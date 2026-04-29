import React from 'react'
import Heading from '../Heading'


const project = [

  {
    id: 1,
    image: "/project 1.png",
    title: "AI Image Generator App",
    sections: [
      {
        label: "Problem",
        text: "Users struggled to quickly create high-quality visuals without design skills or complex software",
      },
      {
        label: "Solution",
        text: "Built an AI app that turns text prompts into high-quality images with multiple styles, customization and fast results",
      },
      {
        label: "Result",
        download: "500K+ downloads",
      },
    ],
    link: "View Case Study",
  },
  {
    id: 2,
    image: "/project 2.png",
    title: "Phone Cleaner App",
    sections: [
      {
        label: "Problem",
        text: "Users faced slow phone performance due to junk files, cache, and storage overload",
      },
      {
        label: "Solution",
        text: "Built a smart phone cleaner app that removes junk files, clears cache and optimizes storage to improve device speed and performance",
      },
      {
        label: "Result",
        download: "1M+ downloads",
      },
    ],
    link: "View Case Study",
  },
  {
    id: 3,
    image: "/project 3.png",
    title: "Draw House App",
    sections: [
      {
        label: "Problem",
        text: "Users needed an easy and accurate way to design and plan their home layouts without technical skills.",
      },
      {
        label: "Solution",
        text: "Built an easy-to-use app for creating and visualizing 2D/3D home layouts",
      },
      {
        label: "Result",
        download: "200K+ downloads",
      },
    ],
    link: "View Case Study",
  },
  {
    id: 4,
    image: "/project 4.png",
    title: "Draw House App",
    sections: [
      {
        label: "Problem",
        text: "Users needed a smooth and reliable way to watch videos without lag, limited formats or poor playback control",
      },
      {
        label: "Solution",
        text: "Built a powerful video player app supporting multiple formats, HD playback, subtitle control for a seamless viewing experience",
      },
      {
        label: "Result",
        download: "2M+ downloads",
      },
    ],
    link: "View Case Study",
  },


]

const OurProject = () => {
  return (
    <div className='max-w-350 mx-auto py-10 px-5'>
      <Heading title="Success Stories" para="Premium Projects show casing our Impact" />
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5'>
        {project.map((item) => (
          <div key={item.id} className='bg-[#3E496166] w-full max-w-160 h-auto px-8 py-5 rounded-3xl shadow-[0_0_61px_rgba(6,184,255,0.14)]'>
            <img className='w-full h-auto object-cover' src={item.image} alt="" />
            <h1 className='font-bold text-2xl sm:text-3xl text-[#F8F8F8] px-2 py-8'>{item.title}</h1>
            {item.sections.map((sec, i) => (
              <div key={i} className='py-4 px-2'>
                <h1 className='font-bold text-base sm:text-xl text-[#06A9EA] py-1'>{sec.label}</h1>
                <p className='text-base sm:text-xl text-[#C6C7C8]'>{sec.text}</p>
                <p className='text-[#FFFFFF] text-lg sm:text-2xl font-bold'>{sec.download}</p>
              </div>
            ))}
          <div className='flex items-center gap-1 pt-4'>
          <p className='px-2 text-[#07D580] font-bold cursor-pointer hover:scale-105 duration-300  text-xl'>{item.link}</p>
          <img className='w-6 h-6 cursor-pointer' src="/Arrow.png" alt="" />
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProject

