/**
 * define
 */
var express               = require('express')
var router                = express.Router()

var { register_user, refesh }        = require("../controller/user"),
    { VALIDATE_REGISTER }            = require("../middleware/request/register"),
    { VALIDATE_REFESH }              = require("../middleware/request/refesh"),
    { VALIDATE_UPDATE_AVATAR }       = require("../middleware/request/update-avatar"),
    { VALIDATE_GET_CHANNEL_MESSAGE } = require("../middleware/request/get-channel-message"),
    { get_channel_message }          = require("../controller/channel")


router.post('/register', [ VALIDATE_REGISTER ], register_user)
router.post('/refesh', [ VALIDATE_REFESH ], refesh)
// router.put('/', [ VALIDATE_UPDATE_AVATAR ], register_user)
router.get('/channel-message', [VALIDATE_GET_CHANNEL_MESSAGE], get_channel_message )
module.exports = router;