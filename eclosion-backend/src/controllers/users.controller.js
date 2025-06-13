//Controlador crear usuario
const createUser = async (req, res) => {
    res.status(201).json({
        ok: true,
        id: "0",
        name: "valentina",
        lastName: "toledo",
        edad: "29",
        email: "valentina@gmail.com",
        password: "1234",
        typeUser: "usuario",
        status: false,
    })
}
//Controlador registro usuario
const registerUser = async (req, res) => {
    res.status(201).json({
        ok: true,
        id: "0",
        name: "valentina",
        lastName: "toledo",
        edad: "29",
        email: "valentina@gmail.com",
        password: "1234",
        typeUser: "usuario",
        status: false,
    })
}
//Controlador login usuario
const loginUser = async (req, res) => {
    res.status(200).json({
        ok: true,
        nameUser: "valeMdfcka",
        password: "1234",
    })
}
//Controlador consultar usuario por id
const userId = async (req, res) => {
    res.status(201).send("Esta es la ruta de usuario/perfil");
}
//Controlador crear nueva noticia
const createNews = async (req, res) => {
    res.status(201).json({
        ok: true,
        id: "0",
        title: "titulo noticia",
        category: "categoria noticia",
        contentBody: "contenido noticia",
        author: "autor noticia",
    })
}
//Controlador consulta a la BD para actualizar noticias en feed
const refreshNews = async (req, res) => {
    res.status(200).send("Esta es la ruta para recargar el Feed");
}

module.exports = {
    createUser,
    registerUser,
    loginUser,
    userId,
    createNews,
    refreshNews,
}