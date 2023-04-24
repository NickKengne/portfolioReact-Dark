import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {TiSocialFacebook, TiSocialYoutube, TiSocialInstagram, TiSocialLinkedin} from "react-icons/ti"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all'
import {BsGithub} from "react-icons/bs"
import TypeWriterEffect from 'react-typewriter-effect';
import "./HeroHome.css"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


const HeroHome = () => {

  const slideInleft = (elem, delay,duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity:1,
        x:0,
        delay: delay || 0.7,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger : elem,
          

        }
      }
    )
  }

    useEffect(() => {
      slideInleft("#iconmedia")
    }, []);

  return (
    <div className='heroHome'>
      <div className="container-homeSection">
        <div className="content">
          <p><TypeWriterEffect
        textStyle={{
          color: '#ffffff9d',
          fontWeight: 500,
          fontSize: '1.1em',
        }}
      
        cursorColor="#6d00bb"
        multiText={[
          'Hi , I\'m Freelancer',
          'Dev Front-end',
          'Dev Back-end',
          'I\'m a',
        ]}
        multiTextDelay={3000}
        typeSpeed={80}
      /></p>
          <h1>Web Developer</h1>
        </div>
        <div className="content-btn-home">
          <Link to="/project" className='btn-1'>Projects</Link>
          <Link to="/contact" className='btn-2'>Contact</Link>
        </div>
        <div className="socialNetwork" id='iconmedia'>
          <a href='https://www.google.com'><TiSocialFacebook size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialYoutube size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialLinkedin size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><BsGithub size={22} style={{color : "white"}}/></a>
          <a href='www.google.com'><TiSocialInstagram size={22} style={{color : "white"}}/></a>
        </div>
      </div>
      
    </div>
  )
}


export default HeroHome
