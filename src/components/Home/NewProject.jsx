import React from 'react'
import Heading from '../Heading'
import { motion } from 'framer-motion'

const ProjectCard = ({ item, index }) => {

  const topOffset = 50 + (index * 20); 

  return (
    <div 
      className="h-screen flex justify-center sticky top-0" 
      style={{ paddingTop: `${topOffset}px` }} 
    >
      <motion.div 
        className="w-[90%] my-30 md:w-1/2 bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border border-white/10 h-fit"
        initial={{ y: 50, }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-100px" }}
      >
         <img 
           className="w-full h-auto object-cover" 
           src={item.image} 
           alt={`Project ${item.id}`} 
         />
      </motion.div>
    </div>
  )
}

const NewProject = () => {
  return (
    <div className='max-w-350 mx-auto px-5'>
      <div className="mb-20">
        <Heading title="Success" subtitle="Stories"/>
      </div>
      
      {/* Relative container jiski height cards ke barabar hogi */}
      <div className="relative">
        {projectImage.map((item, index) => (
          <ProjectCard 
            key={item.id} 
            item={item} 
            index={index} 
          />
        ))}
      </div>
      
      {/* Yeh div aakhri card ko screen par rok kar rakhega */}
      <div className="h-[50vh]"></div>
    </div>
  )
}

export default NewProject

const projectImage = [
  { id: 1, image: "/new (1).jpeg" },
  { id: 2, image: "/new (2).jpeg" },
  { id: 3, image: "/new (3).jpeg" },
  { id: 4, image: "/new (4).jpeg" },
  { id: 5, image: "/new (5).jpeg" },
]