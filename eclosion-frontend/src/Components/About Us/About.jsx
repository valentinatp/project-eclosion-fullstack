import './about-style.css';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/Pictures/React-Logo-v2.png';
import imageOne from '../../assets/Pictures/estebanm-eclosion.png'
import imageTwo from '../../assets/Pictures/valet-eclosion.png'
import imageThree from '../../assets/Pictures/triniv-eclosion.png'
import imageFour from '../../assets/Pictures/sebastiang-eclosion.png'

function About() {
  return (
    <div id="container-about-us" className="container">
      {/* Introducción */}
      <div className="row text-center mb-4 about-intro">
        <div className="col-12">
          <h1 className="sobre-nosotros">Sobre Nosotros</h1>
        </div>
        <div className="col-12">
          <p className="about-main-text">
            ¡Te invitamos a conocer más sobre nuestro proyecto Eclosión!
          </p>
        </div>
      </div>

      {/* ¿Quiénes somos? */}
      <div className="row align-items-center about-intro-wrapper">
        <div className="col-md-6 text-center">
          <h2 className="quienes-somos">¿Quiénes somos?</h2>
        </div>
        <div className="col-md-6 text-center">
          <img className="about-logo img-fluid" src={reactLogo} alt="React Logo" />
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-md-10">
          <p className="parrafo-about">
            Eclosión es el proyecto final que desarrollamos un grupo de estudiantes como equipo durante
            el bootcamp de Desarrollador Fullstack en JavaScript de Generation.
          </p>
          <br />
          <p className="parrafo-about">
            Más que el cierre de una etapa formativa, este proyecto marca el comienzo de
            nuestro camino profesional como desarrolladores. Nos une la pasión por la tecnología,
            el aprendizaje constante y el compromiso de crear soluciones digitales funcionales,
            útiles y con propósito.
          </p>
        </div>
      </div>

      {/* Nuestra Meta */}
      <div className="row">
        <div className="col-12">
          <h2 className="about-title">Nuestra Meta</h2>
        </div>
        <div className="col-md-10 offset-md-1">
          <p className="parrafo-about">
            ¿Sabías que el 70% de Chile es mar? Es el mismo porcentaje de oxígeno que aportan los océanos a nuestro planeta.
            Sin embargo, cada año se vierten millones de toneladas de plástico en ellos, amenazando gravemente su equilibrio.
          </p>
          <br />
          <p className="parrafo-about">
            En este contexto, nace Eclosión, una plataforma interactiva que busca informar, concientizar y movilizar.
            Los usuarios no solo pueden acceder a noticias actualizadas sobre la vida submarina,
            sino también participar activamente en una comunidad comprometida con el cuidado del océano.
          </p>
          <br />
          <p className="parrafo-about">
            Nuestra meta es crear una experiencia digital significativa, que una la tecnología con la conciencia ambiental.
            A través del desarrollo web, queremos transformar la información en acción, usando la creatividad, la innovación
            y el compromiso como herramientas para generar un impacto real.
          </p>
        </div>
      </div>

      {/* Nuestro Equipo */}
      <div className="row">
        <div className="col-12">
          <h2 className="about-title">Nuestro Equipo</h2>
          <div className="row justify-content-center picture-members">
            <div className="col-12 col-md-3 members text-center">
              <img src={imageOne} alt="esteban madrid" className="img-fluid"/>
              <div className="member-name">Esteban Madrid</div>
            </div>
            <div className="col-12 col-md-3 members text-center">
              <img src={imageTwo} alt="valentina toledo" className="img-fluid"/>
              <div className="member-name">Valentina Toledo</div>
            </div>
            <div className="col-12 col-md-3 members text-center">
              <img src={imageThree} alt="trinidad valenzuela" className="img-fluid"/>
              <div className="member-name">Trinidad Valenzuela</div>
            </div>
            <div className="col-12 col-md-3 members text-center">
              <img src={imageFour} alt="sebastian guerra" className="img-fluid"/>
              <div className="member-name">Sebastián Guerra</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
