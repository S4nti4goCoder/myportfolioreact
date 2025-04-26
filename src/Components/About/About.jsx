import "./About.css";
import codingGif from "../../assets/coding.gif";
import {
  FaAward,
  FaProjectDiagram,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-details" id="about">
      {/* Fila 1: Gif + Información */}
      <div className="about-top">
        {/* GIF */}
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

        {/* SOBRE MI */}
        <div className="about-infos">
          <h1>
            Sobre <span className="highlight">Mí</span>
          </h1>
          <p className="description">
            Desarrollador Frontend y Backend con experiencia en múltiples
            tecnologías. Apasionado por crear aplicaciones web eficientes y
            escalables. Autodidacta comprometido con el aprendizaje continuo y
            las mejores prácticas de desarrollo.
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
              <span className="experience-number">1+</span>
              <p className="experience-text">
                Años de Experiencia en proyectos
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fila 2: Bloques de enfoque */}
      <div className="professional-focus-container">
        {/* Primer bloque */}
        <div className="professional-focus">
          <h3>Mi Enfoque Profesional</h3>
          <ul className="focus-list">
            <li>
              Desarrollo de aplicaciones web completas (frontend y backend)
            </li>
            <li>Arquitecturas escalables y mantenibles</li>
            <li>Énfasis en rendimiento y experiencia de usuario</li>
            <li>Implementación de mejores prácticas de código</li>
            <li>Soluciones personalizadas para necesidades específicas</li>
          </ul>
        </div>
        {/* Segundo bloque: Educación + Experiencia */}
        <div className="professional-focus">
          <h3>Experiencia y Educación</h3>
          <div className="timeline-container">
            {/* Experiencia */}
            <div className="timeline-section">
              <h4 className="section-title">Experiencia</h4>

              <div className="timeline-item">
                <div className="timeline-icon experience-icon">🏢</div>
                <div className="timeline-content">
                  <h5>Frontend Developer - Proyecto Personal</h5>
                  <span className="timeline-date">2024 - Actualidad</span>
                  <p>
                    Desarrollo de aplicaciones web modernas utilizando React y
                    Next.js.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon experience-icon">🏢</div>
                <div className="timeline-content">
                  <h5>Backend Developer - Proyecto Freelance</h5>
                  <span className="timeline-date">2023</span>
                  <p>
                    Desarrollo de APIs RESTful y administración de bases de
                    datos MySQL.
                  </p>
                </div>
              </div>
            </div>
            {/* Educación */}
            <div className="timeline-section">
              <h4 className="section-title">Educación</h4>

              <div className="timeline-item">
                <div className="timeline-icon education-icon">🎓</div>
                <div className="timeline-content">
                  <h5>Actualmente</h5>
                  <span className="timeline-date">
                    07 de diciembre del 2023
                  </span>
                  <p>Sigo aprendiendo nuevas habilidades.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon education-icon">🎓</div>
                <div className="timeline-content">
                  <h5>Diplomatura en Desarrollo Web con NEXTJS</h5>
                  <span className="timeline-date">07 de agosto del 2023</span>
                  <p>Aprendí Next.js, Tailwind, bases de datos y TypeScript.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon education-icon">🎓</div>
                <div className="timeline-content">
                  <h5>Diplomatura en Desarrollo Web con JavaScript</h5>
                  <span className="timeline-date">27 de febrero del 2023</span>
                  <p>Aprendí HTML, CSS, JavaScript y bases de datos SQL.</p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* timeline-container */}
        </div>{" "}
        {/* professional-focus */}
      </div>{" "}
      {/* professional-focus-container */}
    </div>
  );
};

export default About;
