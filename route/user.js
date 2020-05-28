/**
 * define
 */
var express               = require('express')
var router                = express.Router()

var { register_user, refesh }  = require("../controller/user"),
    { VALIDATE_REGISTER }      = require("../middleware/request/register"),
    { VALIDATE_REFESH }        = require("../middleware/request/refesh"),
    { VALIDATE_UPDATE_AVATAR } = require("../middleware/request/update-avatar")


router.post('/register', [ VALIDATE_REGISTER ], register_user)
router.post('/refesh', [ VALIDATE_REFESH ], refesh)
router.put('/', [ VALIDATE_UPDATE_AVATAR ], register_user)

module.exports = router;