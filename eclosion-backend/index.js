const express = require('express');
//Importamos archivo .env para la configuracion de variables de entorno
require('dotenv').config();

//Validamos los procesos que estan corriendo
//console.log(process.env);

//Creacion de server de express
const app = express();

//Configuramos el directorio publico para validar la conexion al servidor desde el navegador
app.use(express.static('public'));

//Ruta de prueba
app.use('/api/auth', require('./routes/auth'));

// app.get('/', (req, res) => {
//     res.json({
//         ok: true
//     })
// })

//Escucha de peticiones
app.listen( process.env.PORT , () => {
    console.log(`Servidor activo en puerto ${ process.env.PORT }`);
});