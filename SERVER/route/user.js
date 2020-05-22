/**
 * define
 */
var express           = require('express')
var { VALIDATE_REGISTER } = require("../middleware/request/user-register")
var router            = express.Router()


router.post('/register', [ VALIDATE_REGISTER ], function(req, res){

    var data = { hung: "đẹp trai" }
    return res.end(JSON.stringify(data));
})


module.exports = router;