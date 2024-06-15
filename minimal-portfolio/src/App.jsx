import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import './App.css'


function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      
      <main>
        <Routes>
          
          <Route path='/' element={ <Home/> }/>

          <Route path='*' element={ <ErrorPage/> }/>
        </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default App
