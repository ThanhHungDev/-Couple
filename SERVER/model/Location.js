var mongoose = require("mongoose")
var Schema = mongoose.Schema

module.exports.PhoneSchema =  new Schema(
    {
        location: { 
            type: Schema.Types.ObjectId, 
            ref: "location", 
            default: null 
        },
        phoneNumber : {
            type: String,
            required: [true, "can't be blank"],
            // custom validation for phone number
            validate: {
                validator: function(value) {

                    return String(value).length >= 8
                },
                message: 'Phone number must have at least 8 characters'
            }
        }
    }
)

