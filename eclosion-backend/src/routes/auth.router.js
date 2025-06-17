const { registerUser, loginUser, userId } = require('../controllers/users.controller')
const { createNews, refreshNews } = require('../controllers/newsPost.controller')
const { Router } = require('express')
const router = Router();

router.get('/user', userId )
router.get('/feed', refreshNews )
router.post('/login', loginUser )
router.post('/register', registerUser )
router.post('/createNewsPost', createNews )



module.exports = router;