var bcrypt     = require('bcrypt-nodejs');
    CONFIG     = require("../config"),
    mongoose    = require('mongoose'),
    Schema      = mongoose.Schema

var salt = CONFIG.salt

var PhoneSchema =  new Schema(
    {
        headPhoneNumber: { 
            type: Schema.Types.String, 
            default: "+00" 
        },
        number : {
            type: String,
            required: [ true, "can't be blank" ],
            // custom validation for phone number
            validate: {
                validator: function(value) {
                    
                    return String(value).length >= 8
                },
                message: 'Phone number must have at least 8 characters'
            },
        }
    }
)

const UserSchema = new Schema({
    // name field
    name: {
        type: String,
        // custom validation for name
        validate: {
            validator: function (value) {

                return value.length >= 3
            },
            message: 'Name must have at least 3 characters'
        },
        required: [true, 'Name is required']
    },
    // email field
    email: {
        type: String,
        required: true,
        // email cannot be duplicated
        unique: [true, 'Email is existed'],
        lowercase: true,
        validate: {
            validator: function (value) {
                var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    // password field
    password: {
        type: String,
        // custom validation for password
        validate: {
            validator: function (value) {
                return value.length >= 6;
            },
            message: 'Password must have at least 6 characters'
        },
        required: [true, 'Password is required']
    },
    // list of phone numbers
    phones: {
        type: [ PhoneSchema ],
        default: null
    },
    userType: {
        type: String,
        enum: ['User', 'Admin'],
        // custom validation for password
        validate: {
            validator: function (value) {
                return ['User', 'Admin'].includes(value)
            },
            message: '{VALUE} must have at User or Admin'
        },
        required: [true, 'Password is required']
    },
    tokenRefesh : {
        type : String
    }
})


UserSchema.methods.toJSONFor = function () {
    var { name, email, phones, userType, tokenRefesh} = this;
    return { name, email, phones, userType, tokenRefesh}
    
}
UserSchema.methods.validPassword = async function (password) {
    return bcrypt.compare(password, this.password)
    .then(function(result) {
        return result
    })
    .catch(err => {
        return false
    })
}
UserSchema.methods.hashPassword = async function (password) {
    
    var saltHash = bcrypt.genSaltSync(salt)
    var hash = bcrypt.hashSync(password, saltHash)
    return hash
}
UserSchema.pre('save', async function(next) {
    if(this.password){
        var passwordHash = await this.hashPassword(this.password)
        this.password = passwordHash;
    }
    return next()
})

module.exports = mongoose.model("user", UserSchema)