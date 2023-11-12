const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
    text: {
        type: String,
        maxLength: 600,
    },
    emisor: { 
        type: Schema.ObjectId,
        ref: "User"
    },
    receptor: {
        type: Schema.ObjectId,
        ref: "User"
    },
    created_at: {
        type: String
    }

});

module.exports = model("Message", MessageSchema);