import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormCrearNoticias = () => {
    const [title, setTitle] = useState('');
    const [bodyNews, setBodyNews] = useState('');
    const [category, setCategory] = useState('');
    const [linkNews, setLinkNews] = useState('');

    const createNewsPost = async (e) => {
        e.preventDefault();

        const newPost = {
            author: "Usuario Anónimo", // Puedes reemplazarlo por datos reales luego
            category,
            title,
            bodyNews,
            linkNews,
            imageUser: "",
            imageNews: ""
        };

        try {
            const res = await fetch('http://localhost:4001/api/news', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });

            const data = await res.json();

            if (res.status === 201) {
                alert(' Noticia creada correctamente');
                
                setTitle('');
                setBodyNews('');
                setCategory('');
                setLinkNews('');
            } else {
                alert(' Error al crear noticia: ' + data.message);
            }
        } catch (err) {
            console.error(err);
            alert(' Error al enviar datos al feed');
        }
    };

    return (

        <>
            <div className="container-fluid breaking-news">
                <div className="news-item">
                    <h1 className="fw-bold mb-2 text-center">Nueva Noticia</h1>
                    <p className="mb-4 text-center"><strong>Publica</strong> tu noticia ingresando los siguientes datos</p>
                    <form onSubmit={createNewsPost}>
                        <div className="mb-3">
                            <label htmlFor="titulo" className="fw-bold">Título</label>
                            <input
                                type="text"
                                className="form-control border border-secondary"
                                id="titulo"
                                placeholder="Título de la noticia"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contenido" className="fw-bold">Contenido</label>
                            <textarea
                                className="form-control border border-secondary-contenido"
                                id="contenido"
                                placeholder="Contenido de la noticia"
                                required
                                value={bodyNews}
                                onChange={(e) => setBodyNews(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categoria" className="fw-bold">Categoria</label>
                            <select
                                className="form-select"
                                id="categoria"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
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
                                value={linkNews}
                                onChange={(e) => setLinkNews(e.target.value)}
                            />
                        </div>
                        <div className="d-flex gap-5 justify-content-between">
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