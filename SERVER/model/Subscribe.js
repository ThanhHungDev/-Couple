var mongoose = require("mongoose");

var SubcribeSchema = new mongoose.Schema(
    {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'user_account', default: null },
        endpoint : {
            type: String,
            required: [true, "can't be blank"],
        },
        keys: {
            type : Object , 
            "default" : []
        }
    },
    { timestamps: true }
);

SubcribeSchema.methods.toJSONFor = function () {
    return {
        author: this.author,
        endpoint: this.endpoint,
        keys: this.keys
    };
};

module.exports = mongoose.model("subcribers", SubcribeSchema);
