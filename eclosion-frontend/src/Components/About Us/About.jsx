import './about-style.css';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/Pictures/React-Logo-v2.png';


function About() {
  return (
    <div>
      <div id='container-about-us'>
        <div className="about-intro-wrapper">
          <div className="item item-1">
            <h1 className="about-title">¿Quiénes somos?</h1>
          </div>
          <div className="item item-2">
            <img className="about-logo" src={reactLogo} alt="React Logo" />
          </div>
        </div>
      <div className="about-text-wrapper">
        <div className="item item-3">
          <p className="container-fluid parrafo-uno">
            En Eclosión, creemos en la innovación y el compromiso. Nos
            especializamos en el área de desarrollo web para ofrecer soluciones que
            marquen la diferencia. Con un equipo apasionado por la tecnología y visión estratégica,
            creamos experiencias que potencian a nuestros clientes y sus proyectos.
          </p>
        </div>
        <div className="item item-4">
          <p className="container-fluid parrafo-dos">
            Transformamos ideas en experiencias digitales a través del desarrollo de
            páginas web innovadoras y funcionales. Creemos en la creatividad, la
            tecnología y la colaboración para ofrecer soluciones que destacan. Este
            sitio existe porque queremos compartir nuestra pasión y mostrar al mundo
            quiénes somos, qué hacemos y cómo podemos ayudarte a materializar tus
            proyectos. Cada línea de código que escribimos refleja nuestra dedicación
            y compromiso con la excelencia digital.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;