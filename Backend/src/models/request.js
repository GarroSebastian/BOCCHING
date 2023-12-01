const { Schema, model } = require("mongoose");

const RequestSchema = new Schema({
    emisor: { type: Schema.ObjectId, ref: "User" },
    receptor: { type: Schema.ObjectId, ref: "User" },
    tipo: { type: Number },
    viewed: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    ano: { type: Number },
    mes: { type: Number },
    dia: { type: Number },
    diaSem: { type: String },
    hora: { type: Number },
    minuto: { type: Number }
});

module.exports = model("Request", RequestSchema);