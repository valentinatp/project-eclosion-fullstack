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
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSBoMknyWc5mlpWm0p8LNHG363SZte5JlQg&s",
    },
    imageNews: {
        type: String,
        default: "https://cientificosdelabasura.ucn.cl/wp-content/uploads/2025/02/CostaRica_MauricioErgas-1024x683.jpg",
    },
    linkNews: {
        type: String,
        required: true,
    },
})

//Creamos la instancia del modelo indicandole la coleccion y su Schema como parametro
const Newspost = model("Newspost", newsSchema);

module.exports = Newspost;

