var User     = require("../model/UserAccount"),
    Location = require("../model/Location"),
    Channel = require("../model/Channel")

module.exports.register_location = function( req, res ){
    var { name, subname, headPhone } = req.body
    var response = {}
    if(req.error){
        response = { code: 422, message: "have error input", internal_message: "have error input", 
        errors : [ req.error ] }
        return res.end(JSON.stringify(response))
    }
}
