

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
        style : {
            type: String
        },
        attachment: [
            { type: String }
        ]
    }, {
        timestamps: true
    }
)


module.exports = mongoose.model("message", MessageSchema)


