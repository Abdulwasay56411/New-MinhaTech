import React, { useState } from 'react'
import Heading from '../Heading'

const question = [
    {
        id: 1,
        title: "How long does it take to develop a mobile app?",
        para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements."
    },
    {
        id: 2,
        title: "How much does app development cost?",
        para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements."
    },
    {
        id: 3,
        title: "Do you provide both Android and iOS app development?",
        para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements."
    },
    {
        id: 4,
        title: "Will you help publish the app on App Store & Play Store?",
        para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements."
    },
    {
        id: 5,
        title: "Do you provide support after the app is launched?",
        para: "The timeline depends on the app’s complexity and features. A simple app may take 4–6 weeks, while a more advanced app can take 2–4 months. We always provide a clear timeline after understanding your requirements."
    },
]

const AskedQuestion = () => {

    const [isOpen, setIsOpen] = useState(null);

    return (
        <div className='max-w-350 mx-auto px-5'>
            <Heading title="Frequently Asked Questions" para="Everything you need to know about working with us" />
            <div className='flex flex-col items-center justify-center gap-5'>
                {question.map((item) => (
                    <div
                        key={item.id}
                        className={`w-full max-w-250 rounded-[30px] border border-[#FFFFFF33] transition-all duration-300 ${isOpen === item.id ? "bg-[#0B1D33]" : "bg-[#192234]  shadow-2xl shadow-[#00000040]"}`}
                    >
                        <div className='py-5 px-5 sm:px-10'>
                            <div className='flex justify-between items-start gap-5'>
                                <h1 className='font-medium text-base sm:text-xl text-[#E5E5E5]'>{item.title}</h1>
                                <div
                                    onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
                                    className='shrink-0 flex justify-center items-center w-9 h-9 rounded-full cursor-pointer bg-[#0598D3]'
                                >
                                    <img
                                        className={`w-5 h-5 transition-transform duration-300 ${isOpen === item.id ? "rotate-180" : "rotate-0"}`}
                                        src={isOpen === item.id ? "/minus.png" : "/plus.png"}
                                        alt="toggle"
                                    />
                                </div>
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out select-none ${isOpen === item.id ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                                <p className='overflow-hidden text-sm sm:text-xl text-[#C6C7C8]'>{item.para}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AskedQuestion
