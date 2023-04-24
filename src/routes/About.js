import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroAbout from "../components/heroSectionAbout/HeroAbout"
import ContainerAbout from '../components/heroSectionAbout/ContainerAbout'

const About = () => {
  return (
    <div>
      <Navbar/>
        <HeroAbout/>
        <ContainerAbout/>
      <Footer/>
    </div>
  )
}

export default About
