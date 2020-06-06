
const node_validator = require('node-input-validator')

var { Validator } = node_validator


module.exports.VALIDATE_CONTACT_MAILLER = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        name               : "required",
        email              : "required",
        phone              : "required",
        message            : "required",
        browser            : "required",
        browserMajorVersion: "required",
        browserVersion     : "required|browserVersion",
        os                 : "required",
        osVersion          : "required"
    },{
        'name.required'               : res.__("Name is required"),
        'email.required'              : res.__("Email is valid"),
        'phone.required'              : res.__("Phone is required"),
        'browser.required'            : res.__("Detect format valid"),
        'browserMajorVersion.required': res.__("Detect format valid"),
        'browserVersion.required'     : res.__("Detect format valid"),
        'os.required'                 : res.__("Detect format valid"),
        'osVersion.required'          : res.__("Detect format valid")
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}