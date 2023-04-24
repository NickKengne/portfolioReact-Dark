import React ,{useState,useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Navbar = () => {

/**Traitement de la navbar */
  const [click , setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY > 0) {
      setColor(true);
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  /**Apparition au defilement de mon nom avec gsap */
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
      slideInleft("#name")
    }, [])

    
  return (
    <div className={color ? "header sticky" : "header"}>
      <Link to="/"><p id='name'>Nick Dibrilain<span>.</span></p></Link>
      <ul className={ click ? "liste-nav active" : "liste-nav"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {
          !click ? (<FaBars size={20} style={{color: "white"}}/>) : (<FaTimes size={22} style={{color: "white"}}/>)
        }
        
      </div>
    </div>
  )
}

export default Navbar
