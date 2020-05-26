
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const UserRatingSchema = new Schema(
    {
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
        avatar: {
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
        value: {
            type: Number,
            default : Math.random() + 4
        }
    },{
        timestamps: true
    }
)


module.exports = mongoose.model("user_ratting", UserRatingSchema)