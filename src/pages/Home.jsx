import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Milestones from '../components/Home/Milestones'
import OurServices from '../components/Home/OurServices'
import ToolMagic from '../components/Home/ToolMagic'
import ClientSays from '../components/Home/ClientSays'
import OurProject from '../components/Home/OurProject'
// import Work from '../components/Home/Work'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Milestones/>
      <OurServices/>
      <ToolMagic/>
      <ClientSays/>
      <OurProject/>
      {/* <Work/> */}
    </div>
  )
}

export default Home
