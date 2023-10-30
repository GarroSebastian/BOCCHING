const  { Schema, model } = require("mongoose");

const TasteSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref: "User"},
    tipo: { type: Number, required: true, min: 0, max: 9, default: 0},
    nombre: { type: String, required: true, default: ""},
    subtipo: { type: String, required: false, default: ""},
    afinidad: { type: String, required: false, default: ""},
    posesion: { type: String, required: false, default: ""},
    duracion: { type: String, required: false, default: ""},
    conversacion: { type: String, required: false, default: ""},
    musica: { type: String, required: false, default: ""},
    frecuencia: { type: String, required: false, default: ""},
    compania: { type: String, required: false, default: ""}
});

module.exports = model("Taste", TasteSchema);