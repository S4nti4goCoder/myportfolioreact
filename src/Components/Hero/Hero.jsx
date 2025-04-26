import "./Hero.css";
import foto from "../../assets/foto.png";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    { name: "HTML5", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#68A063" },
    { name: "React", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Angular", icon: "fab fa-angular", color: "#dd0031" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "PHP", icon: "fab fa-php", color: "#777BB4" },
    { name: "Laravel", icon: "fab fa-laravel", color: "#f53003" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "#06B6D4" },
    { name: "Figma", icon: "fab fa-figma", color: "#F24E1E" },
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
          Soy un apasionado del desarrollo Fontend y Backend con experiencia en{" "}
          <strong>Javascript</strong>, <strong>React.js</strong>, <strong>Angular.js</strong>, <strong>MySQL</strong>, <strong>PHP</strong>{" "}
          y <strong>Laravel</strong>. Me especializo en crear soluciones
          digitales modernas, rápidas y escalables, con enfoque en la
          experiencia del usuario y la calidad del código.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/573154488668"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            ¡Hablemos!
            <FaWhatsapp style={{ marginLeft: "8px", fontSize: "1.5rem", color: "#fff" }} />
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
              data-tooltip="Descargar CV"
            >
              <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
        <div className="tech-stack-below">
          <div className="tech-icons">
            {technologies.map((tech, index) => (
              <i
                key={tech.name}
                className={`${tech.icon} ${
                  index === currentTech ? "active" : ""
                }`}
                title={tech.name}
                style={{ color: index === currentTech ? tech.color : "" }}
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
