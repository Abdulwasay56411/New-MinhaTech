import React from 'react'
import Heading from '../Heading'
import { motion } from 'framer-motion'

const OurServices = () => {
  return (
    <motion.div
    initial={{opacity: 0, y:50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 1.2, ease: "easeOut"}}
    viewport={{once: true, amount: 0.2}}
    id='services' className='max-w-350 mx-auto px-5'>
        <Heading title="Core Services" para="End to end mobile apps solutions tailored for startups and enterprises"/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center my-5 gap-5'>
         {serviceBox.map((item) =>(
          <div key={item.id} className='w-full px-5 py-10 max-w-95 h-auto bg-linear-to-t from-[#12253E] to-[#12253E80] shadow-[0_0_12px_12px_rgba(18,37,62,0.2)] rounded-3xl'>
          <div className='flex flex-col text-center items-center hover:scale-105 duration-300 cursor-pointer'>
            <img className='w-18 h-18 object-cover' src={item.image} alt="" />
            <h1 className='text-[#FFFFFFD4] font-bold text-[28px] py-5'>{item.title}</h1>
            <p className='text-[#C6C7C8] text-xl'>{item.para}</p>
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
    image: "/Andriod.png",
    title: "Android App Development",
    para: "Native Android Apps built with Kotlin & Java fpr optimal performance and user experience "
  },
  {
    id: 2,
    image: "/Ios.png",
    title: "IOS App Development",
    para: "Premium IOS applications using Swift & SwiftUI for the Apple ecosystem"
  },
  {
    id: 3,
    image: "/flutter.png",
    title: "Flutter / Cross Platforms App",
    para: "Cost effective cross platforms solutions with a single codebase for IOS & Android"
  },
  {
    id: 4,
    image: "/Aso.png",
    title: "App Monetization & ASO",
    para: "Maximize revenue with in app purchases, ads and App Store optimization strategies"
  }
]
