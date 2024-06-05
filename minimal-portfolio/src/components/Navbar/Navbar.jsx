import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
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
            <img src="/my_icon.jpg" title="JGF_FullStackDev" alt="JGF_icon"/>
          </Link>
        </li>

        <li>
          <Link to='/about'>
            <button>
              Who am I?
            </button>
          </Link>
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
      </ul>
    </nav>
  )
}

export default Navbar