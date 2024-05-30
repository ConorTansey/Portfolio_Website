import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Resume from './Components/Resume/Resume'
import Projects from './Components/Projects/Projects'
import Academic from './Components/Academic/Academic'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import {Route, Routes} from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <div className="Wrapper">
        <div className="Navbar">
          <Navbar/>
        </div>
        <div className="Content">
          <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/Experience" element={<Experience/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Academic" element={<Academic/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
