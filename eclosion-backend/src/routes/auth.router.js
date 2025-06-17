const { registerUser, loginUser, userId, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/users.controller')
// const { createNews, refreshNews } = require('../controllers/newsPost.controller')
const express = require("express");
const { Router } = require('express')
const newsController = require("../controllers/newsController");
const router = Router();

//router de usuarios 
//nuevos controllers
router.get('/users', getAllUsers); // Obtener todos los usuarios
router.get('/user/:id', getUserById); // Obtener un usuario por ID
router.put('/user/:id', updateUser); // Actualizar un usuario por ID
router.delete('/user/:id', deleteUser); // Eliminar un usuario por ID

router.get('/user', userId )
router.post('/login', loginUser )
router.post('/register', registerUser )

//router del feed y crear post
router.get('/feed', refreshNews )
// router.post('/createNewsPost', createNews )



module.exports = router;