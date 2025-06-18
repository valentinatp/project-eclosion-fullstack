

const { registerUser, loginUser } = require('../controllers/users.controller')
const { createNews, refreshNews, getAllNews } = require('../controllers/newsPosts.controller')

const { Router } = require('express')
const router = Router();

//router de usuarios 
router.post('/login', loginUser )
router.post('/register', registerUser )

//router del feed y crear post
router.get('/feed', refreshNews )
router.post('/api/news', createNews)
router.get('/api/news', getAllNews )

module.exports = router;