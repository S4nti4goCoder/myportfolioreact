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
                        ejemplo@gmail.com
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>
                        +1 (285) 1234567
                    </p>
                   </div>
                </div>

                <div className="contact-form">
                    <h2>Envía tu Mensaje</h2>
                    <form action="https://formspree.io/f/mdkezlbv" method="POST">
                        <input type="text" name="name" placeholder="Nombres" required />
                        <input type="email" name="email" placeholder="Correo Electronico" required />
                        <textarea name="message"  placeholder="Mensajer" required></textarea>
                        <button type="submit">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactForm

