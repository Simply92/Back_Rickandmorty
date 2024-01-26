const router = require('express').Router();
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const postUser = require('../controllers/postUser')
const getFav = require('../controllers/getFav')


router.get("/character/:id",getCharById)

router.get('/login', login);

router.get('/getFav/:user', getFav)

router.post("/fav",postFav)

router.delete("/fav/:id", deleteFav)

router.post('/register', postUser)

module.exports = router;