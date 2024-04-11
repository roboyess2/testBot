const Router = require('express')
const router = new Router()
const UserController = require('../controllers/controller')


router.put('/coinstatus', UserController.Coinstatus);

module.exports = router;