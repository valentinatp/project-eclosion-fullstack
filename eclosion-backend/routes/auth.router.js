const { createUser, loginUser, createNews } = require('../controllers/users.controller')
const { Router } = require('express')
const router = Router();

router.get('/login', loginUser )

router.get('/register', createUser )

router.get('/feed', createNews )

module.exports = router;