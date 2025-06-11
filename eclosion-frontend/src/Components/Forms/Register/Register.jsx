import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register-style.css'
import LoadingRegister from "./loading-register";
import imagenesRegister from "../../../assets/imagenes-register";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';




const Register = () => {
  {/* Funcion de comprobacion de la contraseña */ }
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  {/* Funcion de redireccion si inicia sesion correctamente */ }

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
      <div className="container register-dialog" >
        <div className="register-content">
          <Link to="/" className="boton-regresar"><BsChevronLeft /></Link>
          <h1 className=" fw-bold mb-2">Registro</h1>
          <p className="mb-4"><strong>Regístrate</strong> ingresando los siguientes datos</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="fw-bold">Nombre</label>
              <input type="text" className="form-control border border-secondary" id="nombre" placeholder="Nombre y Apellido" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="fw-bold">Email</label>
              <input type="email" className="form-control border border-secondary" id="email" placeholder="ejemplo@email.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="edad" className="fw-bold ">Edad</label>
              <input type="number" className="form-control border border-secondary" id="edad" placeholder="Ingresa tu edad" required />
            </div>


            {/*nuevo formato para react*/}
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold ">Contraseña</label>
              <div className="input-group input-group-password">
                <span className="input-eye" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                  <img src={showPassword ? imagenesRegister.img3 : imagenesRegister.img2} id="icon-password" alt="Ver contraseña" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control border border-secondary border-2 imput-password input-size"
                  id="password"
                  placeholder="Contraseña"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

              </div>
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


            <div className="botones-registro">
              <a href="/" className="btn boton-volver">Volver</a>
              <button type="submit" className="btn boton-registrar">Registrar</button>
            </div>
            {error && (
              <div className="form-text text-danger " id="passwordError">
                Las contraseñas no coinciden.
              </div>
            )}
            {success && (
              <div id="registroExitoso" className="alert alert-success " role="alert">
                ¡Se registró correctamente!
              </div>
            )}



            <p className="text-center mt-3 centrado-span">
              ¿Ya tienes una cuenta?
              <a href="/login" className="boton-iniciar-sesion">Inicia sesión</a>
            </p>
          </form>
        </div>
      </div>

    </>
  );
}

export default Register;