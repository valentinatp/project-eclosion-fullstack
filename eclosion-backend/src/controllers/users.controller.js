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

const loginUser = async (req, res) => {
    res.status(200).json({
        ok: true,
        nameUser: "valeMdfcka",
        password: "1234",
    })
}

const userId = async (req, res) => {
    res.status(201).send("Esta es la ruta de usuario/perfil");
}

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