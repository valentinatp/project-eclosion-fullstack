import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register-style.css'
import LoadingRegister from "./loading-register";
import imagenesRegister from "../../../assets/imagenes-register";
import { Link } from 'react-router-dom';

{/* Funcion de comprobacion de la contraseña */}
function Register() {
            const [showPassword, setShowPassword] = useState(false);
            const [showConfirm, setShowConfirm] = useState(false);
            const [password, setPassword] = useState("");
            const [confirmPassword, setConfirmPassword] = useState("");
            const [error, setError] = useState(false);
            const [success, setSuccess] = useState(false);
            const [loading, setLoading] = useState(false);
            const navigate = useNavigate();
{/* Funcion de redireccion si inicia sesion correctamente */}
            const handleSubmit = (e) => {
              e.preventDefault();
              if (password !== confirmPassword) {
                setError(true);
                setSuccess(false);
              } else {
                     setError(false);
                      setSuccess(true);
                      setTimeout(() => {
                        setLoading(true);
                        setSuccess(false);
                        setTimeout(() => {
                          setLoading(false);
                          setPassword("");
                          setConfirmPassword("");
                          navigate("/");
        }, 6000); // tiempo que se muestra LoadingRegister
      }, 2000); // tiempo que se muestra el mensaje de éxito
    }
  };

            
            if (loading) return <LoadingRegister />;

  return (
    <>
      <div Classname="full-page-register">
      <a href="/" className="boton-regresar">
        <img src={imagenesRegister.img1}  alt="Volver" /> 
      </a>
      <div className="container mt-5 registro-container">
        <h1 className="text-start fs-2 fw-bold registro-titulo">Registro</h1>
        <div className="row justify-content-center">
          <p className="text-start fs-6 registro-descripcion">
            <span className="fw-bold">Regístrate</span> ingresando los siguientes datos
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
            <input
              type="text"
              className="form-control border border-secondary border-2 input-size"
              id="nombre"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control border border-secondary border-2 input-size"
              id="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label fw-bold ">Edad</label>
            <input
              type="number"
              className="form-control border border-secondary border-2 input-size"
              id="edad"
              placeholder="Ingresa tu edad"
              required
            />
          </div>


           {/*nuevo formato para react*/}
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fw-bold ">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control border border-secondary border-2 imput-password input-size"
              id="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="input-eye" onClick={() => setShowPassword(!showPassword)}style={{ cursor: "pointer" }}>
              <img src={showPassword ? imagenesRegister.img3 : imagenesRegister.img2} id="icon-password" alt="Ver contraseña" />
            </span>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="confirmPassword" className="form-label fw-bold">Confirmar Contraseña</label>
            <input
              type={showConfirm ? "text" : "password"}
              className="form-control border border-secondary border-2 imput-password input-size"
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <span className="input-eye" onClick={() => setShowConfirm(!showConfirm)} style={{ cursor: "pointer" }} >
              <img src={showConfirm ? imagenesRegister.img3 : imagenesRegister.img2} alt="icono ojo cerrado" id="icon-confirmPassword" />  
            </span>
          </div>


         {/*nuevo formato para react*/}

          {error && (
          <div className="form-text text-danger " id="passwordError">
            Las contraseñas no coinciden.
          </div>
           )}
          <div className="botones-registro">
            <a href="/" className="btn boton-volver">Volver</a>
            <button type="submit" className="btn boton-registrar">Registrar</button>
          </div>
         
          {success && (
          <div id="registroExitoso" className="alert alert-success " role="alert">
            ¡Se registró correctamente!
          </div>
          )}


          <div className="text-center mt-3 centrado-span">
            <span className="">
              ¿Ya tienes una cuenta?
              <a href="/login" className="boton-iniciar-sesion">Inicia sesión</a>
            </span>
          </div>
        </form>
      </div>
    </div>
     
    </>
  );
}

export default Register;