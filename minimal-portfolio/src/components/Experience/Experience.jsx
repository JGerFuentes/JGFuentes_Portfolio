import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiPostgresql } from "react-icons/si"

const Experience = () => {
  return (
    <article>
      <h2>My Experience</h2>

      <section>
        <header>
          <h3><strong>Junior Back End Developer</strong></h3>
          <h4><strong>KaroKids - Internship</strong></h4>
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

        <ul>
          <ul>Achievements:
            <li>Increase visibility and sales volume by designing an e-commerce website exclusively dedicated to the promotion and commercialization of the store&apos;s products.</li>
            <li>Enable direct and fluent communication between business and customers.</li>
          </ul>

          <li>The website includes:
            <ul>
              <li>User registration and login protocols</li>
              <li>Administrator and Users dashboard</li>
              <li>Shopping cart</li>
              <li>Favorites list</li>
              <li>Payment gateway</li>
              <li>Simple and intuitive interface</li>
            </ul>
          </li>
          
          <li>Stack:
            <ul>
              <li><SiJavascript /></li>
              <li><SiHtml5 /></li>
              <li><SiCss3 /></li>
              <li><SiReact /></li>
              <li><SiNodedotjs /></li>
              <li><SiPostgresql /></li>
            </ul>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Experience