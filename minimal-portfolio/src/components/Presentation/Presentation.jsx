import { BiBookmarkHeart, BiBuildingHouse, BiCheck, BiCheckDouble, BiCoffeeTogo, BiDevices, BiLogoLinkedinSquare, BiLogoGithub, BiPaste, BiLinkExternal, BiDownload, BiIdCard } from 'react-icons/bi'
import { useState } from 'react'

const Presentation = () => {
    const [hover, setHover] = useState(false);
    const [hoverA, setHoverA] = useState(false);
    const [hoverB, setHoverB] = useState(false);


    return (
    <article>
        <header>
            <img src="" alt="profile_pic" title="JGF"/>
            <h1>
                Jos&eacute; Germ&aacute;n Fuentes (JGerFuentes)
            </h1>
            <h2>
                Full Stack Web Developer
            </h2>
        </header>

        <main>
            <p>
                <BiBookmarkHeart /> <b>My goal:</b> I aim to provide <strong>web & software solutions</strong> with <em>clear</em>, <em>maintainable</em>, <em>scalable</em> and <em>performant code</em>. 👨🏻‍💻

                <br/>

                <BiBuildingHouse /> <b>My values:</b> Hard-working, relentless, self-driven, enthusiastic and committed employee, as well as a reliable, empathetic, respectful and cooperative co-worker. 🤝🏼

                <br/>

                <em>Sounds interesting to you?</em> <BiCheck />

                <br/>

                <em>Do you share my same principles?</em> <BiCheckDouble />
                
                <br/>

                <BiCoffeeTogo /> How convenient! I'm just looking for new working experiences that allow me to learn from my peers, have the opportunity to make a difference with my background and experience and to grow both as a developer and as a team-player. 🚀

                <br/>

                Please, come in and take a further look at my work! <BiDevices />
            </p>
        </main>

        <section>
            {/* <button><BiLogoLinkedinSquare /></button> */}
            
            {/* <button><BiLogoGithub /></button> */}

            <button onMouseEnter={() => setHoverA(true)} onMouseLeave={() => setHoverA(false)}>
                {hoverA ? <BiLinkExternal /> : <BiLogoLinkedinSquare />}
            </button>

            <button onMouseEnter={() => setHoverB(true)} onMouseLeave={() => setHoverB(false)}>
                {hoverB ? <BiLinkExternal /> : <BiLogoGithub />}
            </button>

            <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {hover ? <BiDownload /> : <BiIdCard />}
            </button>

            <span>jger_fuentes@outlook.com <BiPaste /></span>
        </section>
    </article>

    )
}

export default Presentation