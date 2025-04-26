import "./ContactForm.css"

const ContactForm = () => {
  return (
        <div className="contact" id="contact">
            <h1>Contacto</h1>
            <div className="contact-container">
                <div className="contact-info">
                   <div className="info-content">
                   <i className="fas fa-usercircle icon"></i>
                    <h2>INFORMACIÓN DE CONTACTO</h2>
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

                <div className="contact-form">
                    <h2>Envía tu Mensaje</h2>
                    <form action="https://formspree.io/f/meogoabz" method="POST">
                        <input type="text" name="name" placeholder="Nombres" required />
                        <input type="email" name="email" placeholder="Correo Electronico" required />
                        <textarea name="message"  placeholder="Mensaje" required></textarea>
                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactForm

