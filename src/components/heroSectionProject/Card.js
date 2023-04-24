import React from 'react'
import "./ProjectSection.css"

export default function Card({img , linkSource,titleProject}) {
  return (
    <div className='card'>
        <img src={img} alt={titleProject} />
        <h5>{titleProject}</h5>
        <a href={linkSource}>Voir plus</a>
    </div>
  )
}
