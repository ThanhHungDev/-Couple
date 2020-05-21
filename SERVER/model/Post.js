

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

const PostSchema = new Schema(
    {

        title: {
            type: String,
            required: [true, 'Title is required']
        },
        slug: {
            type: String,
            required: [true, 'Slug is required']
        },
        excerpt: {
            type: String,
            required: [true, 'Excerpt is required']
        },

        content: {
            type: String,
            required: [true, 'Content is required']
        },
        thumbnail: {
            type: String,
            required: [true, 'Thumbnail is required']
        },
        publish: {
            type: Number,
            default : 0
        },
        categories: [
            {
                type: Schema.Types.ObjectId,
                required: [true, 'post category is required']
            }
        ],
        like: {
            type: Number,
            default: 0
        },
        view: {
            type: Number,
            default: 0
        },
        links: {
            type: String
        },
        rating : {
            type : Schema.Types.ObjectId
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
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("post", PostSchema)


