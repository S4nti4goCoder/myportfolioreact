import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactForm = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // 👈 para animar siempre que navegues
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>{t("contact.title")}</motion.h1>

      <motion.div className="contact-container" variants={containerVariants}>
        {/* Información de contacto */}
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="info-content">
            <i className="fas fa-user-circle icon"></i>
            <h2>{t("contact.info_title")}</h2>
            <p>
              <i className="fas fa-envelope"></i>
              santiagoquintero.softdev.code@gmail.com
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +57 315-448-8668
            </p>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div className="contact-form" variants={itemVariants}>
          <h2>{t("contact.form_title")}</h2>
          <form action="https://formspree.io/f/meogoabz" method="POST">
            <input
              type="text"
              name="name"
              placeholder={t("contact.name_placeholder")}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t("contact.email_placeholder")}
              required
            />
            <textarea
              name="message"
              placeholder={t("contact.message_placeholder")}
              required
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("contact.button")}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
