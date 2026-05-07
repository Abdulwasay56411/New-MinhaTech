import React from 'react'

const Heading = ({title, para, subtitle}) => {
  return (
    <div>
      <div className='flex justify-center items-center text-center pt-5 pb-8 sm:py-8 lg:py-14'>
        <div>
        <h1 className='text-2xl sm:text-[40px]  text-[#FFFFFF] font-bold '>{title} <span className='text-[#06B8FF]'>{subtitle}</span> </h1>
        <p className='text-[#C6C7C8] text-sm sm:text-base tracking-wide text-center sm:pt-2 max-w-196'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
