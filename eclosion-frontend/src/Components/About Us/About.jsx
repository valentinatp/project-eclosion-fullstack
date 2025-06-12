import './about-style.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <section>
      <div className="container">
        <h1 className="about-title">¿Quiénes somos?</h1>
        <p>
          En Pulso Ecomarinos, creemos en la innovación y el compromiso. Nos
          especializamos en el área de desarrollo web para ofrecer soluciones que
          marcan la diferencia. Con un equipo apasionado y visión estratégica,
          creamos experiencias que potencian a nuestros clientes y sus proyectos.
        </p>
        <p>
          Transformamos ideas en experiencias digitales a través del desarrollo de
          páginas web innovadoras y funcionales. Creemos en la creatividad, la
          tecnología y la colaboración para ofrecer soluciones que destacan. Este
          sitio existe porque queremos compartir nuestra pasión y mostrar al mundo
          quiénes somos, qué hacemos y cómo podemos ayudarte a materializar tus
          proyectos. Cada línea de código que escribimos refleja nuestra dedicación
          y compromiso con la excelencia digital.
        </p>
        <div className="container-members">
          <h2>Miembros del equipo</h2>
          <div className="list-members">
            <div className="members">
              
              <p>Esteban Madrid</p>
            </div>
            <div className="members">
            
              <p>Ruben Valdebenito</p>
            </div>
            <div className="members">
              <p>Sebastián Guerra</p>
            </div>
            <div className="members">
            
              <p>Trinidad Valenzuela</p>
            </div>
            <div className="members">
              
              <p>Valentina Toledo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;