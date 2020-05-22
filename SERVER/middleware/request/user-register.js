const { Validator } = require('node-input-validator')



module.exports.VALIDATE_REGISTER = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        email: 'required|email',
        password: 'required'
    },{
        'email.required': 'hùng đẹp trai'
    });
     
    var matched = await validate.check()
    if (!matched) {
        return res.end(JSON.stringify(validate.errors));
    }
    next();
}