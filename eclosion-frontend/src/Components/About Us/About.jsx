import './about-style.css';
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/Pictures/React-Logo-v2.png';


function About() {
  return (
    <div>
      <div id='container-about-us'>
        <div className="about-us-intro">
          <h1 className="sobre-nosotros item item-1">Sobre Nosotros</h1>
          <p className="container-fluid about-main-text item item-2">
            ¡Te invitamos a conocer más sobre nuestro proyecto Eclosión!
          </p>
        </div>
        <div className="about-intro-wrapper">
          <div className="item item-3">
            <h1 className="quienes-somos">¿Quiénes somos?</h1>
          </div>
          <div className="item item-4">
            <img className="about-logo" src={reactLogo} alt="React Logo" />
          </div>
        </div>
        <div className="quienes-text-wrapper">
          <div className="item item-5">
            <p className="container-fluid parrafo-about">
              Eclosión es el proyecto final que desarrollamos un grupo de estudiantes como equipo durante
              el bootcamp de Desarrollador Fullstack en JavaScript de Generation.</p>
            <br></br>
            <p className="container-fluid parrafo-about">
              Más que el cierre de una etapa formativa, este proyecto marca el comienzo de
              nuestro camino profesional como desarrolladores.
              Nos une la pasión por la tecnología, el aprendizaje constante y el compromiso
              de crear soluciones digitales funcionales, útiles y con propósito.
            </p>
          </div>
        
          <div className="goal-text-wrapper"></div>
            <h1 className="about-title">Nuestra Meta</h1>
            <div className="item item-6">
              <p className="container-fluid parrafo-about">
                ¿Sabías que el 70% de Chile es mar? Es el mismo porcentaje de oxígeno que aportan los océanos a nuestro planeta. 
                Sin embargo, cada año se vierten millones de toneladas de plástico en ellos, amenazando gravemente su equilibrio.
              </p>
              <br></br>
              <p className="container-fluid parrafo-about">
                En este contexto, nace Eclosión, una plataforma interactiva que busca informar, concientizar y movilizar.
                Los usuarios no solo pueden acceder a noticias actualizadas sobre la vida submarina,
                sino también participar activamente en una comunidad comprometida con el cuidado del océano.
              </p>
              <br></br>
              <p className="container-fluid parrafo-about">
                Nuestra meta es crear una experiencia digital significativa,
                que una la tecnología con la conciencia ambiental. A través del desarrollo web, queremos transformar la información en acción, usando la creatividad, la innovación y el compromiso como herramientas para generar un impacto real.
              </p>
          <div className="team-text-wrapper"></div>
            <h1 className="about-title">Nuestro Equipo</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;