import { useTranslation, Trans } from "react-i18next";
import { SiJavascript, SiHtml5, SiCss3, SiSass, SiReact, SiRedux, SiNodedotjs, SiExpress, SiPostgresql, SiSequelize, SiJest } from "react-icons/si";
import { BiLinkExternal } from 'react-icons/bi';
import { useState } from 'react';

const Projects = () => {
  const { t } = useTranslation();

  const [hover, setHover] = useState(false);
  const [hoverB, setHoverB] = useState(false);


  return (
    <article>
      <h2>{ t('projects.title') }</h2>
      <section>
        <h3>Drivers App</h3>
        <img src="https://res.cloudinary.com/dgfnyw7u9/image/upload/v1720249022/LandingPage_1_wznwcq.png" alt="Drivers_App_Preview" title="Drivers_App_Preview" height={150} width={300}/>
        <h4>{ t('projects.brief-1') }</h4>
        <ul>
          <li>
            <Trans i18nKey='projects.features-1'>
              <strong>The website includes:</strong>
              <ul>
                <li>Landing page with a call to action button.</li>
                <li>Home page with paginated results view.</li>
                <li>Search bar to search drivers by name.</li>
                <li>Combined filters and sorting options.</li>
                <li>Drivers&apos; details view.</li>
                <li>Driver creation form.</li>
                <li>RESTful API integration.</li>
                <li>Storage in relational database.</li>
                <li>Full-responsive design.</li>
                <li>Unitary and integrational testing for the Back end.</li>
              </ul>
            </Trans>
          </li>

          <li>
            <strong>Stack:</strong>
            <ul>
              <li><SiJavascript /></li>
              <li><SiHtml5 /></li>
              <li><SiCss3 /></li>
              <li><SiSass /></li>
              <li><SiReact /></li>
              <li><SiRedux /></li>
              <li><SiNodedotjs /></li>
              <li><SiExpress /></li>
              <li><SiPostgresql /></li>
              <li><SiSequelize /></li>
              <li><SiJest /></li>
            </ul>
          </li>

          <li>
            <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              {hover ? <BiLinkExternal /> : <b>Link</b>}
            </button>
          </li>
        </ul>
      </section>

      <section>
        <h3>Rick and Morty App</h3>
        <img src='' alt='R&M_project_pic' title='Rick_and_Morty_App' height={150} width={300}/>
        <h4>{ t('projects.brief-2') }</h4>
        <ul>
          <li>
            <Trans i18nKey='projects.features-2'>
              <strong>The website includes:</strong>
              <ul>
                <li>Landing page with a call to action button.</li>
                <li>Home page for the presentation of characters.</li>
                <li>Search bar to search characters by name.</li>
                <li>Combined filters and sorting options.</li>
                <li>Characters&apos; details view.</li>
                <li>Rick and Morty RESTful API integration.</li>
                <li>Full-responsive design.</li>
                <li>Unitary and integrational testing for the Back end.</li>
              </ul>
            </Trans>
          </li>
          
          <li>
            <strong>Stack:</strong>
            <ul>
              <li><SiJavascript /></li>
              <li><SiHtml5 /></li>
              <li><SiCss3 /></li>
              <li><SiSass /></li>
              <li><SiReact /></li>
              <li><SiRedux /></li>
              <li><SiNodedotjs /></li>
              <li><SiExpress /></li>
              <li><SiPostgresql /></li>
              <li><SiSequelize /></li>
              <li><SiJest /></li>
            </ul>    
          </li>

          <li>
            <button onMouseEnter={() => setHoverB(true)} onMouseLeave={() => setHoverB(false)}>
              {hoverB ? <BiLinkExternal /> : <b>Link</b>}
            </button>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Projects;