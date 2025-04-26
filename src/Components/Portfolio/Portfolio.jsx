import "./Portfolio.css";
import { useTranslation } from "react-i18next";
import ecommerce from "../../assets/ecommerce.png";
import pos from "../../assets/pos.png";
import marketplace from "../../assets/marketplace.png";
import gestor from "../../assets/gestor.png";

const Portfolio = () => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      id: 1,
      image: ecommerce,
      title: t("portfolio.ecommerce.title"),
      description: t("portfolio.ecommerce.description"),
      demoLink: "https://github.com/S4nti4goCoder/ecommerce_php",
    },
    {
      id: 2,
      image: pos,
      title: t("portfolio.pos.title"),
      description: t("portfolio.pos.description"),
      demoLink: "https://github.com/S4nti4goCoder/pos_system",
    },
    {
      id: 3,
      image: marketplace,
      title: t("portfolio.marketplace.title"),
      description: t("portfolio.marketplace.description"),
      demoLink: "https://github.com/S4nti4goCoder/marketplace_php",
    },
    {
      id: 4,
      image: gestor,
      title: t("portfolio.filemanager.title"),
      description: t("portfolio.filemanager.description"),
      demoLink: "https://github.com/S4nti4goCoder/gestor-archivos",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>{t("portfolio.sectionTitle")}</h1>
      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
              loading="lazy"
            />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button"
              >
                {t("portfolio.viewGithub")} <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
