/**
 * define
 */
var express               = require('express')
var router                = express.Router()
var { VALIDATE_REGISTER } = require("../middleware/request/register")
var { register_user }     = require("../controller/user")
var { VALIDATE_UPDATE_AVATAR } = require("../middleware/request/update-avatar")


router.post('/register', [ VALIDATE_REGISTER ], register_user)
router.put('/', [ VALIDATE_UPDATE_AVATAR ], register_user)

module.exports = router;