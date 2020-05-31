

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CONFIG   = require("../config")

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
        ],
        online: {
            type : Date
        }
    }, {
    timestamps: true
})
ChannelSchema.statics.getChannelMessage = function ( _userId ) {
    return this
    .aggregate([
        { 
            $match: { user: _userId }
        },
        {
            $lookup: {
                from: "messages",
                localField: "_id",
                foreignField: "channel",
                as: "message"
            }
        },
        { 
            $unwind: "$user"
        },
        { 
            $match: { user: { $ne : _userId }}
        },
        {
            $lookup: {
                from: "user_accounts",
                localField: "user",
                foreignField: "_id",
                as: "user"
            }
        },
    ])
    .then(lstChannel => {
        return lstChannel.map((channel, index) => {
            var userChat = channel.user[0]
            var channelActive = index == 0
            if(!channel.message.length){
                channel.message.push({type:false,content:"Hello, tôi là Admin hệ thống, tôi có thể giúp gì cho bạn? ", style: "", attachment: []})
            }else{
                channel.message = channel.message.map( message => {
                    if(_userId == message.user.toString()){
                        return { type: true, content: message.body, style: message.style, attachment: message.attachment }
                    } 
                    return { type: false, content: message.body, style: message.style, attachment: message.attachment }
                })
            }
            /// channel have field online
            return { id: channel._id,
                name: userChat.name, avatar: userChat.avatar, 
                isOnline: true, isActive: channelActive, timeEndOnline: "2020-05-10 14:47:00", 
                message: channel.message }
        })
    })
}

module.exports = mongoose.model("channel", ChannelSchema)