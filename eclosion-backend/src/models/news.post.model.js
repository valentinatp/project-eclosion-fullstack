const mongoose = require('mongoose');
const { Schema, model } = mongoose;
  
const newsSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    bodyNews: {
        type: String,
        required: true,
    },
    dateNews: {
        type: String,
        required: true,
    },
    imageUser: String,
    imageNews: String,
    linkNews: {
        type: String,
        required: true,
    },
    
})

//Creamos la instancia del modelo indicandole la coleccion y su Schema como parametro

const Newspost = model("Newspost", newsSchema);

module.exports = Newspost;

