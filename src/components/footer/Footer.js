import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-left">
                <Link to="/"><p>Nick Dibrilain<span>.</span></p></Link>
            </div>
            <div className="footer-left">
                
            </div>
        </div>
    </div>
  )
}

export default Footer
