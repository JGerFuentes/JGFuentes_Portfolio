import React from 'react'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Stack from './components/Stack/Stack'

import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Experience/>
      <Stack/>
      <Projects/>
    </div>
  )
}

export default App
