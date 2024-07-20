import { useTranslation, Trans } from 'react-i18next';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiSequelize } from "react-icons/si";
import { BiLinkExternal } from 'react-icons/bi';
import { useState } from 'react';

const Experience = () => {
  const { t } = useTranslation();

  const [hover, setHover] = useState(false);

  return (
    <article>
      <h2>{ t('experience.title') }</h2>

      <section>
        <header>
          <h3><strong>{ t('experience.job-title') }</strong></h3>
          <h4><strong>{ t('experience.company') }</strong></h4>
          <img src="https://res.cloudinary.com/dgfnyw7u9/image/upload/v1720249068/Preview_KaroKids_Web_apmtdq.png" alt="KaroKids_Preview" title="KaroKids_Preview" height={150} width={300}/>
          <h5>{ t('experience.date') }</h5>
          <h5>Medell&iacute;n, Antioqu&iacute;a, Colombia - { t('experience.location') }</h5>
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
              <Trans i18nKey='experience.description'>
                <strong>Description:</strong>
                <ul>
                  <li>I was part of an 8-member team working under <em>Agile/Scrum methodologies</em> in the development from scratch of an entire e-commerce platform for the store. I was mainly in charge of the database modeling, the e-mail notification features, and the image management service for the website. I also collaborated in the general logic development of some routes, handlers, and controllers, and the integration of a third party RESTful payment API (MercadoPago).</li>
                </ul>
              </Trans>
            </li>

            <li>
              <Trans i18nKey='experience.achievements'>
                <strong>Achievements:</strong>
                <ul>
                  <li>Increase visibility and sales volume by designing an e-commerce website exclusively dedicated to the promotion and commercialization of the store&apos;s products.</li>
                  <li>Enable direct and fluent communication between business and customers.</li>
                </ul>
              </Trans>
            </li>

            <li>
              <Trans i18nKey='experience.features'>
                <strong>The website includes:</strong>
                <ul>
                  <li>User registration and login protocols</li>
                  <li>Administrator and Users dashboard</li>
                  <li>Shopping cart</li>
                  <li>Favorites list</li>
                  <li>Payment gateway</li>
                  <li>Simple and intuitive interface</li>
                </ul>
              </Trans>
            </li>

            <li>
              <strong>Stack:</strong>
              <ul>
                <li><SiJavascript /></li>
                <li><SiNodedotjs /></li>
                <li><SiExpress /></li>
                <li><SiPostgresql /></li>
                <li><SiSequelize /></li>
                <li><SiReact /></li>
                <li><SiHtml5 /></li>
                <li><SiCss3 /></li>
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