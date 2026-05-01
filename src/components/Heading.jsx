import React from 'react'

const Heading = ({title, para, children}) => {
  return (
    <div>
      <div className='flex justify-center items-center text-center py-10'>
        <div>
        <h1 className='text-2xl sm:text-5xl  text-[#FFFFFF] font-semibold font-montserrat '>{title}</h1>
        <p className='text-[#C6C7C8] text-sm sm:text-lg  text-center pt-4'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
