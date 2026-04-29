import React from 'react'

const Heading = ({title, para, children}) => {
  return (
    <div>
      <div className='flex justify-center items-center text-center py-14'>
        <div>
        <h1 className='text-2xl sm:text-5xl md:text-6xl text-[#FFFFFF] font-semibold font-montserrat '>{title}</h1>
        <p className='text-[#C6C7C8] text-base sm:text-lg md:text-xl text-center pt-3'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
