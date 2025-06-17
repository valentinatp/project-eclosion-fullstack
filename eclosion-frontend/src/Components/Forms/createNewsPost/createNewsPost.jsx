


import React, { useState } from 'react';

const FormCrearNoticias = ({ onSubmit }) => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [autor, setAutor] = useState('');
    const [imagen, setImagen] = useState('');

    const createNewsPost = (e) => {
        e.preventDefault();
        // validaciones 
        onSubmit({
            titulo,
            contenido,
            autor,
            imagen,
        });

        setTitulo('');
        setContenido('');
        setAutor('');
        setImagen('');
    };

    return (
        <form onSubmit = {createNewsPost}>
        <div>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contenido:</label>
        <textarea
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Autor:</label>
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required/>
      </div>
      <div>
        <label>Imagen: (URL)</label>
        <input
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
      </div>
      <button type="submit">Crear Noticia</button>
    </form >
    )

}
export default FormCrearNoticias;