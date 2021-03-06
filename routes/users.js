//Routes

//index users posts
//index users comments
//CRUD on users

const router = require('express').Router();
const controllers = require('../controllers');

router.post('/signup', controllers.users.signup);
router.post('/login', controllers.users.login);

module.exports = router;