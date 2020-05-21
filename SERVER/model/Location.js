var mongoose = require("mongoose"),
    Schema   = mongoose.Schema

const LocationSchema = new Schema(
    {
        name: { 
            type: String,
            required: [true, "Name location can't be blank"],
            // custom validation for phone number
            validate: {
                validator: function(value) {

                    return value.length >= 3 && value.length <= 20 
                },
                message: 'Name location should be between 3 and 20 characters'
            }
        },
        subname : {
            type: String,
            required: [true, "subname location can't be blank"],
            // custom validation for phone number
            validate: {
                validator: function(value) {

                    return value.length >= 1 && value.length <= 5
                },
                message: 'Name location should be between 1 and 5 characters'
            }
        },
        headPhone : {
            type: String,
            required: [true, "head phone can't be blank"],
            // custom validation for phone number
            validate: {
                validator: function(value) {

                    return value.length >= 1 && value.length <= 5
                },
                message: 'Head Phone should be number'
            }
        }
    }
)
LocationSchema.methods.toJSONFor = function () {
    var { name, subname } = this
    return { name, subname }
}

module.exports = mongoose.model("location", LocationSchema)
