import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroProject from '../components/heroSectionProject/HeroProject'
import ProjectSection from '../components/heroSectionProject/ProjectSection'

const Project = () => {
  return (
    <div>
      <Navbar/>
        <HeroProject/>
        <ProjectSection/>
      <Footer/>
    </div>
  )
}

export default Project
