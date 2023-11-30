const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
    mensaje: {
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
    date: { type: Date, default: Date.now },
    ano: { type: Number, required: false },
    mes: { type: Number, required: false },
    dia: { type: Number, required: false },
    diaSem: { type: Number, required: false },
    hora: { type: Number, required: false },
    minuto: { type: Number, required: false }
});

module.exports = model("Message", MessageSchema);