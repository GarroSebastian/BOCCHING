const  { Schema, model } = require("mongoose");

const TasteSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref: "User"},
    text: String
});

module.exports = model("Taste", TasteSchema);