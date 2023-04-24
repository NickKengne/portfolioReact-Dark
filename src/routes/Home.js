import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroHome from '../components/herosection/HeroHome'
import Footer from '../components/footer/Footer'
import "../App.css"

const Home = () => {
  return (
    <div className='homePage'>
       <Navbar/>
       <HeroHome/>
    </div>
  )
}

export default Home
