//Controlador crear usuario
const registerUser = (req, res) => {
    //Recibimos los campos del usuario { id, name, lastname, age, email, psw, typeUser, statusActive }
    const { id, name, lastName, age, email, password, typeUser, statusActive } = req.body //express captura los datos del cliente en la propiedad 'body' del objeto 'req'
    //Validamos que los datos se inyecten correctamente
    if (!id || !name || !lastName || !age || !email || !password || !typeUser || !statusActive) {
        //Si falta algun parametro se indica el error al cliente
        res.status(400).json({
            message : "Faltan datos para la creacion del usuario",
        })
        return
    }
    //Aca debo agregar la logica para la BD
    
    //Respondemos la consulta al usuario
    res.status(201).json({
        message: "Usuario registrado correctamente",
        code : 201,
        data: {
            id: id,
            name: name,
            lastName: lastName,
            age: age,
            email: email,
            password: password,
            typeUser: typeUser,
            statusActive: statusActive,
        }
    })
}
//Controlador registro usuario
const createUser = (req, res) => {
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
const loginUser = (req, res) => {
    res.status(200).json({
        ok: true,
        nameUser: "valeMdfcka",
        password: "1234",
    })
}
//Controlador consultar usuario por id
const userId = (req, res) => {
    res.status(201).send("Esta es la ruta de usuario/perfil");
}
//Controlador crear nueva noticia
const createNews = (req, res) => {
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
const refreshNews = (req, res) => {
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