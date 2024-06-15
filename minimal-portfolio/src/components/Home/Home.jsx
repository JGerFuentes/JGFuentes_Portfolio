import { Element } from 'react-scroll'
import Presentation from '../Presentation/Presentation'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Stack from '../Stack/Stack'

const Home = () => {
    return (
        <article>
            <Element name='presentation'>
                <Presentation/>
            </Element>

            <Element name='experience'>
                <Experience/>
            </Element>

            <Element name='projects'>
                <Projects/>
            </Element>

            <Element name='stack'>
                <Stack/>
            </Element>
        </article>
    )
}

export default Home