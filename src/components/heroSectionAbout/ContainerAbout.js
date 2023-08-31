import React, { useState ,useEffect} from 'react'
import GoLocation from "react-icons/go"
import "./ContainerAbout.css"

const ContainerAbout = () => {
  return (
    <div className='container-about'>
        <h4>Ce que vous devez savoir sur moi </h4>
      <div className="about-me">
        <div className="picture">

        </div>
        <div className="textAbout">
            <h1>A propos</h1>
            <p className='me' id='name'>Hi, je suis Nick Dibrilain , j'ai 20 ans et je suis Developpeur web et freelancer.j'aime l'esprit de challenge face aux differents projets que j'ai eu à realiser. La satisfaction de mes clients , me rend tout d'abord encore plus fier. J'ai pas mal de projet front et back-end.</p>
            <h3>Mes skills : </h3>
            <ul className="liste-skills">
              <li className="skills">*Html <span id='name'>90%</span></li>
              <li className="skills">*CssFlexbox <span id='name'>95%</span></li>
              <li className="skills">*Javascript <span id='name'>65%</span></li>
              <li className="skills">*ReactJs  <span id='name'>85%</span></li>
              <li className="skills">*React Native <span id='name'>80%</span></li>
              <li className="skills">*Php <span id='name'>45%</span></li>
              <li className="skills">*Sql <span id='name'>80%</span></li>
              <li className="skills">*MongoDB <span id='name'>80%</span></li>
              <li className="skills">*NodeJs Express For Api <span id='name'>80%</span></li>
            </ul>
            <h3>Localisation:</h3>
              Douala, Cameroun Oyack Bassa 
        </div>
      </div>
    </div>
  )
}

export default ContainerAbout
