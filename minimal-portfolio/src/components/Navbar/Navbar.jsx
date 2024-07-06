import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = ({wrongPath, toggleTheme}) => {
  const scrollOptions = {
    smooth: 'easeInOutQuint',
    duration: 500,
    offset: 10,
  }
  
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <img src="https://res.cloudinary.com/dgfnyw7u9/image/upload/v1718175103/my_icon__kldurr.jpg" alt="JGF_FullStackDev" title="JGF_FullStackDev"  height={100} width={100}/>
          </Link>
        </li>
      </ul>

      { !wrongPath && (
        <ul>
          <li>
            <button>
              <ScrollLink to='presentation'>
                  Who am I?
              </ScrollLink>
            </button>
          </li>

          <li>
            <button>
              <ScrollLink to='experience' {...scrollOptions}>
                My Experience
              </ScrollLink>
            </button>
          </li>

          <li>
            <button>
              <ScrollLink to='projects' {...scrollOptions}>
                My Projects
              </ScrollLink>
            </button>
          </li>

          <li>
            <button>
              <ScrollLink to='stack' {...scrollOptions}>
                My weapons
              </ScrollLink>
            </button>
          </li>

          <li>
            <button onClick={toggleTheme}>
              Theme selector
            </button>
          </li>

          <li>
            <button>
              🌐
            </button>
          </li>
        </ul>
      )
      }
    </nav>
  )
}

export default Navbar