import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingRegister from "./loading-register";
import { Link } from 'react-router-dom';
import ModalLogin from '../ModalLogin/ModalLogin';
//import icon para eye y back
import { BsChevronLeft, BsEye, BsEyeSlash } from "react-icons/bs";

const Register = () => {
  // Función para alternar el estado del modal (abrir/cerrar)
  const [modalToggled, setmodalToggled] = useState(false);
  const handleModalToggleClick = () => setmodalToggled(!modalToggled);

  // const para cambiar estado de input de password entre type text y password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Definición de parametros para almacenarlo
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");

   // Funcion de comprobacion de la contraseña
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // error o succes dependiendo del comparacion de contraseña
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
   //cuando success sea true, cargar pantalla de carga
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(""); 
  const navigate = useNavigate();

  // Funcion de redireccion si inicia sesion correctamente
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError(true);
      setSuccess(false);
      setMensaje("Las contraseñas no coinciden.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nombre,
          age: edad,
          email,
          password,
          typeUser: "user",
          statusActive: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(true);
        setMensaje(data.message || "Ocurrió un error al registrar.");

  // si las contrasenas no son distintas, activar secuenca de pantalla de carga y texto de registro exitoso
      } else {
        setError(false);
        setSuccess(true);
        setMensaje("");
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 6000);
      }
    } catch (err) {
      setError(true);
      setMensaje("Error del servidor.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingRegister />;

  return (
    <div className="container-fluid register-dialog">
      <div className="register-content">
        {/* <BsChevronLeft /> esta etiqueta es un icono que se puede remplazar por cualquier cosa */}
        <Link to="/" className="boton-regresar"><BsChevronLeft /></Link>
        <h1 className="fw-bold mb-2 text-center">Registro</h1>
        <p className="mb-4 text-center">¡Crea tu cuenta y sé parte de <strong>Eclosión!</strong></p>
        <form onSubmit={handleSubmit}>

          {/*nombre*/}
          <div className="mb-3">
            <label htmlFor="nombre" className="fw-bold">Nombre</label>
            <input type="text" className="form-control border border-secondary" id="nombre" placeholder="Nombre y Apellido" required value={nombre} onChange={e => setNombre(e.target.value)} />
          </div>
          {/*email*/}
          <div className="mb-3">
            <label htmlFor="email" className="fw-bold">Email</label>
            <input type="email" className="form-control border border-secondary" id="email" placeholder="ejemplo@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          {/*edad*/}
          <div className="mb-3">
            <label htmlFor="edad" className="fw-bold">Edad</label>
            <input type="number" className="form-control border border-secondary" id="edad" placeholder="Ingresa tu edad" required value={edad} onChange={e => setEdad(e.target.value)} />
          </div>
          {/*contraseña*/}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
            <div className="position-relative">
              <input type={showPassword ? "text" : "password"} className="form-control border border-secondary" id="password" placeholder="Ingresa tu contraseña" required value={password} onChange={e => setPassword(e.target.value)} />
              <span className="input-eye" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <BsEye /> : <BsEyeSlash />}</span>
            </div>
          </div>
          {/*confirmar*/}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">Confirmar Contraseña</label>
            <div className="position-relative">
              <input type={showConfirm ? "text" : "password"} className="form-control border border-secondary" id="confirmPassword" placeholder="Confirmar contraseña" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <span className="input-eye" onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? <BsEye /> : <BsEyeSlash />}</span>
            </div>
          </div>
             {/*botones*/}
          <div className="d-flex gap-5">
            <Link to="/" className="btn btn-return fw-bold btn-disguise">Volver</Link>
            <button type="submit" className="btn btn-secondary fw-bold">Registrar</button>
          </div>
          {/*mensajes*/}
          {error && <div className="alert alert-danger mt-3">{mensaje}</div>}
          {success && <div className="alert alert-success mt-3">¡Registro exitoso!</div>}
          <p className="mt-4 text-center register-link">
            ¿Ya tienes una cuenta?
            <Link onClick={handleModalToggleClick} to="/register"> Inicia sesión.</Link>
          </p>
        </form>
      </div>
      {modalToggled && <ModalLogin closeModal={() => setmodalToggled(false)} />}
    </div>
  );
};

export default Register;