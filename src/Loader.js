import React from 'react'
import LoaderGif from "./loader.gif"

function Loader() {
  return (
    <div className='loader'>
      <img src={LoaderGif} alt="icone de chargement" />
    </div>
  )
}

export default Loader
