import React from 'react';
import { BsXLg } from "react-icons/bs";


import { Link } from 'react-router-dom';

const ModalLogin = ({ closeModal }) => {
    return (
        <>
            <div className="modal show d-block" tabIndex="-1" id="loginModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button onClick={closeModal} type="button" className="btn-close-v2 ms-auto "><BsXLg /></button>
                        <h1 className="fw-bold mb-2">Inicio de sesión</h1>
                        <p className="mb-4">Inicia sesión con tu cuenta <strong>Eclosión.</strong></p>
                        <form>
                            {/* Campo de entrada para el email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="fw-bold">Email</label>
                                <input type="email" className="form-control border border-secondary" id="email" name="email" required autoComplete="username" />
                            </div>
                            {/* Campo de entrada para la contraseña */}
                            <div className="mb-3">
                                <label htmlFor="password" className="fw-bold">Contraseña</label>
                                <input type="password" className="form-control border border-secondary" id="password" name="password" required autoComplete="current-password" />
                            </div>
                            {/* Botones para cancelar o iniciar sesión */}
                            <div className="d-flex gap-5">
                                <button type="button" className="btn btn-return fw-bold btn-extra btn-disguise" onClick={closeModal}>Cancelar</button>
                                <button type="submit" className="btn btn-secondary fw-bold">Iniciar sesión</button>
                            </div>
                            <p className="mt-4 text-center register-link">¿No tienes una cuenta? <Link to="/register">Registrate.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalLogin;