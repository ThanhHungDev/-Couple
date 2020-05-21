

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const TokenAccessSchema = new Schema({
    
    token: {
        type: String,
        required: [true, 'Name is required']
    },
    user: { 
        type   : mongoose.Schema.Types.ObjectId,
        ref    : 'user_account'
    },
    detect : {
        browser              : String,
        browser_major_version: String,
        browser_version      : String,
        os                   : String,
        os_version           : String
    }
})


module.exports = mongoose.model("token_access", TokenAccessSchema)