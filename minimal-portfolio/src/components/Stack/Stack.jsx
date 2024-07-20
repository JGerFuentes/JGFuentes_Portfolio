import { useTranslation } from "react-i18next";
import { SiJavascript, SiHtml5, SiCss3, SiSass, SiReact, SiRedux, SiNodedotjs, SiExpress, SiPostgresql, SiSequelize, SiJest, SiPostman, SiVisualstudiocode, SiGithub, SiGnubash, SiGit, SiNpm, SiAxios, SiVercel, SiRapid, SiNodemon, SiFigma, SiSlack, SiTrello, SiJira, SiNotion, SiC, SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPlaywright } from "react-icons/si";

const Stack = () => {
  const { t } = useTranslation();

  return (
    <article>
      <h2>{ t('stack.title') }</h2>

      <section>
        <h3>Stack</h3>
        <strong>{ t('stack.everyday-stack') }</strong>
        <ul>
          <li><SiJavascript size={35}/> - JavaScript</li>
          <li><SiHtml5 size={35}/> - HTML5</li>
          <li><SiCss3 size={35}/> - CSS3</li>
          <li><SiSass size={35}/> - SASS / SCSS</li>
          <li><SiReact size={35}/> - React</li>
          <li><SiRedux size={35}/> - Redux</li>
          <li><SiNodedotjs size={35}/> - NodeJS</li>
          <li><SiExpress size={35}/> - Express</li>
          <li><SiPostgresql size={35}/> - PostgreSQL</li>
          <li><SiSequelize size={35}/> - Sequelize</li>
          <li><SiJest size={35}/> - Jest</li>
          <li><SiPostman size={35}/> - Postman</li>
          <li><b>{ t('stack.methodologies') }</b> Agile / Scrum</li>
        </ul>
      </section>
      
      <section>
        <h3>{ t('stack.subtitle-1') }</h3>
        <strong>{ t('stack.tools') }</strong>
        <ul>
          <li><SiVisualstudiocode size={35}/> - VSCode</li>
          <li><SiGithub size={35}/> - Github</li>
          <li><SiGit size={35}/> - Git</li>
          <li><SiGnubash size={35}/> - Bash (GNU)</li>
          <li><SiNpm size={35}/> - Npm</li>
          <li><SiAxios size={35}/> - Axios</li>
          <li><SiNodemon size={35}/> - Nodemon</li>
          <li><SiFigma size={35}/> - Figma</li>
          <li><SiSlack size={35}/> - Slack</li>
          <li><SiTrello size={35}/> - Trello</li>
          <li><SiNotion size={35}/> - Notion </li>
        </ul>
      </section>

      <section>
        <h3>{ t('stack.subtitle-2') }</h3>
        <strong>{ t('stack.learning') }</strong>
        <ul>
          <li><SiC size={35}/> - { t('stack.c-language') }</li>
          <li><SiTypescript size={35}/> - TypeScript</li>
          <li><SiTailwindcss size={35}/> - TailwindCSS</li>
          <li><SiNextdotjs size={35}/> - NextJS</li>
          <li><SiMongodb size={35}/> - MongoDB</li>
          <li><SiPlaywright size={35}/> - Playwright</li>
        </ul>
      </section>
    </article>
  )
}

export default Stack;