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
        type: Date,
        default: Date.now
    },
    imageUser: {
        type: String,
        default: "https://www.futbox.com/img/v1/918/80d/b85/ad6/279e0443b02d9f2eecaa.png",
    },
    imageNews: {
        type: String,
        default: "https://madero.cl/wp-content/uploads/2025/04/Proyecto-Centenario-v2-e1745038663217.png",
    },
    linkNews: {
        type: String,
        required: true,
    },
})

//Creamos la instancia del modelo indicandole la coleccion y su Schema como parametro
const Newspost = model("Newspost", newsSchema);

module.exports = Newspost;

