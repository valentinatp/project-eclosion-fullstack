const Newspost = require('../models/news.post.model')

//Controlador crear nueva noticia
const createNews = async (req, res) => {
    //Recibimos los campos del usuario
    const { author, category, title, bodyNews, dateNews  } = req.body
    //Validamos que los datos se inyecten correctamente
    if ( !author || !category || !title || !bodyNews || !dateNews  ) {
        //Si falta algun parametro se indica el error al cliente

        res.status(400).json({
            message : "Faltan datos para la creacion del post",
        })
        return
    }
    try { 
        await Newspost.create({
            author, category, title, bodyNews, dateNews
        })
        res.status(201).json({
            //Respondemos la consulta al usuario
            message: "Post creado correctamente",
            code : 201,
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Error al crear un post",
            error: error.message,
        })
    }
}

//Controlador consulta a la BD para actualizar noticias en feed
const refreshNews = async (req, res) => {
    try {
        const newslist = await Newspost.find();
        console.log(newslist);

        res.status(200).json({
            message: "Consulta realizada con exito",
            status: 200,
            data: {
                newsPost : newslist,
            }
        })
    } catch ( error ) {
        console.log(error)
        res.status(500).json({
            message: "Error al crear un post",
            error: error.message,
        })
    }
}

module.exports = {
    createNews,
    refreshNews,
}