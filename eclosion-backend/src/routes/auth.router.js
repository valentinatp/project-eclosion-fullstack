
const { registerUser, loginUser, userId } = require('../controllers/users.controller')


const { createNews, refreshNews } = require('../controllers/newsPost.controller')
const { Router } = require('express')
const router = Router();

//router de usuarios 


router.get('/user', userId )
router.post('/login', loginUser )
router.post('/register', registerUser )

//router del feed y crear post
router.get('/feed', refreshNews )
router.post('/createNewsPost', createNews )



module.exports = router;