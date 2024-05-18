import React from 'react'
import Presentation from './components/Presentation/Presentation'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Stack from './components/Stack/Stack'

import './App.css'


function App() {
  return (
    <div>
      <Navbar/>
      <Presentation/>
      <Experience/>
      <Stack/>
      <Projects/>
      <Footer/>
      
      <ErrorPage/>
    </div>
  )
}

export default App
