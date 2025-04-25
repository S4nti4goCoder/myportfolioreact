import "./Hero.css";
import foto from "../../assets/foto.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola Soy,</span>
        <h1>Santiago Quintero</h1>
        <h3 className="typing">Desarrollador Fullstack</h3>
        <p>
          Soy un apasionado del desarrollo web con experiencia en{" "}
          <strong>React</strong>, <strong>Node.js</strong>, <strong>PHP</strong>{" "}
          y <strong>MongoDB</strong>. Me especializo en crear soluciones
          digitales modernas, rápidas y escalables, con enfoque en la
          experiencia del usuario y la calidad del código.
        </p>
        <div className="hero-buttons">
          <a
            href="https://wa.me/50245984577"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            ¡Hablemos!
          </a>

          <div className="btn-split-wrapper">
            <a
              href="/cv_santiago.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-left"
            >
              Ver Curriculum
            </a>
            <a
              href="/cv_santiago.pdf"
              download
              className="btn-right tooltip"
              title="Descargar CV"
            >
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={foto} alt="foto" />
      </div>
    </div>
  );
};

export default Hero;
