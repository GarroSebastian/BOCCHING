const  { Schema, model } = require("mongoose");

const TasteSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref: "User"},
    tipo: { type: Number, required: true },
    nombre: { type: String, required: true, default: ""},
    subtipo: { type: String, required: false, default: ""},
    afinidad: { type: Number, required: false },
    duracion: { type: Number, required: false },
    compania: { type: Number, required: false }
});

module.exports = model("Taste", TasteSchema);