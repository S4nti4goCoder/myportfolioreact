import "./ContactForm.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <div className="contact" id="contact">
      <h1>{t("contact.title")}</h1>
      <div className="contact-container">
        {/* Información de contacto */}
        <div className="contact-info">
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
        </div>

        {/* Formulario de contacto */}
        <div className="contact-form">
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
            <button type="submit">{t("contact.button")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
