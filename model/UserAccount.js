
var bcrypt   = require('bcrypt');
    CONFIG   = require("../config"),
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var salt = CONFIG.salt

const UserAccountSchema = new Schema(
    {
        // name field
        name: {
            type: String,
            // custom validation for name
            validate: {
                validator: function (value) {

                    return value.length >= 3 && value.length <= 50
                },
                message: 'Name should be between 3 and 50 characters'
            },
            required: [true, 'Name is required']
        },
        // email field
        email: {
            type: String,
            required: [true, 'Email is required'],
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
        phones: [
            {
                locationPhone: {
                    type: Schema.Types.ObjectId,
                    ref: 'location',
                    required: [true, 'Location Phone Number is required']
                },
                phoneNumber: {
                    type: String,
                    required: [true, 'Phone Number is required']
                }
            }
        ],
        avatar: {
            type: String,
            required: [true, 'Avatar is required'],

            validate: {
                validator: function (avatarUrl) {
                    return avatarUrl.match(/\.(jpeg|jpg|gif|png)$/)
                },
                message: '{VALUE} must be url'
            }
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
            default: 'User'
        },
        anonymous : {
            type: Boolean,
            default: false
        },
        flagActive: {

            type: Number,
            default: 1
        },
        tokenRefesh: [
            { 
                type   : mongoose.Schema.Types.ObjectId,
                ref    : 'token_refesh'
            }
        ]
    },{
        timestamps: true
    }
)


UserAccountSchema.methods.toJSONFor = function () {
    var { _id, name, email, phones, avatar, userType, flag_active } = this;
    return { _id, name, email, phones, avatar, userType, flag_active }

}
////$2a$05$eis66j.YEPBDLR179f2lwe9s3orpDTEPq9HwSkQ.jo.NRB06Eeovm
UserAccountSchema.methods.checkValidPassword = function (password) {
    return bcrypt.compare(password, this.password)
        .then(function (result) {
            return result
        })
        .catch(err => {
            console.log(err, "lỗi core")
            return false
        })
}

UserAccountSchema.methods.hashPassword = function (password) {

    var saltHash = bcrypt.genSaltSync(salt)
    var hash = bcrypt.hashSync(password, saltHash)
    return hash
}
UserAccountSchema.methods.getPassword = function(){
    
    return this.password
}

UserAccountSchema.pre('save', function (next) {
    if (this.password && this.isNew) {
        var passwordHash = this.hashPassword(this.password)
        this.password = passwordHash;
    }
    return next()
})

module.exports = mongoose.model("user_account", UserAccountSchema)