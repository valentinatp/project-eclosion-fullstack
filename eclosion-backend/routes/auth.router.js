const { createUser, loginUser, createNews } = require('../controllers/users.controller')
const { Router } = require('express')
const router = Router();

router.get('/login', loginUser )

router.get('/register', createUser )

//router.get('/feed', createNews/recargar las noticias del feed -> ejemplo que consulte a la base de datos y actualice le contenido )

module.exports = router;