import React from 'react'

const Heading = ({title, para, children}) => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div>
        <h1 className='text-xl sm:text-4xl bg-linear-to-r from-[#F2F6F7] to-[#07C879] bg-clip-text text-transparent  font-bold font-montserrat '>{title}</h1>
        <p className='text-[#C6C7C8] text-xl text-center py-1'>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default Heading
