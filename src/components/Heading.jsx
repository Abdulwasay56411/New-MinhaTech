import React from 'react'

const Heading = ({title, children}) => {
  return (
    <div>
      <div className='flex items-center gap-1 pb-10'>
        <img className='w-10 h-10' src="/star.png" alt="" />
        <h1 className='text-2xl sm:text-4xl text-white font-bold font-montserrat '>{title}</h1>
      </div>
    </div>
  )
}

export default Heading
