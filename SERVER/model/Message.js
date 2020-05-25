

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const MessageSchema = new Schema(
    {
        channel : {
            type: Schema.Types.ObjectId,
            ref : 'channel'
        },
        user: {
            type: Schema.Types.ObjectId,
            required: [ true, 'User send message is required' ]
        },
        body: {
            type: String,
            required: [ true, 'Body message is required' ]
        },
        attachment: {
            type: String
        }
    }, {
        timestamps: true
    }
)

UserAccountSchema.pre('save', async function(next) {
    if(this.password){
        var passwordHash = await this.hashPassword(this.password)
        this.password = passwordHash;
    }
    return next()
})

module.exports = mongoose.model("message", MessageSchema)


