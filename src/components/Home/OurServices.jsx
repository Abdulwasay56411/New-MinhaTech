import React from 'react'
import Heading from '../Heading'

const OurServices = () => {
  return (
    <div id='services'>
      <div>
        <Heading title="Core Services" para="End to end mobile apps solutions tailored for startups and enterprises"/>
      </div>
    </div>
  )
}

export default OurServices

const serviceBox = [
  {
    id: 1,
    image: "",
    title: "Android App Development",
    para: "Native Android Apps built with Kotlin & Java fpr optimal performance and user experience "
  },
  {
    id: 2,
    image: "",
    title: "IOS App Development",
    para: "Premium IOS applications using Swift & SwiftUI for the Apple ecosystem"
  },
  {
    id: 3,
    image: "",
    title: "Flutter / Cross Platforms App",
    para: "Cost effective cross platforms solutions with a single codebase for IOS & Android"
  },
  {
    id: 4,
    image: "",
    title: "App Monetization & ASO",
    para: "Maximize revenue with in app purchases, ads and App Store optimization strategies"
  }
]
