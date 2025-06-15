import React, { useState } from "react";
import { Link } from "react-router-dom";
import profiles from "./profiles"; // ajusta esta ruta si es diferente
import "./myperfile.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";


const Myperfile = () => {
 
   const user = profiles[0];
   const [showPassword, setShowPassword] = useState(false);
   const [showNewPassword, setShowNewPassword] = useState(false);

   const togglePassword = () => setShowPassword(!showPassword);
   const toggleNewPassword = () => setShowNewPassword(!showNewPassword);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Menú lateral */}
        <div className="col-md-4">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <span className="nav-heading" style={{fontSize: '32px'}}>Mi Perfil</span>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" style={{ color: '#093246', fontSize: '20px' }} href="#datos-usuario">Datos usuario</a>
              <a className="nav-link ms-3 my-1" style={{ color: '#093246', fontSize: '20px' }} href="#cambiar-pass">Cambiar contraseña</a>
              <a className="nav-link ms-3 my-1" style={{ color: '#093246', fontSize: '20px' }}href="#eliminar-cuenta">Eliminar cuenta</a>
              <a className="nav-link ms-3 my-1" style={{ color: '#093246', fontSize: '20px' }}href="#actividad">Actividad</a>
            </nav>
          </nav>
              
        </div>

        {/* Contenido del perfil */}
        <div className="col-md-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-smooth-scroll="true"
            className="scrollspy-example-2"
            tabIndex="0"
          >
            <div id="datos-usuario" className="mb-5">
              <h4>Datos de Usuario</h4>
              <div className="text-center mb-4">
                <img
                  src={user.img_user}
                  className="rounded-circle"
                  alt="Avatar"
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <div>
                  <button className="btn btn-secondary">
                    Cambiar Foto
                  </button>
                </div>
              </div>
              <form>
                <div className="mb-3 imput-perfils ">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.user}
                    readOnly
                  />
                </div>
                <div className="mb-3 imput-perfils">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={user.mail_user}
                    readOnly
                  />
                </div>
              </form>
            </div>

            <div id="cambiar-pass" className="mb-5 imput-perfils">
              <h4>Cambiar Contraseña</h4>
              <form>
                <div className="mb-3 position-relative">
                  <label>Contraseña actual</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control imput-perfils"
                  />
                  <span
                    onClick={togglePassword}
                    style={{ position: "absolute", top: "38px", right: "10px", cursor: "pointer" }}
                  >
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </span>
                </div>
                <div className="mb-3 position-relative">
                  <label>Nueva contraseña</label>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="form-control"
                  />
                  <span
                    onClick={toggleNewPassword}
                    style={{ position: "absolute", top: "38px", right: "10px", cursor: "pointer" }}
                  >
                    {showNewPassword ? <BsEyeSlash /> : <BsEye />}
                  </span>
                </div>
                <button className="btn btn-secondary">Actualizar</button>
              </form>
            </div>

            <div id="eliminar-cuenta" className="mb-5">
              <h4>Eliminar Cuenta</h4>
              <button className="btn btn-secondary">
                Desactivar
              </button>
            </div>

            <div id="actividad" className="mb-5">
              <h4>Actividad</h4>
              <ul>
                <li>Publicaciones recientes</li>
                <li>Comentarios</li>
                <li>Tiempo en la plataforma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myperfile;