const node_validator = require('node-input-validator')

node_validator.extend('formatHeadPhone', ({ value, args }, validator) => {
    if (args.length > 2) {
        throw new Error('Invalid seed for rule formatHeadPhone');
    }
    if(value.length > args[0] + 1 ){
        return false
    }
    // var email = validator.inputs['email']
   
    return value.match(/^(\+{1})([0-9]{2,3})$/)
});
var { Validator } = node_validator



module.exports.VALIDATE_REGISTER = async function( req, res, next ){

    console.log(req.body)
    let validate = new Validator(req.body, {
        name: "required|minLength:3|maxLength:50",
        email: 'required|email',
        password: 'required|minLength:6',
        head_phone: ['required', 'formatHeadPhone'],
        phone: 'required|minLength:8|maxLength:11'
    },{
        'email.required': "Email is required custom"
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}




