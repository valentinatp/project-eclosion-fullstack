import { Link } from 'react-router-dom';
import { useState } from "react";
import ModalLogin from '../Forms/ModalLogin/ModalLogin.jsx';
import logo from '../../assets/Pictures/React-Logo-v2.png';
import { animate } from 'animejs';

const Navbar = () => {
    // Estado para controlar la visibilidad del modal
    const [modalToggled, setmodalToggled] = useState(false);

    // Función para alternar el estado del modal (abrir/cerrar)
    function handleModalToggleClick() {
        setmodalToggled(!modalToggled);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className='navbar-logo-brand'>
                        <img src={logo} alt="React Logo" className='navbar-logo' />
                        <Link to="/" className="navbar-brand">Eclosión</Link>
                    </div>
                    <div className="d-flex">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-menu-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M3.75 5.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Zm0 6a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Zm0 6a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link disabled">¿Quiénes somos?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="feed" className="nav-link">Feed</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Perfil</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/register" className="dropdown-item">Registrar</Link>
                                    </li>
                                    <li>
                                        {/* Botón para abrir el modal de inicio de sesión */}
                                        <button className="dropdown-item" onClick={handleModalToggleClick}>Iniciar Sesion</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Renderiza el modal solo si modalToggled es true */}
            {modalToggled && (
                <div>
                    <ModalLogin closeModal={() => setmodalToggled(false)} />
                </div>
            )}
        </>
    );
};

export default Navbar;