import "./About.css";
import codingGif from "../../assets/coding.gif";
import {
  FaAward,
  FaProjectDiagram,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

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
            <span>{t("about.overlayText")}</span>
          </div>
        </div>

        {/* SOBRE MI */}
        <div className="about-infos">
          <h2>
            {t("about.title1")} <span className="highlight">{t("about.title2")}</span>
          </h2>
          <p className="description">{t("about.description")}</p>

          <section className="experience-section">
            <div className="experience-card">
              <FaAward className="experience-icon" />
              <span className="experience-number">10+</span>
              <p className="experience-text">{t("about.experience.publicRepos")}</p>
            </div>

            <div className="experience-card">
              <FaProjectDiagram className="experience-icon" />
              <span className="experience-number">5+</span>
              <p className="experience-text">{t("about.experience.featuredProjects")}</p>
            </div>

            <div className="experience-card">
              <FaUsers className="experience-icon" />
              <span className="experience-number">1+</span>
              <p className="experience-text">{t("about.experience.yearsExperience")}</p>
            </div>
          </section>
        </div>
      </div>

      {/* Fila 2: Bloques de enfoque */}
      <div className="professional-focus-container">
        {/* Primer bloque */}
        <div className="professional-focus">
          <h3>{t("about.focus.title1")}</h3>
          <ul aria-labelledby="enfoque1" className="focus-list">
            {t("about.focus.list1", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Segundo bloque: Educación + Experiencia */}
        <div className="professional-focus">
          <h3>{t("about.timeline.title")}</h3>

          <div className="timeline-container">
            {/* Experiencia */}
            <div className="timeline-section">
              <h4 className="section-title">{t("about.timeline.experience.title")}</h4>

              {t("about.timeline.experience.items", { returnObjects: true }).map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-icon experience-icon">🏢</div>
                  <div className="timeline-content">
                    <h5>{exp.title}</h5>
                    <span className="timeline-date">{exp.date}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Educación */}
            <div className="timeline-section">
              <h4 className="section-title">{t("about.timeline.education.title")}</h4>

              {t("about.timeline.education.items", { returnObjects: true }).map((edu, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-icon education-icon">🎓</div>
                  <div className="timeline-content">
                    <h5>{edu.title}</h5>
                    <span className="timeline-date">{edu.date}</span>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> {/* timeline-container */}
        </div> {/* professional-focus */}
      </div> {/* professional-focus-container */}
    </div>
  );
};

export default About;
