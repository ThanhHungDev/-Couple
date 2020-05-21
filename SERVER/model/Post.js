

var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const PostSchema = new Schema(
    {

        title: {
            type: String,
            required: [true, 'Title Post is required']
        },
        slug: {
            type: String,
            required: [true, 'Body message is required']
        },
        excerpt: String,

        content: {
            type: String
        },
        thumbnail: String,
        publish: String,
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
        seo: {
            sitename: String,
            image: String,
            keyword: String,
            description: String
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("post", PostSchema)


