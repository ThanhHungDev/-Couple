const { Validator } = require('node-input-validator')



module.exports.VALIDATE_REGISTER = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        email: 'required|email',
        password: 'required',
        head_phone: ['required', 'regex:(+{1}[0-9]{2,3})'],
        phone : 'required|min:8|max:11',
        avatar : "required"
    },{
        'email.required': 'hùng đẹp trai'
    });
     
    var matched = await validate.check()
    if (!matched) {
        return res.end(JSON.stringify(validate.errors));
    }
    next();
}