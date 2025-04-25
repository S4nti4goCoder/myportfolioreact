import "./About.css"
import foto from "../../assets/foto.png"

const About = () => {
  return (
     <div className="about-details" id="about">
        <div className="circle-bg"></div>
        <img src={foto} alt="sobre mi" />
        <div className="about-infos">
            <h1>Sobre mí</h1>
            <p className="description">
                Soy desarrollador web especializado en JavaScript, ReactJS y Node.js.
                Me apasiona crear soluciones digitales innovadoras y funcionales,
                enfocadas en la experiencia del usuario y el rendimiento óptimo.
            </p>
            <div className="experience-section">
                <div className="experience">
                    <i className="fas fa-plus"></i>
                    <span>2</span>
                    <p>Años de experiencia</p>
                </div>
                <div className="experience">
                    <i className="fas fa-plus"></i>
                    <span>20</span>
                    <p>Proyectos realizados</p>
                </div>
                <div className="experience">
                    <i className="fas fa-plus"></i>
                    <span>5</span>
                    <p>Trabajos profesionales</p>
                </div>
            </div>
        </div>
     </div>
  )
}

export default About