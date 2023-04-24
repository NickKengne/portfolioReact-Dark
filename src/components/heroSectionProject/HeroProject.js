import React from 'react'
import { Link } from 'react-router-dom'
import {TiSocialFacebook, TiSocialYoutube, TiSocialInstagram, TiSocialLinkedin} from "react-icons/ti"
import "./HeroProject.css"
import { BsGithub } from 'react-icons/bs'



const HeroProject = () => {
  return (
    <div className='heroProject'>
      <div className="container-homeSectionProject">
        <div className="contentProject">
          <h1>Projects</h1>
          <p><Link to="/">Home</Link> / <span>Project</span></p>
        </div>
        <div className="socialNetwork" id='name'>
          <a href='../www.google.com'><TiSocialFacebook size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialYoutube size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialLinkedin size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><BsGithub size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialInstagram size={22} style={{color : "white"}}/></a>
        </div>
      </div>
    </div>
  )
}


export default HeroProject
