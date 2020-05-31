

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
        }
    ])
    .then(lstChannel => {
        return lstChannel.map((channel, index) => {
            var Admins = CONFIG.ACCOUNT_ADMIN
            var admin = Admins.find( admin => channel.name.includes(admin.channel))
            var channelActive = index == 0
            if(!channel.message.length){
                channel.message.push({type:false,content:"Hello, tôi là Admin hệ thống, tôi có thể giúp gì cho bạn? "})
            }else{
                channel.message = channel.message.map( message => {
                    if(_userId == message.user.toString()){
                        return { type: true, content: message.body }
                    } 
                    return { type: false, content: message.body }
                })
            }
            /// channel have field online
            return { id: channel._id,
                name: admin.name, avatar: admin.avatar, 
                isOnline: true, isActive: channelActive, timeEndOnline: "2020-05-10 14:47:00", 
                message: channel.message }
        })
    })
}

module.exports = mongoose.model("channel", ChannelSchema)