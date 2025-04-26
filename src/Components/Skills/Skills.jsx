import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Mis Habilidades</h1>
      <div className="skills-base">
        <div className="skills-box">
          <i className="fas fa-laptop-code"></i>
          <h3>Frontend</h3>
          <p>
            Me especializo en desarrollo Frontend para crear sitios modernos y
            funcionales utilizando tecnologías como HTML, CSS, JavaScript,
            React, Angular y Laravel. Siempre me enfoco en ofrecer soluciones optimizadas
            y escalables.
          </p>
        </div>
        <div className="skills-box">
          <i className="fas fa-drafting-compass"></i>
          <h3>Backend</h3>
          <p>
            Desarrollo de aplicaciones backend utilizando Node.js,
            asegurando una integración fluida con bases de datos y APIs para
            ofrecer un rendimiento óptimo y una experiencia de usuario
            excepcional.
          </p>
        </div>
        <div className="skills-box">
          <i className="fab fa-react"></i>
          <h3>Aplicaciones Web</h3>
          <p>
            Desarrollo aplicaciones web personalizadas con ReactJS, enfocándome
            en crear experiencias de usuario dinámicas, rápidas y responsivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
