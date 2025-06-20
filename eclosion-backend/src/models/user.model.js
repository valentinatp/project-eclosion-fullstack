const mongoose = require('mongoose');
const { Schema, model } = mongoose;
//Creamos el Schema del modelo
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    typeUser: {
        type: String,
        default: 'user', // Valor por defecto
    },
    statusActive: {
        type: Boolean,
        default: 1, // Valor por defecto
    },
}) 

//Creamos la instancia del modelo indicandole la coleccion y su Schema como parametro
const User = model("User", userSchema);//El nombre de la coleccion se escribe en singular y con la primera letra en mayuscula ('collection: users' -> 'User').

module.exports = User;