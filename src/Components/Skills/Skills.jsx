import "./Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills" id="skills">
      <h1>{t("skills.title")}</h1>

      <div className="skills-base">
        <div className="skills-box">
          <i className="fas fa-laptop-code"></i>
          <h3>{t("skills.frontend.title")}</h3>
          <p>{t("skills.frontend.description")}</p>
        </div>

        <div className="skills-box">
          <i className="fas fa-drafting-compass"></i>
          <h3>{t("skills.backend.title")}</h3>
          <p>{t("skills.backend.description")}</p>
        </div>

        <div className="skills-box">
          <i className="fab fa-react"></i>
          <h3>{t("skills.webapps.title")}</h3>
          <p>{t("skills.webapps.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
