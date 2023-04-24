import React from 'react'
import './ProjectSection.css'
import { Portfolio } from '../../data/portfolioData'
import Card from './Card'

export default function ProjectSection() {
  return (
    <div className='container-portfolio'>
      <h3 className='title-portfolio'>some of my recent projects</h3>
      <div className="portfolio">
        {
            Portfolio.map((item) => (
                <Card linkSource={item.linkSource} img={item.img} titleProject={item.titleProject}/>
            ))
        }
      </div>
    </div>
  )
}
