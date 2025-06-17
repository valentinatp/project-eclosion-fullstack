
//imporatamos el modelo
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jsonWebToken = require('jsonwebtoken')

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
        let userEmail = await User.findOne({ email });
        console.log(userEmail)

        if ( userEmail ) {
            return res.status(404).json({ uid : usuario.id, name: usuario.fullName, message : "El correo ya ha sido registrado previamente" })
        }

        //Capturamos password
        let { password } = req.body
        //Encriptamos la contraseña
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt)

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

//Controlador login usuario
const loginUser = async (req, res) => {
    const { email, password } = req.body
    //Validamos los datos de los parametros
    if ( !email || !password ) {
        res.status(400).json({
            message : "Faltan datos para iniciar sesion",
        })
        return
    }
    try { 
        //Validamos que coincida el usuario 'email'
        let userEmail = await User.findOne({ email });
        if ( !userEmail ) {
            return res.status(404).json({  message : "El usuario no coincide" })
        }
        //Desencriptamos la password
        const validatePassword = bcrypt.compareSync(password, userEmail.password);

        //Password incorrecta
        if ( !validatePassword ) {
            return res.status(400).json({ message: "La constraseña no coincide" })
        }

        //Implementamos JWT
        const jsonToken = jsonWebToken.sign({id: userEmail._id}, "secretCode")

        res.status(200).json({
            message: "Usuario logeado correctamente",
            code: 200,
            data: {
                email: email,
                token : jsonToken,
            }
        })
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Error al iniciar sesion",
            error: error.message,
        })
    }
}

//Controlador consultar usuario por id
const userId = (req, res) => {
    res.status(201).send("Esta es la ruta de usuario/perfil");
}

module.exports = {
    registerUser,
    loginUser,
    userId
}