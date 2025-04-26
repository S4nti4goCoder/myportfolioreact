import "./Footer.css"

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
     <footer className="footer">
        <hr />
        <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
        </div>

        <p>Copyright {currentYear} © SANTIAGOCODER - Todos los derechos reservados.</p>
     </footer>
  )
}

export default Footer