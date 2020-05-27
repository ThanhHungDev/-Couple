var User     = require("../model/UserAccount"),
    Location = require("../model/Location"),
    Channel  = require("../model/Channel")

module.exports.register_user = function( req, res ){
    var { name, email, password, head_phone, phone, anonymous } = req.body
    var response = {}
    if(req.error){
        response = { code: 422, message: "have error input", internal_message: "have error input", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    User.findOne({ email })
    .then( userUnique => {
        if(userUnique){
            throw new Error("このユーザーは既に存在します")
        }
        return  Location.findOne({headPhone : head_phone })
    })
    .then(location => {
        if(!location){
            throw new Error("システムに場所がありません")
        }
        var avatarUrl = anonymous ? "/image/avatar-anonymous.png" : "/image/avatar.jpg"
        var newUser = new User({
            name, email, password, 
            phones : [{ locationPhone: location._id, phoneNumber: phone }], 
            avatar: avatarUrl,
            anonymous
        })
        return newUser.save()
    })
    .then( user => {
        console.log(user, "save success")
        createChannelDefault(user)
        response = { code: 200, message: res.__("save succcess"), internal_message: res.__("save succcess"), 
        data : { user : user.toJSONFor() } }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        response = { code: 500, message: error.message, 
        internal_message: error.message, 
        errors : [ { message : error } ] }
        return res.end(JSON.stringify(response))
    });
}

function createChannelDefault(user){
    
    var dfChannelConsulting = new Channel({
        name : "consulting-web-design-" + user._id.toString(),
        user : [
            user._id
        ]
    })
    dfChannelConsulting.save()
    var dfChannelTechnical = new Channel({
        name : "technical-support-" + user._id.toString(),
        user : [
            user._id
        ]
    })
    dfChannelTechnical.save()
    var dfChannelWeb = new Channel({
        name : "submit-web-request-" + user._id.toString(),
        user : [
            user._id
        ]
    })
    dfChannelWeb.save()
}