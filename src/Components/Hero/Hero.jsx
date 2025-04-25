import "./Hero.css";
import foto from "../../assets/foto.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "MongoDB", icon: "fas fa-database", color: "#47A248" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [technologies.length]);

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

        {/* Sección de tecnologías debajo de los botones */}
        <div className="tech-stack-below">
          <div className="tech-icons">
            {technologies.map((tech, index) => (
              <i 
                key={tech.name}
                className={`${tech.icon} ${index === currentTech ? 'active' : ''}`}
                title={tech.name}
                style={{ color: index === currentTech ? tech.color : '' }}
              />
            ))}
          </div>
          <p className="tech-text">Tecnologías que domino</p>
        </div>
      </div>

      <div className="image-container">
        <img src={foto} alt="foto" />
        <div className="social-links">
          <a 
            href="http://www.linkedin.com/in/santiago-david-garcia-quintero-218b35361" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="tooltip"
            data-tooltip="Mi LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/S4nti4goCoder" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="tooltip"
            data-tooltip="Mi GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;