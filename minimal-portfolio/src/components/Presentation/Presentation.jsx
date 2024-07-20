import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';
import { BiBookmarkHeart, BiBuildingHouse, BiCheck, BiCheckDouble, BiCoffeeTogo, BiDevices, BiLogoLinkedinSquare, BiLogoGithub, BiPaste, BiLinkExternal, BiDownload, BiIdCard } from 'react-icons/bi';

const Presentation = () => {
    const { t } = useTranslation();

    const [hover, setHover] = useState(false);
    const [hoverA, setHoverA] = useState(false);
    const [hoverB, setHoverB] = useState(false);


    return (
    <article>
        <header>
            <img src="https://res.cloudinary.com/dgfnyw7u9/image/upload/v1720249581/Perfil_1_Webp_fgs563.webp" alt="profile_pic" title="JGF" height="200px" width="200px"/>
            <h1>
                Jos&eacute; Germ&aacute;n Fuentes (JGerFuentes)
            </h1>
            <h2>
                {t('presentation.title')}
            </h2>
        </header>

        <section>
            <p>
                <BiBookmarkHeart /> 
                <Trans i18nKey='presentation.goal'>
                    <b>My goal:</b> I aim to provide <strong>web & software solutions</strong> with <em>clear</em>, <em>maintainable</em>, <em>scalable</em> and <em>performant code</em>.
                </Trans>
                👨🏻‍💻

                <br/>

                <BiBuildingHouse /> 
                <Trans i18nKey='presentation.values'>
                    <b>My values:</b> Hard-working, relentless, self-driven, enthusiastic and committed employee, as well as a reliable, empathetic, respectful and cooperative co-worker.
                </Trans>
                🤝🏼
            </p>
        </section>

        <section>
            <p>
                <em>{t('presentation.interest')}</em> <BiCheck />

                <br/>

                <em>{t('presentation.share')}</em> <BiCheckDouble />
                
                <br/>

                <BiCoffeeTogo /> {t('presentation.motto')} 🚀

                <br/>

                {t('presentation.invitation')} <BiDevices />
            </p>
        </section>

        <section>
            <ul>
                <li>
                    <button onMouseEnter={() => setHoverA(true)} onMouseLeave={() => setHoverA(false)}>
                        {hoverA ? <BiLinkExternal /> : <BiLogoLinkedinSquare />}
                    </button>
                </li>
                <li>
                    <button onMouseEnter={() => setHoverB(true)} onMouseLeave={() => setHoverB(false)}>
                        {hoverB ? <BiLinkExternal /> : <BiLogoGithub />}
                    </button>
                </li>
                <li>
                    <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        {hover ? <BiDownload /> : <BiIdCard />}
                    </button>
                </li>
                <li>
                    <span>jger_fuentes@outlook.com <BiPaste /></span>
                </li>
            </ul>
        </section>
    </article>
    )
}

export default Presentation;