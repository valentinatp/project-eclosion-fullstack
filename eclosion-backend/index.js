const express = require('express');
const PORT = 4001;

//Creacion de server de express
const app = express();

//Ruta de prueba
app.get('/', (req, res) => {
    console.log('Se requiere /');
    res.json({
        ok: true
    })
})


//Escucha de peticiones
app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});