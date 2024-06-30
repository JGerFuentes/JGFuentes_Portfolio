import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = ({wrongPath, toggleTheme}) => {
  const scrollOptions = {
    smooth: 'easeInOutQuint',
    duration: 500,
    offset: 10,
  }

  //* How to implement theme-switcher: https://saurabhnativeblog.medium.com/react30-project-16-implementing-theme-switching-in-a-react-web-app-9f59279ea5ed
  //* Using localStorage: https://selftaughttxg.com/2023/05-23/learn-local-storage-in-react-create-a-light-and-dark-theme-switcher-application/
  
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <img src="/my_icon.jpg" title="JGF_FullStackDev" alt="JGF_icon"/>
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
        </ul>
      )
      }
    </nav>
  )
}

export default Navbar