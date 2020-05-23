

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const TokenAccessSchema = new Schema({
    
    token: {
        type: String,
        required: [true, 'Token is required']
    },
    user: { 
        type   : mongoose.Schema.Types.ObjectId,
        ref    : 'user_account'
    },
    detect : {
        browser : {
            type    : String
        },
        browserMajorVersion: {
            type    : String
        },
        browserVersion : {
            type    : String
        },
        os : {
            type    : String
        },
        osVersion : {
            type    : String
        }
    }
})


module.exports = mongoose.model("token_access", TokenAccessSchema)