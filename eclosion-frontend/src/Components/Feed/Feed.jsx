
import { useState } from 'react';
import './feed-style.css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa"; //corazon
import { FaHeart } from "react-icons/fa"; //corazon lleno
import { FaRegComments } from "react-icons/fa"; //comentarios
import { FaComments } from "react-icons/fa6"; //comentario relleno
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";



function Feed() {
    const [show, setShow] = useState(false);
    const [liked, setLiked] = useState([false, false]);
    const [commented, setCommented] = useState([false, false]);
    const [activeIndex, setActiveIndex] = useState(null);

    // Funciones para abrir y cerrar el modal
    const handleShow = () => setShow(true);
    

    // Estado para manejar los "me gusta" en las tarjetas

    const handleLike = (index) => {
        setLiked((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
        };

   // Estado para manejar los "comentarios" en las tarjetas
        const handleComment = (index) => {
        setCommented((prev) => {
        const updated = [...prev];
        updated[index] = !updated[index];
        return updated;
        });
         setActiveIndex(index);
         setShow(true);
                };
    
     const handleClose = () => {
            setShow(false);
            setActiveIndex(null);
            };

    return (
        <>
            {/* Contenido de pagina */}
            <br />
            
            <div className="container-fluid">
                <h1 className="text-center">Noticias compartidas</h1>
                <br />
                <section>
                    <div className="row">
                        <div className="col">
                            {/*card 1*/}
                            <div className="card mb-4 card-feed">
                                {/*Perfil usuario*/}
                                <nav className="navbar-feed bg-body-tertiary-perfil">
                                    <div className="container-fluid">
                                        <a className="navbar-brand d-flex align-items-center">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2024/04/cropped-LogoCBpng.png"
                                                alt="Logo"
                                                style={{ height: 40, width: 40, objectFit: "cover" }}
                                                className="d-inline-block align-text-top me-2"
                                            />
                                            <span style={{ color: "#284D5D" }}>
                                                Científicos de la Basura
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                <img
                                    src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2025/02/Image-3-768x509.jpg"
                                    className="card-img-top"
                                    alt="De donde vienen las botellas encontradas?"
                                />
                                <div className="card-body-feed">
                                    <h5 className="card-title">
                                        ¿De dónde vienen las botellas plásticas encontradas en las
                                        playas del océano Pacífico?
                                    </h5>
                                    <br />
                                    <p>18/04/2025</p>
                                    <p className="card-text">
                                        El 59% de las botellas recolectadas tienen origen local, lo que
                                        subraya la urgencia de reducir plásticos desechables y fomentar
                                        el uso de envases retornables estandarizados o de vidrio
                                        reutilizables...{" "}
                                        <a href="https://cientificosdelabasura.ucn.cl/de-donde-vienen-las-botellas-plasticas-encontradas-en-las-playas-del-oceano-pacifico-y-en-ciudades-latinoamericanas/">
                                            Seguir leyendo
                                        </a>
                                    </p>
                                    {/* Botones de interacción */}
                                    <div className="btn-group-feed">
                                        <button
                                            type="button"
                                            className={`btn btn-outline-danger ${liked[0] ? "": ""}`}
                                            onClick={() => handleLike(0)}>

                                            {liked[0] ? (<FaHeart color="red" size={20} />) : (<FaRegHeart color="red" size={20} />)}
                                        </button>

                                        <button
                                           type="button"
                                           className={`btn btn-outline-danger ${commented[0] ? "": ""}`}
                                            onClick={() => {
                                                        handleComment(0);
                                                    }}
                                                    >
                                                {commented[0] ? (<FaComments color="red" size={20} />) : (<FaRegComments color="red" size={20} />)}
                                                            </button>

                                       <button type="button" className="btn btn-outline-danger">
                                            <IoIosSend color="red" size={20} />
                                                </button>
                                        
                                    
                                        { /* Modal para comentarios */}
                                        {show && activeIndex === 0 &&(
                                            <div className="modal-feed" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog">
                                                <div className="modal-dialog modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-tittle" id="tituloModal">Comentarios</h1> 
                                                    </div>

                                                    {/* Aquí podrías agregar un formulario para enviar comentarios */}
                                                    <div 
                                                       className="modal-body d-flex justify-content-center">
                                                    <button onClick={handleClose} style={{
                                                        border: "1px solid red",
                                                        margin: '0 auto',
                                                        background: "transparent",
                                                        padding: "10px",
                                                        }} >
                                                       <IoClose color='red' size={20} /></button>
                                                    </div>
                                                    <div className="modal-footer"> 
                                                     
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/*card 2*/}
                            <div className="card mb-4 card-feed">
                                {/*Perfil usuario*/}
                                <nav className="navbar-feed bg-body-tertiary-perfil">
                                    <div className="container-fluid">
                                        <a className="navbar-brand d-flex align-items-center">
                                            <img
                                                src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2024/04/cropped-LogoCBpng.png"
                                                alt="Logo"
                                                style={{ height: 40, width: 40, objectFit: "cover" }}
                                                className="d-inline-block align-text-top me-2"
                                            />
                                            <span style={{ color: "#284D5D" }}>
                                                Científicos de la Basura
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                <img
                                    src="https://cientificosdelabasura.ucn.cl/wp-content/uploads/2023/02/WhatsApp-Image-2022-07-25-at-12.21.48-PM.jpeg"
                                    className="card-img-top"
                                    alt="Primer streaming público y gratuito de imágenes submarinas de Chile"
                                />
                                <div className="card-body-feed">
                                    <h5 className="card-title">
                                        Primer streaming público y gratuito de imágenes submarinas de
                                        Chile transmitirá desde Coquimbo
                                    </h5>
                                    <br />
                                    <p>18/04/2025</p>
                                    <p className="card-text">
                                        Chile tiene una de las costas más largas del mundo, con fauna
                                        marina diversa y endémica. Ahora se puede ver la vida submarina
                                        desde cualquier lugar gracias a una cámara en el fondo de
                                        Coquimbo...{" "}
                                        <a href="https://cientificosdelabasura.ucn.cl/primer-streaming-publico-y-gratuito-de-imagenes-submarinas-de-chile-transmitira-desde-coquimbo/">
                                            Seguir leyendo
                                        </a>
                                    </p>
                                    <div className="btn-group-feed">
                                        <button
                                            type="button"
                                            className={`btn btn-outline-danger ${liked[1] ? "": ""}`}
                                            onClick={() => handleLike(1)}>

                                            {liked[1] ? (<FaHeart color="red" size={20} />) : (<FaRegHeart color="red" size={20} />)}
                                        </button>


                                        <button
                                           type="button"
                                           className={`btn btn-outline-danger ${commented[1] ? "": ""}`}
                                            onClick={() => {
                                                        handleComment(1);
                                                    }}
                                                    >
                                                {commented[1] ? (<FaComments color="red" size={20} />) : (<FaRegComments color="red" size={20} />)}
                                                </button>

                                                 <button type="button" className="btn btn-outline-danger">
                                                 <IoIosSend color="red" size={20} />
                                                </button>


                                                {show && activeIndex === 1 && (
                                                        <div className="modal-feed" aria-labelledby="staticBackdropLabel" aria-modal="true" role="dialog">
                                                            <div className="modal-dialog modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-tittle" id="tituloModal">Comentarios</h1> 
                                                            </div>
                                                            <div className="modal-body d-flex justify-content-center">
                                                                <button onClick={handleClose} style={{
                                                                border: "1px solid red",
                                                                margin: '0 auto',
                                                                background: "transparent",
                                                                padding: "10px",
                                                                }}>
                                                                <IoClose color='red' size={20} />
                                                                </button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                )}         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Feed;