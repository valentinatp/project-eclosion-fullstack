import { useState } from 'react';
import { Link } from 'react-router-dom';


const FormCrearNoticias = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [Categoria, setCategoria] = useState('');
    const [enlace, setEnlace] = useState('');

    const createNewsPost = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
        // console.log({ titulo, contenido, autor, imagen });

        // Limpiar los campos
        setTitulo('');
        setContenido('');
        setCategoria('');
        setEnlace('');
    };

    return (
        <>
            <div className="container-fluid breaking-news">
                <div className="news-item">
                    <h1 className="fw-bold mb-2">Nueva Noticia</h1>
                    <p className="mb-4"><strong>Publica</strong> tu noticia ingresando los siguientes datos</p>
                    <form onSubmit={createNewsPost}>
                        <div className="mb-3">
                            <label htmlFor="titulo" className="fw-bold">Título</label>
                            <input
                                type="text"
                                className="form-control border border-secondary"
                                id="titulo"
                                placeholder="Título de la noticia"
                                required
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contenido" className="fw-bold">Contenido</label>
                            <textarea
                                className="form-control border border-secondary-contenido"
                                id="contenido"
                                placeholder="Contenido de la noticia"
                                required
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoria" className="fw-bold">Categoria</label>
                            <select
                                className="form-select border border-secondary-category"
                                id="categoria"
                                value={Categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="playas">Playas</option>
                                <option value="oceanos">Océanos</option>
                                <option value="rios">Ríos</option>
                                <option value="lagos">Lagos</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="enlace" className="fw-bold">URL de la noticia</label>
                            <input
                                type="text"
                                className="form-control border border-secondary"
                                id="enlace"
                                placeholder="URL de la noticia"
                                value={enlace}
                                onChange={(e) => setEnlace(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <Link to="/feed" className="btn btn-return fw-bold">Volver</Link>
                            <button type="submit" className="btn btn-secondary fw-bold">Publicar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormCrearNoticias;