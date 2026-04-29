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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='max-w-350 mx-auto px-5'>
            <Heading title="Frequently Asked Questions" para="Everything you need to know about working with us" />
            <div>
             {
                question.map((item)=>(
                    <div className={`max-w-250 h-auto border border-[#FFFFFF33] ${isOpen === item.id ? "bg-[#0B1D33]": "bg-[#192234]"}`}>
                      <div>
                        
                      </div>
                    </div>
                ))
             }
            </div>
        </div>
    )
}

export default AskedQuestion
