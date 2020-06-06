/**
 * define
 */
var express               = require('express')
var router                = express.Router()
var { contact_mailler } = require("../controller/mailler"),
    { VALIDATE_CONTACT_MAILLER }             = require("../middleware/request/contact-mailler")

router.post('/contact', [VALIDATE_CONTACT_MAILLER] , contact_mailler)
module.exports = router;