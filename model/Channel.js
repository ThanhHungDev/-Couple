

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const ChannelSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Body message is required']
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref : 'user_account'
            }
        ]
    }, {
    timestamps: true
})
ChannelSchema.statics.getChannelMessage = function ( _userId ) {
    return this.find({ user: _userId })
    .populate({
        path : "user",
        match : {
            _id: { $ne : _userId }
        }
    })
    .then(lstChannel => {
        return lstChannel.map((channel, index) => {
            var admin = channel.user[0]
            var channelActive = index == 0
            return { id: channel._id,
                name: admin.name, avatar: admin.avatar, 
                isOnline: true, isActive: channelActive, timeEndOnline: "2020-05-10 14:47:00", 
                message: [{type:false,content:"Rachel Zane Rachel Zane Rachel Zane Rachel Zane"}] }
        })
    })
}

module.exports = mongoose.model("channel", ChannelSchema)