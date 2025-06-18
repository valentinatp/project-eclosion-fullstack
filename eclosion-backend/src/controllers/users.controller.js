
//imporatamos el modelo

const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jsonWebToken = require('jsonwebtoken')
 
//Controlador crear usuario
const registerUser = async (req, res) => {
    const { name, age, email, password, typeUser, statusActive } = req.body //express captura los datos del cliente en la propiedad 'body' del objeto 'req'
    
    //Validamos que los datos se inyecten correctamente
    
    if ( !name || !age || !email || !password ) {

        //Si falta algun parametro se indica el error al cliente
        res.status(400).json({
            message : "Faltan datos para la creacion del usuario",
        })
        return
    }

    try { 
        let userEmail = await User.findOne({ email });

        if (userEmail) {
            //se cambia 404 a 409 porque en este caso es un Conflict y no un error
            return res.status(409).json({ uid : userEmail.id, name: userEmail.name, message : "El correo ya ha sido registrado previamente" })
        }

        //Capturamos password
        let { password } = req.body
        //Encriptamos la contraseña
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt)

        //Enviar solicitud de crear usuario a MongoDB
        await User.create({
            name, age, email, password, typeUser, statusActive

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

//nueva implementacion de consulta
// Controlador para obtener todos los usuarios
const getAllUsers = async (_, res) => {

    try {
        
        const users = await User.find();
        
        res.status(200).json({
            message: "Usuarios obtenidos correctamente",
            data: users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error: error.message,
        });
    }
};

// Controlador para obtener un usuario por ID
const getUserById = async (req, res) => {
    const { id } = req.params; // Capturamos el ID desde los parámetros de la ruta
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({
            message: "Usuario obtenido correctamente",
            data: user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener el usuario",
            error: error.message,
        });
    }
};

// Controlador para actualizar un usuario
const updateUser = async (req, res) => {
    const { id } = req.params; // Capturamos el ID desde los parámetros de la ruta
    const { name, age, email, typeUser, statusActive } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            name,
            age,
            email,
            typeUser,
            statusActive,
        }, { new: true }); // { new: true } devuelve el documento actualizado

        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({
            message: "Usuario actualizado correctamente",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al actualizar el usuario",
            error: error.message,
        });
    }
};

// Controlador para eliminar un usuario
const deleteUser = async (req, res) => {
    const { id } = req.params; // Capturamos el ID desde los parámetros de la ruta
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({
            message: "Usuario eliminado correctamente",
            data: deletedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al eliminar el usuario",
            error: error.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};