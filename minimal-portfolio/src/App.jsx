import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {
  const { pathname } = useLocation();
  let [error, setError] = useState(false);
  
  useEffect(() => {
    if (pathname !== '/') {
      setError(true);
    }
    else {
      setError(false);
    }
  }, [pathname])

  return (
    <>
      <header>
        <Navbar wrongPath={error}/>
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
