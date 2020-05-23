var User     = require("../model/UserAccount"),
    Location = require("../model/Location")

module.exports.register_user = function( req, res ){
    var { name, email, password, head_phone, phone } = req.body
    var response = {}
    if(req.error){
        response = { code: 422, message: "có lỗi validate", internal_message: "have error input", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    ///search location { _id : new ObjectId('5ec8940a4a7c080966d9e911')}
    Location.findOne({headPhone : head_phone })
    .then(location => {
        
        var newUser = new User({
            name, email, password, 
            phones : [{ locationPhone: location._id, phoneNumber: phone }], 
            avatar: "image/avatar.jpg"
        })
        return newUser.save()
    })
    .then( user => {
        console.log(user, "save success")
        response = { code: 200, message: "lưu thành công", internal_message: "save succcess", 
        data : { user : user.toJSONFor() } }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        response = { code: 500, message: "có lỗi hệ thống", 
        internal_message: "have error save", 
        errors : [ { message : error.message } ] }
        return res.end(JSON.stringify(response))
    });
}