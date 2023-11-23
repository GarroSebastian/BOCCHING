const { Schema, model } = require("mongoose");

const RequestSchema = new Schema({
    emisor: { type: Schema.ObjectId, ref: "User" },
    receptor: { type: Schema.ObjectId, ref: "User" },
    tipo: Number,
    viewer: { type: Number, default: 0 }, 
    date: { type: Date, default: Date.now }
});

module.exports = model("Request", RequestSchema);