const express = require('express');
const router = express.Router();
const controladorUser = require('../controller/userController');

router.get('/register', controladorUser.register);

router.get('/login', controladorUser.login);

module.exports = router;