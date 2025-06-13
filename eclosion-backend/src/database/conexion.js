//Importamos Mongoose para la conexion a MongoDB
const mongoose = require('mongoose');

const conexionDb = async () => {
    //Agregamos el metodo try/catch para manipular
    //el error de la consulta (conexion) a la DB
    try {
        //Si la consulta es exitosa, se ejecuta este bloque de codigo.
            // se debe agregar el link de la URI de conexion de MongoDB.
        await mongoose.connect('mongodb://localhost:27017/eclosion-data-base')
        console.log('La conexion a la BD fue exitosa')
    } catch (error) {
        //Si falla la consulta, se ejecuta este bloque de codigo
        console.log("Error de conexion a la BD: " + error);
    }
}

module.exports = {
    conexionDb
}