import "./Hero.css"
import foto from "../../assets/foto.png"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="text-container">
        <span>Hola Soy,</span>
        <h1>Edgar Romero Cuc</h1>
        <p>Mi pasión por la programacion web y mi conjunto de habilidades en Javascript, CSS, Reactjs, mongoDB y Node.js me impulsan a crear soluciones web que sean atractivas, funcionales y efectivas.</p>
        <a href="https://wa.me/50245984577"
        target="_blank"
        className="btn"
        >Contáctame</a>
      </div>

      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={foto} alt="foto"/>
      </div>
    </div>
  )
}

export default Hero