import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <img src="/my_icon.jpg" title="JGF_FullStackDev" alt="JGF_icon"/>
      
      <nav>
        <Link>
          <button>Who am I?</button>
        </Link>

        <Link>
          <button>My Experience</button>
        </Link>

        <Link>
          <button>My Projects</button>
        </Link>

        <Link>
          <button>My weapons</button>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar