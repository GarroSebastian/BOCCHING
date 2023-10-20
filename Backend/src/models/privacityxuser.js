const { Schema, model } = require("mongoose");

const PrivacityxUsuarioSchema = new Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: 'user', // Referencia al modelo de Usuarios
        required: true, // Es obligatorio
    },
    Dato: {
        type: Number,
        enum: [0, 1, 2, 3],
        required: true, // Es obligatorio
    },
    idPrivacidad: {
        type: Schema.Types.ObjectId,
        ref: 'privacity', // Referencia al modelo de Privacidades
    }
});

module.exports = model("PrivacityxUsuario", PrivacityxUsuarioSchema);