import Navbar from './Components/Navbar/Navbar'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import Academic from './Components/Academic/Academic'
import Experience from './Components/Experience/Experience'

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
            <Route path="/Portfolio_Website" element={<AboutMe/>}/>
            <Route path="/Portfolio_Website/Experience" element={<Experience/>}/>
            <Route path="/Portfolio_Website/Projects" element={<Projects/>}/>
            <Route path="/Portfolio_Website/Academic" element={<Academic/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
