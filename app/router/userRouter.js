const router = require('express').Router();
const userController = require('../controller/userController')
const auth = require('../controller/auth')


router.post('/login', userController.userLogin)
router.post('/register', userController.userRegister)
router.post('/getData', userController.getData)
router.post('/logout', auth, userController.userLogout) // logout from the device


/*
router.get('/') // get All users
router.get('/me', auth) // get my profile
router.patch('/me', auth) // edit me
router.delete('/me', auth) // delete me
*/

module.exports = router;