
/*      <--------FASE DE PRUEBA 0-------->

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
        <form onSubmit={createNewsPost}
    )

}
export default createNewsPost; */