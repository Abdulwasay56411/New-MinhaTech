import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Milestones from '../components/Home/Milestones'
import OurServices from '../components/Home/OurServices'
import ToolMagic from '../components/Home/ToolMagic'
import ClientSays from '../components/Home/ClientSays'
import OurProject from '../components/Home/OurProject'
import AskedQuestion from '../components/Home/AskedQuestion'
import Work from '../components/Home/Work'
import Plans from '../components/Home/Plans'
import GetInTouch from '../components/Home/GetInTouch'


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Milestones/>
      <OurServices/>
      <ToolMagic/>
      <ClientSays/>
      <OurProject/>
      <AskedQuestion/>
      <Plans/>
      <Work/>
      <GetInTouch/>
    </div>
  )
}

export default Home
