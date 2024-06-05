import { Routes, Route } from 'react-router-dom'
import { Element } from 'react-scroll'
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
    <>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Routes>
          <Route path='/' element={ <Presentation/> }/>
          {/* <Route path='/about' element={ <About/> }/> */}
          <Route path='*' element={ <ErrorPage/> }/>
        </Routes>

        <Element name='experience'>
          <Experience/>
        </Element>

        <Element name='projects'>
          <Projects/>
        </Element>

        <Element name='stack'>
          <Stack/>
        </Element>
      </main>

      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default App
