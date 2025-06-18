import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingRegister from "./loading-register";
import { Link } from 'react-router-dom';
import ModalLogin from '../ModalLogin/ModalLogin'
//import icon para eye y back
import { BsChevronLeft } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";






const Register = () => {

  const [modalToggled, setmodalToggled] = useState(false);

  // Función para alternar el estado del modal (abrir/cerrar)
  function handleModalToggleClick() {
    setmodalToggled(!modalToggled);
  }

  // const para cambiar estado de input de password entre type text y password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Funcion de comprobacion de la contraseña
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // error o succes dependiendo del comparacion de contraseña
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  //cuando success sea true, cargar pantalla de carga

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Funcion de redireccion si inicia sesion correctamente
  const handleSubmit = (e) => {
    e.preventDefault();
    // if para consultar primero si las contrasenas son distintas
    if (password !== confirmPassword) {
      setError(true);
      setSuccess(false);
    }
    // si las contrasenas no son distintas, activar secuenca de pantalla de carga y texto de registro exitoso
    else {
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
      <div className="container-fluid register-dialog" >
        <div className="register-content">

          {/* <BsChevronLeft /> esta etiqueta es un icono que se puede remplazar por cualquier cosa */}
          <Link to="/" className="boton-regresar"><BsChevronLeft /></Link>
          <h1 className=" fw-bold mb-2 text-center">Registro</h1>
          <p className="mb-4 text-center">¡Crea tu cuenta y sé parte de <strong>Eclosión!</strong></p>
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
              <div className="position-relative">

                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control border border-secondary"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />

                <span className="input-eye" onClick={() => setShowPassword(!showPassword)} >


                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </span>

              </div>
            </div>



            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label fw-bold">Confirmar Contraseña</label>
              <div className="position-relative">

                <input
                  type={showConfirm ? "text" : "password"}
                  className="form-control border border-secondary"
                  id="confirmPassword"
                  placeholder="Confirmar contraseña"
                  required
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
                <span className="input-eye" onClick={() => setShowConfirm(!showConfirm)} style={{ cursor: "pointer" }} >
                  {showConfirm ? <BsEye className="prueba-2" /> : <BsEyeSlash className="prueba-2" />}
                </span>
              </div>
            </div>


            {/*nuevo formato para react*/}


            <div className="d-flex gap-5">

              <Link to="/" className="btn btn-return fw-bold btn-disguise">Volver</Link>
              <button type="submit" className="btn btn-secondary fw-bold">Registrar</button>
            </div>
            {error && (
              <div className="alert alert-danger" role="alert" id="passwordError">
                Las contraseñas no coinciden.
              </div>
            )}
            {success && (
              <div className="alert alert-success " role="alert" id="registroExitoso">
                ¡Se registró correctamente!
              </div>
            )}



            <p className="mt-4 text-center register-link">
              ¿Ya tienes una cuenta?
              <Link onClick={handleModalToggleClick} to="/register"> Inicia sesión.</Link>
            </p>
          </form>
        </div>
      </div>
      {modalToggled && (
        <div>
          <ModalLogin closeModal={() => setmodalToggled(false)} />
        </div>
      )}
    </>
  );
}

export default Register;