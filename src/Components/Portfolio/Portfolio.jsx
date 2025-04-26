import "./Portfolio.css";
import ecommerce from "../../assets/ecommerce.png";
import pos from "../../assets/pos.png";
import marketplace from "../../assets/marketplace.png";
import gestor from "../../assets/gestor.png";

const portfolioItems = [
  {
    id: 1,
    image: ecommerce,
    title: "Ecommerce",
    description:
      "Proyecto de eCommerce en PHP con arquitectura modular (MVC) para gestionar productos, usuarios y pedidos. Incluye API REST para CRUD y panel de administración con AdminLTE 3.2.0. Enfoque en escalabilidad y organización del código.",
    demoLink: "https://github.com/S4nti4goCoder/ecommerce_php",
  },
  {
    id: 2,
    image: pos,
    title: "sistema de punto de venta(POS)",
    description:
      "Sistema POS en PHP (MVC) con multi-sucursal, roles, gestión de inventario, facturación (Colombia), reportes y caja diaria. Sistema práctico para desarrollo y comercialización.",
    demoLink: "https://github.com/S4nti4goCoder/pos_system",
  },
  {
    id: 3,
    image: marketplace,
    title: "Marketplace",
    description: "Marketplace en PHP8/MySQL: API RESTful, pasarelas de pago, registro de usuarios, interfaz conversiva y sistema multivendedor.",
    demoLink: "https://github.com/S4nti4goCoder/marketplace_php",
  },
  {
    id: 4,
    image: gestor,
    title: "Gestor de Archivos",
    description: "Sistema de documentos desarrollado en PHP/CodeIgniter 4/MySQL para creación, edición, organización y búsqueda avanzada de archivos, con arquitectura MVC escalable.",
    demoLink: "https://github.com/S4nti4goCoder/gestor-archivos",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portafolio</h1>
      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
            />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.demoLink}
                target="_blank"
                rel="noopener norererrer"
                className="demo-button"
              >
                Ver en GitHub <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
