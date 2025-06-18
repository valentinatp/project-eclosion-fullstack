const express = require('express');
//Importamos archivo 'conexion.js' para realizar la conexion con la base de datos
const { conexionDb } = require('./src/database/conexion');
//Importamos archivo '.env' para la configuracion de variables de entorno
require('dotenv').config();
//Importamos Morgan para registrar las consultas HTTP en el log
const morgan = require('morgan');
//Validamos los procesos que estan corriendo
//console.log(process.env);

//Importamos cors
//Paquete que nos permite permitir o restringir accesos de dominios externos.
const cors = require('cors');

//Creacion de server de express
const app = express();
//cors permite a otros sitios web hacer solicitudes a nuestra aplicacion
app.use(cors())
//Invocamos la conexion con MongoDB
conexionDb();
//utilizamos el middleware morgan
app.use(morgan("dev"));
//Utilizamos el middleware 'json' para parsear el contenido del 'body' de la request para la correcta lectura de los datos
app.use(express.json());

//Configuramos el directorio publico para validar la conexion al servidor desde el navegador
app.use(express.static('./src/public'));

//Ruta inicial
app.use('/', require('./src/routes/auth.router'));

//Escucha de peticiones
app.listen( process.env.PORT , () => {
    console.log(`Servidor activo en puerto ${ process.env.PORT }`);
});