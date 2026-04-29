import React from 'react'

const Heading = ({title, para, children}) => {
  return (
    <div>
      <div className='flex justify-center items-center text-center pt-20 pb-10'>
        <div>
        <h1 className='text-xl sm:text-5xl text-[#FFFFFF] font-semibold font-montserrat '>{title}</h1>
        <p className='text-[#C6C7C8] text-xl text-center py-2'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
