

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const TokenAccessSchema = new Schema({
    
    token: {
        type: String,
        required: [ true, 'Token is required' ]
    },
    user: { 
        type   : mongoose.Schema.Types.ObjectId,
        ref    : 'user_account'
    },
    period: {
        type : Date
    },
    detect : { 
        type    : String
    }
})
TokenAccessSchema.pre('save', function (next) {
    
    this.period = new Date
    return next()
})

module.exports = mongoose.model("token_access", TokenAccessSchema)



// browser: "Chrome"
// browserMajorVersion: 81
// browserVersion: "81.0.4044.138"
// os: "Mac OS X"
// osVersion: "10_15_4"