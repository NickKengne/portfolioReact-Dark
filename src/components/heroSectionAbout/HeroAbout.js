import React from 'react'
import { Link } from 'react-router-dom'
import {TiSocialFacebook, TiSocialYoutube, TiSocialInstagram, TiSocialLinkedin} from "react-icons/ti"
import "./HeroAbout.css"
import { BsGithub } from 'react-icons/bs'



const HeroAbout = () => {
  return (
    <div className='heroAbout'>
      <div className="container-homeSectionAbout">
        <div className="contentAbout">
          <h1>About</h1>
          <p><Link to="/">Home</Link> / <span>About</span></p>
        </div>
        <div className="socialNetwork" id='name'>
          <a href='/www.google.com'><TiSocialFacebook size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialYoutube size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialLinkedin size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><BsGithub size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialInstagram size={22} style={{color : "white"}}/></a>
        </div>
      </div>
      
    </div>
  )
}


export default HeroAbout
