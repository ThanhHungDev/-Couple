/**
 * define
 */
var express           = require('express')
var router            = express.Router()

var LoginController   = require("../controller/LoginController.js")

router.get('/login', LoginController.userLogin)
router.get('/logout', LoginController.userLogout)

module.exports = router;