import React from 'react'

const About = () => {
  return (
    <article>
        <header>
            <img src="" alt="profile_pic" title="JGF"/>
            <h1>
                Jose German Fuentes
            </h1>
            <h2>
                Full Stack Web Developer
            </h2>
        </header>
        <main>
            <p>
                Hi, there! 👋🏼
                <br/>
                I aim to provide <strong>software solutions</strong> with <em>clear</em>, <em>maintainable</em>, <em>scalable</em> and <em>performant code</em>.
                <br/>
                I'm eager to learn from my peers, have the opportunity to add some value to their work and growth both as a developer and as a team-player.
            </p>
        </main>
        <section>
            <button>LinkedIn</button>
            <button>Github</button>
            <button>Resume</button>
            <button>Este no seria un boton, sino mi mail con opcion de "copiar"</button>
        </section>
    </article>
    
  )
}

export default About