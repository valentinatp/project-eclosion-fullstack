import { Link } from 'react-router-dom';
import React from 'react';


const Myperfile = () => {
  return (
    <div className="row">
      <div className="col-4">
        <nav
          id="navbar-example3"
          className="h-100 flex-column align-items-stretch pe-4 border-end"
        >
          <nav className="nav nav-pills flex-column ">
            <h1 className="" href="#item-1">Mi Perfil</h1>


            <nav className="nav nav-pills flex-column ">
              <a className="nav-link ms-3 my-1 myperfile" href="#item-1-1">
                Datos usuario
              </a>
              <a className="nav-link ms-3 my-1" href="#item-1-2">
                Cambiar contraseña
              </a>
            </nav>


            <h1 className="" href="#item-2">
             Asociar otra cuenta
            </h1>
            <a className="nav-link" href="#item-3">
              Vincular cuenta
            </a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#item-3-1">
                Eliminar Cuenta
              </a>
              <a className="nav-link ms-3 my-1" href="#item-3-2">
                Invita a un amigo
              </a>
               <h1 className="" href="#item-2">
                   Notificaciones
                  </h1>
                  <a className="nav-link ms-3 my-1" href="#item-4-1">
                Configura Notificaciones
              </a>
              <h1 className="" href="#item-2">
                   Actividad
                  </h1>
                  <a className="nav-link ms-3 my-1" href="#item-4-2">
                Tu Reacciones
              </a>
                <a className="nav-link ms-3 my-1" href="#item-4-3">
                                Tu Publicaciones
                              </a>
                              <a className="nav-link ms-3 my-1" href="#item-4-3">
                                Tu Tiempo 
                              </a>

            </nav>
          </nav>
        </nav>
      </div>

      <div className="col-8">
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          className="scrollspy-example-2"
          tabIndex="0"
        >
          <div id="item-1">
            <h4>Datos de usuario</h4>
            

          </div>
          <div id="item-1-1">
            <p>Nombre y apellido:</p>
            <p>edad:</p>
          </div>
          <div id="item-1-2">
            <h5>Cambia de contraseña</h5>
            <p>ingresa tu actual contraseña:</p>
            <p>ingresa tu nueva contraseña:</p>
          </div>
          <div id="item-2">
            <h4>Vincular otra cuenta </h4>
          </div>

          <div id="item-3">
            <p>vincula con google -facebook - mac</p>
          </div>
          <div id="item-3-1">
            <h5>Desactivar cuenta</h5>
            <p>Desactive account</p>
          </div>
          <div id="item-3-2">
            <h5>Invita a un amigo</h5>
            <p>Link para compartir </p>
          </div>
         <div id="item-4-1">
            <h5>Notificaciones</h5>
            <p>Activar/desactivar </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Myperfile;