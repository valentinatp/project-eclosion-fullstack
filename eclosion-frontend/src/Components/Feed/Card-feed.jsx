import { useState } from 'react';
import './feed-style.css';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa"; //corazon
import { FaHeart } from "react-icons/fa"; //corazon lleno
import { FaRegComments } from "react-icons/fa"; //comentarios
import { FaComments } from "react-icons/fa6"; //comentario relleno
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const NoticeCard = ({ noticia, index, liked, commented, handleLike, handleComment, show, handleClose, activeIndex }) => {

     if (!noticia.title || !noticia.img_notice) return null;//prohibe la muestra de la noticia si no tiene todos los valores de la base de datos

return (
        <div className="card-feed">
        {/*Perfil usuario*/}
        <nav className="navbar-feed bg-body-tertiary-perfil">
                                    <div className="container-fluid">
                                        <a className="navbar-brand d-flex align-items-center">
                                            {/*Imagen usuario*/}
                                            <img src={noticia.img_user} alt={noticia.user}style={{ height: 40, width: 40, objectFit: "cover" }}className="d-inline-block align-text-top me-2"/>
                                            <span style={{ color: "#284D5D" }}>
                                                {noticia.user}
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                                <img
                                    src={noticia.img_notice}
                                    id="img-notice-card"
                                    alt={noticia.title}
                                />
                                <div className="card-body-feed">
                                    <h5 className="card-title">
                                        {noticia.title}
                                    </h5>
                                    <br />
                                    <p>{noticia.date}</p>
                                    <p className="card-text ">
                                        {noticia.resume_notice}{" "}
                                        <a href={noticia.link_notice} style={{ color: "#198683",fontWeight: "bold",textDecoration: "none"}}>
                                            Ver mas
                                        </a>
                                    </p>
                                    {/* Botones de interacción */}
                                    <div className="btn-group-feed">
                                        <button
                                            type="button"
                                            className={`btn btn-outline-success ${liked[index] ? "": ""}`}
                                            onClick={() => handleLike(index)}>

                                            {liked[index] ? (<FaHeart color="#284D5D" size={20} />) : (<FaRegHeart color="#68BDB8" size={20} />)}
                                        </button>

                                        <button
                                           type="button"
                                           className={`btn btn-outline-success ${commented[index] ? "": ""}`}
                                            onClick={() => {
                                                        handleComment(index);
                                                    }}
                                                    >
                                                {commented[index] ? (<FaComments color="#68BDB8" size={20} />) : (<FaRegComments color="#68BDB8" size={20} />)}
                                                            </button>

                                       <button type="button" className="btn btn-outline-success">
                                            <IoIosSend color="#68BDB8" size={20} />
                                        </button>
                                        
                                    
                                        { /* Modal para comentarios */}
                                        {show && activeIndex === index &&(
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
                                                       <IoClose color='#68BDB8' size={20} /></button>
                                                    </div>
                                                    <div className="modal-footer"> 
                                                     
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                             );
};

export default NoticeCard;