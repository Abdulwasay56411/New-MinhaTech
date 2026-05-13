import React from 'react'
import Heading from '../Heading'
import { motion } from 'framer-motion'

const OurServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id='services' className='max-w-350 mx-auto px-5'>
      <Heading title="Core" subtitle="Services" para="End to end mobile apps solutions tailored for startups and enterprises" />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center mx-5 lg:my-5 gap-5'>
        {serviceBox.map((item) => (
          <div key={item.id} className='w-full px-2 py-10 max-w-95 h-auto bg-[#0F1D3426] opacity-80 border border-[#06B8FF]/40 shadow-[0px_0px_61px_0px_rgba(6,184,255,0.14)] rounded-3xl'>
            <div className='flex flex-col text-center items-center hover:scale-105 duration-300 cursor-pointer'>
              <img className='w-15 h-15 object-cover' src={item.image} alt="" />
              <h1 className='text-[#FFFFFF] font-bold text-xl tracking-wider pt-9 pb-2'>
                {item.title}
                <span className='sm:block'> {item.span}</span>
              </h1>
              <p className='text-[#C6C7C8] text-sm sm:text-base'>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurServices

const serviceBox = [
  {
    id: 1,
    image: "/UIUX.png",
    title: "UI/UX",
    span: "Design",
    para: "Beautiful, intuitive design that engage users and strengthen your brand."
  },
   {
    id: 2,
    image: "/Ios.png",
    title: "iOS App",
    span: "Development",
    para: "High-performance iOS apps built with Swift and the latest technologies."
  },
  {
    id: 3,
    image: "/Andriod.png",
    title: "Android App",
    span: "Development",
    para: "Scalable Andriod apps built with kotlin for seamless performance."
  },
 
  {
    id: 4,
    image: "/flutter.png",
    title: "Cross-Platform",
    span: "Development",
    para: "one codebase, multiple platform with Flutter and React Native."
  },
  {
    id: 5,
    image: "/Aso.png",
    title: "App Maintenance",
    span: "& Support",
    para: "Ongoing support, updates & performance optimization you can rely on."
  }
]
