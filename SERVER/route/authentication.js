/**
 * define
 */
var express           = require('express')
var { VALIDATE_LOGIN } = require("../middleware/request/login")
var router            = express.Router()


router.post('/login', [ VALIDATE_LOGIN ], function(req, res){

    var data = { hung: "đẹp trai" }
    return res.end(JSON.stringify(data));
})
router.post('/logout', function(req, res){

    var data = { hung: "đẹp trai" }
    return res.end(JSON.stringify(data));
})


module.exports = router;