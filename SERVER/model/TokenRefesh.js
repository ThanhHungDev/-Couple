

var mongoose = require('mongoose'),
Schema = mongoose.Schema

const TokenRefeshSchema = new Schema({
    token: {
        type: String,
        required: [ true, 'Token is required' ]
    },
    detect : {
        type    : String
    }
})


module.exports = mongoose.model("token_refesh", TokenRefeshSchema)



// browser: "Chrome"
// browserMajorVersion: 81
// browserVersion: "81.0.4044.138"
// os: "Mac OS X"
// osVersion: "10_15_4"