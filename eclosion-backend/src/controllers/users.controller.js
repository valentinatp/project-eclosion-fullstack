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
//Controlador login usuario
const loginUser = (req, res) => {
    const { email, password } = req.body
    //Validamos los datos de los parametros
    if (!email || !password) {
        res.status(400).json({
            message : "Faltan datos para iniciar sesion",
        })
        return
    }
    //Aca debo agregar la logica para la BD
    res.status(200).json({
        message: "Usuario logeado correctamente",
        code : 200,
        data: {
            email: email,
            password: password,
        }
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
    registerUser,
    loginUser,
    userId,
    createNews,
    refreshNews,
}