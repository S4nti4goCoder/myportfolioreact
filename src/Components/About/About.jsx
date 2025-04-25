import "./About.css";
import codingGif from "../../assets/coding.gif";
import { FaAward, FaProjectDiagram, FaUsers, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-details" id="about">
      <div className="about-content">
        <div className="about-gif-container">
          <img
            src={codingGif}
            alt="Persona programando"
            className="coding-gif"
            loading="lazy"
          />
          <div className="gif-overlay">
            <FaLaptopCode className="overlay-icon" />
            <span>Desarrollando soluciones innovadoras</span>
          </div>
        </div>

        <div className="about-infos">
          <h1>
            Sobre <span className="highlight">Mí</span>
          </h1>
          <p className="description">
            Desarrollador Full Stack con experiencia en múltiples tecnologías.
            Apasionado por crear aplicaciones web eficientes y escalables.
            Autodidacta comprometido con el aprendizaje continuo y las mejores
            prácticas de desarrollo.
          </p>

          <div className="experience-section">
            <div className="experience-card">
              <FaAward className="experience-icon" />
              <span className="experience-number">10+</span>
              <p className="experience-text">Repositorios Públicos</p>
            </div>

            <div className="experience-card">
              <FaProjectDiagram className="experience-icon" />
              <span className="experience-number">5+</span>
              <p className="experience-text">Proyectos Destacados</p>
            </div>

            <div className="experience-card">
              <FaUsers className="experience-icon" />
              <span className="experience-number">3+</span>
              <p className="experience-text">Años de Experiencia</p>
            </div>
          </div>

          <div className="professional-focus">
            <h3>Mi Enfoque Profesional</h3>
            <ul className="focus-list">
              <li>Desarrollo de aplicaciones web completas (frontend y backend)</li>
              <li>Arquitecturas escalables y mantenibles</li>
              <li>Énfasis en rendimiento y experiencia de usuario</li>
              <li>Implementación de mejores prácticas de código</li>
              <li>Soluciones personalizadas para necesidades específicas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;