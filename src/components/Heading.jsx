import React from 'react'

const Heading = ({title, para, children}) => {
  return (
    <div>
      <div className='flex justify-center items-center text-center py-10 lg:py-14'>
        <div>
        <h1 className='text-2xl sm:text-[40px]  text-[#FFFFFF] font-bold '>{title}</h1>
        <p className='text-[#C6C7C8] text-sm sm:text-base tracking-wide text-center pt-2'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
