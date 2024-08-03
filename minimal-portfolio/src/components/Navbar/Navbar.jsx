import i18n from 'i18next';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Navbar = ({wrongPath, toggleTheme}) => {
  const { t } = useTranslation();

  const languages = {
    en: { nativeName: 'English (US)'},
    es: { nativeName: 'Español (AR)'},
    de: { nativeName: 'Deutsch (DE)'},
    fr: { nativeName: 'Français (FR)'},
  }

  const handleTranslation = (event) => {
    i18n.changeLanguage(event.target.value);
  }

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
                  { t('nav-buttons.profile') }
              </ScrollLink>
            </button>
          </li>

          <li>
            <button>
              <ScrollLink to='experience' {...scrollOptions}>
                { t('nav-buttons.experience') }
              </ScrollLink>
            </button>
          </li>

          <li>
            <button>
              <ScrollLink to='projects' {...scrollOptions}>
                { t('nav-buttons.projects') }
              </ScrollLink>
            </button>
          </li>

          <li>
            <button>
              <ScrollLink to='stack' {...scrollOptions}>
                { t('nav-buttons.weapons') }
              </ScrollLink>
            </button>
          </li>

          <li>
            <button onClick={toggleTheme}>
              🌞 / 🌛
            </button>
          </li>

          <label key='languageSelector'> 🌐
            <select onChange={handleTranslation} >
            { Object.keys(languages).map((lng) => {
                return(
                  <option key={lng} value={lng}>
                      {languages[lng].nativeName}
                  </option>
                )
              }) }
            </select>
          </label>

        </ul>
      )
      }
    </nav>
  )
}

export default Navbar