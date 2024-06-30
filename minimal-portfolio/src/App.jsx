import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {
  const { pathname } = useLocation();
  
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme')
    return initialTheme ? initialTheme : 'light'
  })

  const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }
  
  useEffect(() => {
    getThemeFromLocalStorage()
  }, [theme])

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
        <Navbar wrongPath={error} toggleTheme={toggleTheme}/>
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
