const { createUser, loginUser, createNews, registerUser, refreshNews, userId } = require('../controllers/users.controller')
const { Router } = require('express')
const router = Router();

router.post('/login', loginUser ) //deberia ser POST(?)
router.post('/register', registerUser )
router.get('/user', userId )
router.get('/feed', refreshNews )


module.exports = router;