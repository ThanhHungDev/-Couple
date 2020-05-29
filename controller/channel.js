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

    
}
