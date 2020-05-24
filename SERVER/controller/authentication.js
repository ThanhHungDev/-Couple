var User        = require("../model/UserAccount"),
    TokenAccess = require("../model/TokenAccess"),
    TokenRefesh = require("../model/TokenRefesh"),
    crypto      = require('crypto')

var md5sum = crypto.createHash('md5');

module.exports.login = function( req, res ){

    var { userLogin, email, password, browser, browserMajorVersion, browserVersion, os, osVersion }   = req.body
    var { 'user-agent' : userAgent } = req.headers,
        detect                        = { browser, browserMajorVersion, browserVersion, os, osVersion, userAgent }

    var response = {}
    if(req.error){
        response = { code: 422, message: "có lỗi validate", internal_message: "have error input", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }

    ///search location { _id : new ObjectId('5ec8940a4a7c080966d9e911')}
    return User.findOne({ email })
    .populate('tokenRefesh')
    .then(user => {
        if(!user){
            console.log(user, "không tìm thấy user")
            throw new Error('không tìm thấy email user')
        }
        userLogin = user
        return user.checkValidPassword(password)
    })
    .then( equalPassword => { 
        if(!equalPassword){
            throw new Error('email hoặc password không hợp lệ')
        }
        return createToken( userLogin, detect )
    })
    .then( tokens => {
        response = { code: 200, message: "có tồn tại 1 user", 
        internal_message: res.__("login success"), data : { tokens, user : userLogin.toJSONFor() } }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        console.log(error)
        response = { code: 302, message: "have error save", internal_message: error.message }
        return res.end(JSON.stringify(response))
    });
}

function createToken( user, detect ){
    /// check tokenrefesh in user
    var tokenRefesh = null,
        tokenAccess = null


    if(user.tokenRefesh.length){
        var refesh      = user.tokenRefesh.find( refesh => refesh.detect == JSON.stringify({ ...detect } ))
            tokenRefesh = refesh.token
            console.log("đã tồn tại sẵn" + tokenRefesh)
    }
    if(!refesh){
        tokenRefesh = crypto.createHash('md5').update(
            JSON.stringify({ idUser: user._id.toString(), ...detect })
        ).digest('hex')
        
    
        var newTokenRefesh = new TokenRefesh({
            token : tokenRefesh,
            detect : JSON.stringify({ ...detect } )
        })
        newTokenRefesh.save()
        .then(result => {
            user.tokenRefesh.push(result._id)
            user.save()
        })
    }
    
    /// save token assess
    tokenAccess = crypto.createHash('md5').update(
        JSON.stringify({ ... detect })
    ).digest('hex')
    var newTokenAccess = new TokenAccess({
        token: tokenAccess,
        user: user._id,
        detect : JSON.stringify({ ...detect, time: (new Date).getTime() } )
    })
    newTokenAccess.save()
    return { tokenRefesh, tokenAccess }
}


// {
//     "code": 200,
//     "message": "có tồn tại 1 user",
//     "internal_message": "login success",
//     "data": {
//         "tokens": {
//             "tokenRefesh": "040038b3110150667d4e58ce6e94331a",
//             "tokenAccess": "394cdbf8004fa3e76d6301328d8290de"
//         },
//         "user": {
//             "name": "hùng cực kì đẹp trai",
//             "email": "thanhhung.x@gmail.com",
//             "phones": [
//                 {
//                     "_id": "5ec9103b7f62091a01544211",
//                     "locationPhone": "5ec893939b222f094b7d79d5",
//                     "phoneNumber": "34563788"
//                 }
//             ],
//             "avatar": "image/avatar.jpg",
//             "userType": "User"
//         }
//     }
// }