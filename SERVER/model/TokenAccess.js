

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
        browser_major_version: {
            type    : String
        },
        browser_version : {
            type    : String
        },
        os : {
            type    : String
        },
        os_version : {
            type    : String
        }
    }
})


module.exports = mongoose.model("token_access", TokenAccessSchema)