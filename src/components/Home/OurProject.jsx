import React from 'react'
import Heading from '../Heading'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const project = [
  {
    id: 1,
    slug: "ai-image-generator",
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
    slug: "phone-cleaner",
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
    slug: "house-planner",
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
    slug: "video-player",
    image: "/project 4.png",
    title: "Video Player App",
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
];

const OurProject = () => {
  return (
    <motion.div id='project'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      className='max-w-350 mx-auto py-10 px-5'>
      <Heading title="Success Stories" para="Premium Projects show casing our Impact" />
      <div className='grid md:grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-5 gap-y-6'>
        {project.map((item) => (
          <div key={item.id} className='bg-[#3E496166] w-full h-auto py-5 px-8 rounded-3xl shadow-[0_0_61px_rgba(6,184,255,0.14)]'>
            <img className='w-full h-auto object-cover' src={item.image} alt="" />
            <h1 className='font-bold text-2xl sm:text-3xl text-[#F9F9F9] pt-8 md:py-8'>{item.title}</h1>
            {item.sections.map((sec, i) => (
              <div key={i} className='py-2'>
                <h1 className='font-bold text-base sm:text-xl text-[#06A9EA] py-1'>{sec.label}</h1>
                <p className='text-sm sm:text-lg text-[#C6C7C8]'>{sec.text}</p>
                <p className='text-[#F9F9F9] text-lg sm:text-2xl font-bold'>{sec.download}</p>
              </div>
            ))}
            <Link to={`/project/${item.slug}`}>
              <div className='group flex items-center gap-1 pt-4'>
                <p className='text-[#07D580] font-bold cursor-pointer md:text-xl'>
                  {item.link}
                </p>
                <img
                  className='w-7 h-7 md:w-8 md:h-8 cursor-pointer transition-transform duration-300 group-hover:translate-x-2'
                  src="/Arrow.png"
                  alt=""
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurProject

