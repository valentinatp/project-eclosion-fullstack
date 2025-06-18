

const { registerUser, loginUser, userId } = require('../controllers/users.controller')
const { createNews, refreshNews } = require('../controllers/newsPosts.controller')

const { Router } = require('express')
const newsController = require("../controllers/newsController");
const router = Router();

//router de usuarios 
router.post('/login', loginUser )
router.post('/register', registerUser )

//router del feed y crear post
router.get('/feed', refreshNews )
// router.post('/createNewsPost', createNews )



module.exports = router;