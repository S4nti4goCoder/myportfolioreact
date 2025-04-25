import "./Portfolio.css"
import plataforma from "../../assets/plataforma.png"
import portafolio from "../../assets/portafolio.png"
import comercio from "../../assets/comercio.png"
import api from "../../assets/api.png"

const portfolioItems = [
    {
        id: 1,
        image: plataforma, 
        title: "Plataforma",
        description: "Desarrollado con Reactjs, TailwindCss, NodeJS", 
        demoLink: "https://edukukgt.vercel.app"
    }, 
    {
        id: 2,
        image: portafolio, 
        title: "Portafolio",
        description: "Desarrollado con Html, CSS y Javascript.", 
        demoLink: "https://mi-portafolio-steel.vercel.app"
    }, 
    {
        id: 3,
        image: comercio, 
        title: "E-commerce",
        description: "Desarrollado con Reactjs y Css,", 
        demoLink: "https://multiservicios-kuk-1.vercel.app"
    }, 
    {
        id: 4,
        image: api, 
        title: "API-FALSO",
        description: "Desarrollado con Nodejs y Json Server, para simular una api", 
        demoLink: "https://api-ten-jet.vercel.app/products"
    }, 
    
]
 

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portafolio</h1>
        <div className="portfolio-container">
            {portfolioItems.map((item) => (
                <div className="portfolio-card" key={item.id}>
                    <img src={item.image} alt={item.title} className="portfolio-image" />
                    <div className="portfolio-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.demoLink} target="_blank" rel="noopener norererrer" className="demo-button">
                            Ver demo
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio