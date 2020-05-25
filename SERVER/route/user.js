/**
 * define
 */
var express               = require('express')
var router                = express.Router()
var { VALIDATE_REGISTER } = require("../middleware/request/user-register")
var { register_user }     = require("../controller/user")
var { VALIDATE_UPDATE_PROFILE } = require("../middleware/request/update-profile")


router.post('/register', [ VALIDATE_REGISTER ], register_user)
router.put('/', [ VALIDATE_UPDATE_PROFILE ], register_user)

module.exports = router;