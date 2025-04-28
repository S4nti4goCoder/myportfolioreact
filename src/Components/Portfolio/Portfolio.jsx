import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Portfolio.css";

import ecommerce1 from "../../assets/ecommerce.webp";
import ecommerce2 from "../../assets/ecommerce.webp";
import pos1 from "../../assets/pos.webp";
import pos2 from "../../assets/pos.webp";
import marketplace1 from "../../assets/marketplace.webp";
import marketplace2 from "../../assets/marketplace.webp";
import gestor1 from "../../assets/gestor.webp";
import gestor2 from "../../assets/gestor.webp";

const Portfolio = () => {
  const { t } = useTranslation();
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      images: [ecommerce1, ecommerce2],
      title: t("portfolio.ecommerce.title"),
      description: t("portfolio.ecommerce.description"),
      demoLink: "https://github.com/S4nti4goCoder/ecommerce_php",
    },
    {
      id: 2,
      images: [pos1, pos2],
      title: t("portfolio.pos.title"),
      description: t("portfolio.pos.description"),
      demoLink: "https://github.com/S4nti4goCoder/pos_system",
    },
    {
      id: 3,
      images: [marketplace1, marketplace2],
      title: t("portfolio.marketplace.title"),
      description: t("portfolio.marketplace.description"),
      demoLink: "https://github.com/S4nti4goCoder/marketplace_php",
    },
    {
      id: 4,
      images: [gestor1, gestor2],
      title: t("portfolio.filemanager.title"),
      description: t("portfolio.filemanager.description"),
      demoLink: "https://github.com/S4nti4goCoder/gestor-archivos",
    },
  ];

  const handleOpenLightbox = (images) => {
    const slides = images.map((img) => ({ src: img }));
    setCurrentImages(slides);
    setCurrentIndex(0);
    setOpenLightbox(true);
  };

  return (
    <motion.section
      className="portfolio"
      id="portfolio"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("portfolio.sectionTitle")}
      </motion.h1>

      <motion.div className="portfolio-container">
        {portfolioItems.map((item) => (
          <motion.div
            className="portfolio-card"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="portfolio-image-container">
              <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="portfolio-swiper"
              >
                {item.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="portfolio-image"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Botón ojito 👁️ en el centro */}
              <button
                className="view-button"
                onClick={() => handleOpenLightbox(item.images)}
                aria-label="Ver imágenes en grande"
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>

            {/* Contenido del proyecto */}
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
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {openLightbox && (
        <Lightbox
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={currentImages}
          index={currentIndex}
        />
      )}
    </motion.section>
  );
};

export default Portfolio;
