/**
 * define
 */
var express           = require('express')
var { VALIDATE_REGISTER } = require("../middleware/request/user-register")
var router            = express.Router()
var { register_user } = require("../controller/register-user")


router.post('/register', [ VALIDATE_REGISTER ], register_user)


module.exports = router;