
var bcrypt   = require('bcrypt-nodejs');
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
        flagActive: {

            type: Number,
            default: 1
        },
        tokenRefesh: {

            token: {
                type: String
            },
            detect : {
                browser : {
                    type    : String
                },
                browserMajorVersion: {
                    type    : String
                },
                browserVersion : {
                    type    : String
                },
                os : {
                    type    : String
                },
                osVersion : {
                    type    : String
                }
            }
        }
    },{
        timestamps: true
    }
)


UserAccountSchema.methods.toJSONFor = function () {
    var { name, email, phones, avatar, userType, flag_active } = this;
    return { name, email, phones, avatar, userType, flag_active }

}

UserAccountSchema.methods.validPassword = async function (password) {
    return bcrypt.compare(password, this.password)
        .then(function (result) {
            return result
        })
        .catch(err => {
            return false
        })
}

UserAccountSchema.methods.hashPassword = async function (password) {

    var saltHash = bcrypt.genSaltSync(salt)
    var hash = bcrypt.hashSync(password, saltHash)
    return hash
}

UserAccountSchema.pre('save', async function (next) {
    if (this.password) {
        var passwordHash = await this.hashPassword(this.password)
        this.password = passwordHash;
    }
    return next()
})

module.exports = mongoose.model("user_account", UserAccountSchema)