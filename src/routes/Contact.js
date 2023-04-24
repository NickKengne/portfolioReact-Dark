import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroContact from '../components/heroContact/HeroContact'
import HeroForm from '../components/heroContact/HeroForm'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroContact/>
      <HeroForm/>
      <Footer/>
    </div>
  )
}

export default Contact
