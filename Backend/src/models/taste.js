const  { Schema, model } = require("mongoose");

const TasteSchema = new Schema({
    usuario: { type: Schema.ObjectId, ref: "User"},
    franquicia: String,
    juego_de_mesa: String,
    hobby: String,
    pasatiempo: String,
    alimento: String,
    musica: String,
    creador_de_contenido: String,
    deporte: String
});

module.exports = model("Taste", TasteSchema);