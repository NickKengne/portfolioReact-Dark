import React, {useState , useEffect} from 'react'
import "./App.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import Loader from "./Loader"

import { Routes,Route } from 'react-router-dom'

function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1500) 
  }, [])


  return  loader ? (<Loader/>) : (
    <>
       <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/project" element = {<Project/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
       </Routes>
    </>
  )
}

export default App




