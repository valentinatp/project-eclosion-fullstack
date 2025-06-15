
//imporatamos el modelo
const User = require('../models/user.model')
const Newspost = require('../models/news.post.model')

//Controlador login usuario
const loginUser = (req, res) => {
    const { email, password } = req.body
    //Validamos los datos de los parametros
    if ( !email || !password ) {
        res.status(400).json({
            message : "Faltan datos para iniciar sesion",
        })
        return
    }
    try { 
        //Creamos un nuevo recurso
        res.status(200).json({
            message: "Usuario logeado correctamente",
            code: 200,
            data: {
                email: email,
                password: password,
            }
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Error al crear un post",
            error: error.message,
        })
    }
}

//Controlador crear usuario
const registerUser = async (req, res) => {
    const { name, lastName, age, email, password, typeUser, statusActive } = req.body //express captura los datos del cliente en la propiedad 'body' del objeto 'req'
    //Validamos que los datos se inyecten correctamente
    if ( !name || !lastName || !age || !email || !password || !typeUser || !statusActive) {
        //Si falta algun parametro se indica el error al cliente
        res.status(400).json({
            message : "Faltan datos para la creacion del usuario",
        })
        return
    }

    try { 
        await User.create({
            name, lastName, age, email, password, typeUser, statusActive
        })
        res.status(201).json({
            //Respondemos la consulta al usuario
            message: "Usuario registrado correctamente",
            code: 201,
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Error al registrar el usuario",
            error: error.message,
        })
    }
}

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
        //Creamos un nuevo recurso
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

//Controlador consultar usuario por id
const userId = (req, res) => {
    res.status(201).send("Esta es la ruta de usuario/perfil");
}


//Controlador consulta a la BD para actualizar noticias en feed
const refreshNews = (req, res) => {
    res.status(200).send("Esta es la ruta para recargar el Feed");
}

module.exports = {
    registerUser,
    loginUser,
    userId,
    createNews,
    refreshNews,
}