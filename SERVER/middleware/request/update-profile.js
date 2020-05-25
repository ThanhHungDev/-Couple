const { Validator } = require('node-input-validator')

module.exports.VALIDATE_LOGIN = async function( req, res, next ){
    
    let validate = new Validator(req.body, {
        tokenAccess: 'required|hash:md5',
        userId: 'required|hash:md5',
    });
     
    var matched = await validate.check()
    if (!matched) {
        req.error = validate.errors
    }
    next();
}