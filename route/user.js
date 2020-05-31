/**
 * define
 */
var express               = require('express')
var router                = express.Router()
var formidable = require('formidable')
var fs = require('fs')
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname )
  }
})
console.log( __dirname , " hugnt")
var upload = multer({ storage: storage })

var { register_user, refesh }        = require("../controller/user"),
    { VALIDATE_REGISTER }            = require("../middleware/request/register"),
    { VALIDATE_REFESH }              = require("../middleware/request/refesh"),
    { VALIDATE_UPDATE_AVATAR }       = require("../middleware/request/update-avatar"),
    { VALIDATE_GET_CHANNEL_MESSAGE } = require("../middleware/request/get-channel-message"),
    { get_channel_message }          = require("../controller/channel")


router.post('/register', [ VALIDATE_REGISTER ], register_user)
router.post('/refesh', [ VALIDATE_REFESH ], refesh)
// router.put('/', [ VALIDATE_UPDATE_AVATAR ], register_user)
router.post('/channel-message', [VALIDATE_GET_CHANNEL_MESSAGE], get_channel_message )

router.post('/save-file', upload.single('image'), function (req, res) {
  
  if(!req.file || !req.file.filename ){
    response = { code: 500, message: res.__("save file error"), internal_message: res.__("save file error")}
  }else{
    response = { code: 200, message: res.__("save file success"), 
    internal_message: res.__("save file success"), data: { url : "/uploads/" + req.file.filename }}
  }
  return res.end(JSON.stringify(response))
});
module.exports = router;