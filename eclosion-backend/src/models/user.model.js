const mongoose = require('mongoose');
const { Schema, model } = mongoose;
//Creamos el Schema del modelo
const userSchema = new Schema({
 
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        // cambio de string a Number para evitar conflicto y avitar agregar funcion que cambie el dato number a string
        type: Number,
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
        enum: ['user','userVerified', 'admin', 'moderator'], // Opcional: valores permitidos
    },
    statusActive: {
        type: Boolean,
        default: true, // Valor por defecto
    },
},
    {
        virtuals: {
            fullName: {
                get() {
                    return `${this.name} ${this.lastName}`
                }
            }
        }
    }
) 

//Creamos la instancia del modelo indicandole la coleccion y su Schema como parametro
const User = model("User", userSchema);//El nombre de la coleccion se escribe en singular y con la primera letra en mayuscula ('collection: users' -> 'User').

module.exports = User;