/**
 * define
 */
var express           = require('express')
var router            = express.Router()

var LoginController   = require("../controller/LoginController.js")

router.get('/login', LoginController.userLogin)
router.get('/logout', LoginController.userLogout)

//https://medium.com/@stockholmux/managing-modularity-and-redis-connections-in-node-js-eb9232f8c1ba
router.apiSetRedis = function(REDIS){
	LoginController.setREDIS(REDIS);
}

module.exports = router;