import { SiJavascript, SiHtml5, SiCss3, SiSass, SiReact, SiRedux, SiNodedotjs, SiExpress, SiPostgresql, SiSequelize, SiJest } from "react-icons/si"

const Projects = () => {
  return (
    <article>
      <h2>My Projects</h2>
      <section>
        <h3>Drivers App</h3>
        <img src='/LandingPage_1.png' alt='F1_project_pic' title='Drivers_App' height={150} width={300}/>
        <h4>Single Page Application (SPA) "Formula 1" themed with a simple design and intuitive navigation for the presentation and creation of F1 drivers.</h4>
        <p>The website includes:</p> 
        <ul>
          <li>Landing page with a call to action button</li>
          <li>Home page with paginated results view</li>
          <li>Search bar to search drivers by name</li>
          <li>Combined filters and sorting options</li>
          <li>Drivers&apos; details view</li>
          <li>Driver creation form</li>
          <li>API consumption</li>
          <li>Drivers&apos; storage in relational database</li>
          <li>Full-responsive design</li>
          <li>Unitary and integrational testing for the Back end</li>
        </ul>
        <h4>Stack</h4>
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
      </section>
      <section>
        <h3>Rick and Morty App</h3>
        <img src='' alt='R&M_project_pic' title='Rick_and_Morty_App' height={150} width={300}/>
        <h4>Single Page Application (SPA) for the visualization of and interaction with the characters from the "Rick and Morty" animated series.</h4>
        <p>The website includes:</p> 
        <ul>
          <li>Landing page with a call to action button</li>
          <li>Home page for the presentation of characters</li>
          <li>Search bar to search characters by name</li>
          <li>Combined filters and sorting options</li>
          <li>Characters&apos; details view</li>
          <li>RIck and Morty API consumption</li>
          <li>Full-responsive design</li>
          <li>Unitary and integrational testing for the Back end</li>
        </ul>
        <h4>Stack</h4>
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
      </section>
    </article>
  )
}

export default Projects