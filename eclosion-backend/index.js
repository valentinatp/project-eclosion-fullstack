const express = require('express');
//Importamos archivo .env para la configuracion de variables de entorno
require('dotenv').config();
//Importamos Morgan para registrar las consultas HTTP en el log
const morgan = require('morgan')
//Validamos los procesos que estan corriendo
//console.log(process.env);

//Creacion de server de express
const app = express();

//utilizamos el middleware morgan
app.use(morgan("dev"))
//Utilizamos el middleware 'json' para parsear el contenido del 'body' de la request para la correcta lectura de los datos
app.use(express.json())
//Configuramos el directorio publico para validar la conexion al servidor desde el navegador
app.use(express.static('./src/public'));

//Ruta inicial
app.use('/', require('./src/routes/auth.router'));



//Escucha de peticiones
app.listen( process.env.PORT , () => {
    console.log(`Servidor activo en puerto ${ process.env.PORT }`);
});