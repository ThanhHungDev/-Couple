/**
 * define
 */
var express           = require('express')
var router            = express.Router()


router.get('/login', function(req, res){

    var data = { hung: "đẹp trai" }
    return res.end(JSON.stringify(data));
})

module.exports = router;