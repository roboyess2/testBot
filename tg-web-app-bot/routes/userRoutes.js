const Router = require('express')
const router = new Router()
const UserController = require('../controllers/controller')


router.put('/user', UserController.updateCoins);
router.get('/users', UserController.getUsers)
router.get('/user/:id', UserController.getOneUser)

module.exports = router;