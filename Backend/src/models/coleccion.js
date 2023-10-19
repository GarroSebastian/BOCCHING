const { Schema, model } = require("mongoose");

const CollectionSchema = new Schema({
    idUsuario: {
        type: Number,
        required: true
    },
    idTipo: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        required: true
    },
    Subtipo: {
        type: String,
        maxLength: 9
    },
    Nombre: {
        type: String,
        required: true
    },
    idAfinidad: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5, 6],
        required: true
    },
    idDuracion: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
        required: true
    },
    idCompania: {
        type: String,
        maxLength: 3
    },
    PriNombre: {
        type: Number,
        enum: [0, 1, 2]
    },
    idPrivacidad: {
        type: Schema.Types.ObjectId,
        ref: 'privacity'
    }
});

module.exports = model("Collection", CollectionSchema);