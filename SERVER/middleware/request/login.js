const node_validator = require('node-input-validator')

node_validator.extend('browserVersion', ({ value, args }, validator) => {
    if (args.length) {
        throw new Error('Invalid seed for rule browserVersion');
    }
    if(value.length > args[0] + 1 ){
        return false
    }
    // var email = validator.inputs['email']
   
    return value.match(/^([0-9 \.]+)$/)
});
var { Validator } = node_validator


module.exports.VALIDATE_LOGIN = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        email: 'required|email',
        password: 'required',
        browser: "required",
        browserMajorVersion: "required|numeric",
        browserVersion: "required|browserVersion",
        os: "required",
        osVersion: "required"
    },{
        'email.required': 'hùng đẹp trai'
    });
     
    var matched = await validate.check()
    if (!matched) {
        return res.status(422).end(JSON.stringify(validate.errors));
    }
    next();
}