const { Schema, model } = require("mongoose");

const PrivacySettingSchema = new Schema({
    idUsuario: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Referencia al modelo de usuario
    },
    Universidad: {
        type: String,
        maxLength: 6
    },
    Amigos: {
        type: Boolean
    },
    Genero: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro', 'Mismo género']
    }
});

module.exports = model("privacity", PrivacySettingSchema);