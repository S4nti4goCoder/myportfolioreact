import "./ContactForm.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meogoabz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        // Opcional: recargar la página después de 5 segundos
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("Hubo un error al enviar tu mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      alert("Hubo un error de conexión. Intenta más tarde.");
    }
  };

  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
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
          {!submitted ? (
            <>
              <h2>{t("contact.form_title")}</h2>
              <form onSubmit={handleSubmit}>
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
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message"
            >
              <FaCheckCircle className="success-icon" />
              <span>¡Tu mensaje fue enviado exitosamente!</span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
