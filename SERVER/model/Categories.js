

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const CategoriesSchema = new Schema(
{
    name: {
        type: String,
        required: [true, 'Title is required'],
        validate: {
            validator: function(value) {

                return value.length >= 3 && value.length <= 100
            },
            message: 'Title should be between 3 and 100 characters'
        }
    },
    slug: {
        type: String,
        required: [true, 'Slug is required'],

        validate: {
            validator: function(value) {

                return value.length >= 3 && value.length <= 100
            },
            message: 'Slug should be between 3 and 100 characters'
        }
    },
    excerpt: {
        type: String,
        required: [true, 'Excerpt is required'],

        validate: {
            validator: function(value) {

                return value.length >= 3 && value.length <= 100
            },
            message: 'Excerpt should be between 3 and 100 characters'
        }
    },

    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required'],
        validate: {
            validator: function(value) {

                return value.length >= 3 && value.length <= 100
            },
            message: 'Thumbnail should be between 3 and 100 characters'
        }
    },
    background: {
        type: String,
        required: [true, 'Background is required'],
        validate: {
            validator: function(value) {

                return value.length >= 3 && value.length <= 100
            },
            message: 'Background should be between 3 and 100 characters'
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        validate: {
            validator: function(value) {

                return value.length >= 3 && value.length <= 1000
            },
            message: 'Description should be between 3 and 1000 characters'
        }
    },
    seo: {
        sitename: {
            type: String
        },
        image: {
            type: String
        },
        keyword: {
            type: String
        },
        description: {
            type: String
        }
    },
    categoryParent : {
        type : Schema.Types.ObjectId
    }
}, {
    timestamps: true
}
)

module.exports = mongoose.model("categories", CategoriesSchema)


