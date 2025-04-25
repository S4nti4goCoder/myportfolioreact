import "./Home.css"
import Hero from '../Components/Hero/Hero'
import About from "../Components/About/About"
import Skills from "../Components/Skills/Skills"
import Portfolio from "../Components/Portfolio/Portfolio"
import ContactForm from "../Components/ContacForm/ContactForm"


const Home = () => {
  return (
    <div className='home'>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <ContactForm/>
    </div>
  )
}

export default Home