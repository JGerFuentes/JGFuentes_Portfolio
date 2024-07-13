import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiSequelize } from "react-icons/si";
import { BiLinkExternal } from 'react-icons/bi';
import { useState } from 'react';

const Experience = () => {
  const [hover, setHover] = useState(false);

  return (
    <article>
      <h2>My Experience</h2>

      <section>
        <header>
          <h3><strong>Junior Back End Developer</strong></h3>
          <h4><strong>KaroKids - Internship</strong></h4>
          <img src="https://res.cloudinary.com/dgfnyw7u9/image/upload/v1720249068/Preview_KaroKids_Web_apmtdq.png" alt="KaroKids_Preview" title="KaroKids_Preview" height={150} width={300}/>
          <h5>Feb. 2024 - Mar. 2024</h5>
          <h5>Medell&iacute;n, Antioqu&iacute;a, Colombia - Remote</h5>
        </header>

        {/* list-style-type: none; --> Quita las viñetas */ }
        {/* margin: 0; --> Elimina el margen predeterminado */}
        
        {/* /* Opcional: Si también deseas eliminar las viñetas de otras listas anidadas
        ul ul {
            list-style-type: none;
            padding-left: 20px; /* Mantén el sangrado para la jerarquía visual
        } */}

        <section>
          <ul>
            <li>
              <strong>Achievements:</strong>
              <ul>
                <li>Increase visibility and sales volume by designing an e-commerce website exclusively dedicated to the promotion and commercialization of the store&apos;s products.</li>
                <li>Enable direct and fluent communication between business and customers.</li>
              </ul>
            </li>

            <li>
              <strong>Description:</strong>
              <ul>
                <li>I was part of an 8-member team working under Agile/Scrum methodologies in the development from scratch of an entire e-commerce platform for the store. I was mainly in charge of the e-mail notification sending features as well as the management and image uploading service for the website. I also collaborated in the database modeling, the logic development of some controllers, and helped the Front End team with the implementation of some extra features for the admin dashboard and with the pre and post-production testing of the website.</li>
              </ul>
            </li>

            <li>
              <strong>The website includes:</strong>
              <ul>
                <li>User registration and login protocols</li>
                <li>Administrator and Users dashboard</li>
                <li>Shopping cart</li>
                <li>Favorites list</li>
                <li>Payment gateway</li>
                <li>Simple and intuitive interface</li>
              </ul>
            </li>

            <li>
              <strong>Stack:</strong>
              <ul>
                <li><SiJavascript /></li>
                <li><SiHtml5 /></li>
                <li><SiCss3 /></li>
                <li><SiReact /></li>
                <li><SiNodedotjs /></li>
                <li><SiExpress /></li>
                <li><SiPostgresql /></li>
                <li><SiSequelize /></li>
              </ul>
            </li>

            <li>
              <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {hover ? <BiLinkExternal /> : <b>Link</b>}
              </button>
            </li>
          </ul>
        </section>
      </section>
    </article>
  )
}

export default Experience;