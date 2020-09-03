const router = require('express').Router();
const userController = require('../controller/userController')

router.post('/login', userController.userLogin)
router.get('/logout', userController.userLogout)
router.post('/register', userController.userRegister)

module.exports = router;