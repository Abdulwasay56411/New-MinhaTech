import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Milestones from '../components/Home/Milestones'
import OurServices from '../components/Home/OurServices'
import ToolMagic from '../components/Home/ToolMagic'
import ClientSays from '../components/Home/ClientSays'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Milestones/>
      <OurServices/>
      <ToolMagic/>
      <ClientSays/>
    </div>
  )
}

export default Home
