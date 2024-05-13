import React from 'react'
import About from './components/About'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Stack from './components/Stack'

import './App.css'

function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Experience/>
      <Stack/>
      <Projects/>
    </main>
  )
}

export default App
