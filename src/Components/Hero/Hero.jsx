import "./Hero.css";
import foto from "../../assets/foto.png";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
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
        <h1>
          <span>{t("hero.greeting")}</span> {t("hero.intro")}
        </h1>

        <p className="location">
          <i className="fas fa-map-marker-alt"></i> {t("hero.location")}
        </p>
        <h3 className={`typing ${i18n.language === "en" ? "typing-en" : "typing-es"}`}>
          {t("hero.profession")}
        </h3>

        <p>{t("hero.description")}</p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/573154488668"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {t("hero.cta")}
            <FaWhatsapp
              style={{ marginLeft: "8px", fontSize: "1.5rem", color: "#fff" }}
            />
          </a>

          <div className="btn-split-wrapper">
            <a
              href="/cv_santiago.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-left"
            >
              {t("hero.cv_view")}
            </a>
            <a
              href="/cv_santiago.pdf"
              download
              className="btn-right tooltip"
              data-tooltip={t("hero.cv_download")}
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
                className={`${tech.icon} ${index === currentTech ? "active" : ""}`}
                title={tech.name}
                style={{ color: index === currentTech ? tech.color : "" }}
              />
            ))}
          </div>
          <p className="tech-text">{t("hero.tech_label")}</p>
        </div>
      </div>

      <div className="image-container">
        <img src={foto} alt="Foto de Santiago Quintero" />
        <div className="social-links">
          <a
            href="http://www.linkedin.com/in/santiago-david-garcia-quintero-218b35361"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="tooltip"
            data-tooltip="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/S4nti4goCoder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="tooltip"
            data-tooltip="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
