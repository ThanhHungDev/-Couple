var User        = require("../model/UserAccount"),
    Location    = require("../model/Location"),
    Channel     = require("../model/Channel"),
    TokenAccess = require("../model/TokenAccess"),
    TokenRefesh = require("../model/TokenRefesh"),
    crypto      = require('crypto'),
    mongoose    = require("mongoose"),
    CONFIG      = require("../config")



module.exports.get_channel_message = function( req, res ){

    var { access, browser, browserMajorVersion, 
        browserVersion, os, osVersion } = req.body,
        { 'user-agent': userAgent } = req.headers,
        detect                      = { browser, browserMajorVersion, browserVersion, 
                                            os, osVersion, userAgent },
        response = {}
    if(req.error){
        response = { code: 422, message: "have error input", internal_message: "have error input", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }
    var lteDate = new Date((new Date).getTime() - (CONFIG.TimeExpireAccessToken * 1000) )
    TokenAccess.findOne({ token: access, period: { $gte: lteDate, $lte: new Date }})
    .then( token => {
        if( !token ){
            throw new Error("token không tồn tại")
        }
        return Channel.getChannelMessage(token.user)
    })
    .then( channels => {
        response = { code: 200, message: res.__("get channel succcess"), internal_message: res.__("get channel succcess"), 
        data : channels }
        return res.end(JSON.stringify(response))
    })
    .catch( error => {
        response = { code: 500, message: error.message, 
            internal_message: error.message, 
            errors : [ { message : error } ] }
        return res.end(JSON.stringify(response))
    })
}
