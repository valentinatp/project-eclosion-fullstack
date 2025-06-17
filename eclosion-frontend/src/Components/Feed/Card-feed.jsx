import './feed-style.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegComments, FaComments } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const NoticeCard = ({ noticia, index, liked, commented, handleLike, handleComment, show, handleClose, activeIndex }) => {

  if (!noticia.title || !noticia.img_notice || !noticia.user || !noticia.img_user) return null;

  return (
    <div className="card-feed d-flex flex-column">

      {/* Perfil usuario */}
      <nav className="navbar-feed bg-body-tertiary-perfil">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center">
            <img src={noticia.img_user} alt={noticia.user} style={{ height: 40, width: 40, objectFit: "cover" }} className="d-inline-block align-text-top me-2" />
            <span className="responsive-user-text">{noticia.user}</span>
          </a>
        </div>
      </nav>

      {/* Imagen noticia */}
      <img src={noticia.img_notice} id="img-notice-card" alt={noticia.title} />

      <div className="card-body-feed">
        <div className='date-and-category'>
          <p>{new Date(noticia.date).toLocaleDateString()}</p>
          <p className='category'>{noticia.category}</p>
        </div>

        <h5 id='title-card-feed'>{noticia.title}</h5>

        <p className="card-text">
          {noticia.resume_notice}{" "}
          <a href={noticia.link_notice} style={{ color: "#198683", fontWeight: "bold", textDecoration: "none" }}>
            Ver más
          </a>
        </p>

        {/* Botones */}
        <div className="btn-group-feed">
          <button type="button" className="btn btn-outline-success" onClick={() => handleLike(index)}>
            {liked[index] ? <FaHeart color="#284D5D" size={20} /> : <FaRegHeart color="#68BDB8" size={20} />}
          </button>

          <button type="button" className="btn btn-outline-success" onClick={() => handleComment(index)}>
            {commented[index] ? <FaComments color="#68BDB8" size={20} /> : <FaRegComments color="#68BDB8" size={20} />}
          </button>

          <button type="button" className="btn btn-outline-success">
            <IoIosSend color="#68BDB8" size={20} />
          </button>
        </div>

        {/* Modal de comentarios */}
        {show && activeIndex === index && (
          <div className="modal-feed" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-content">
              <div className="modal-header">
                <h1 className="modal-tittle" id="tituloModal">Comentarios</h1>
              </div>
              <div className="modal-body d-flex justify-content-center">
                <button onClick={handleClose} className="btn btn-outline-danger" aria-label="Cerrar modal">
                  <IoClose color='#68BDB8' size={20} />
                </button>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default NoticeCard;