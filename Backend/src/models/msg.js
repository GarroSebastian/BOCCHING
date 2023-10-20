const { Schema, model } = require("mongoose");

const CollectionSchema = new Schema({
    Mensaje: {
        type: String,
        maxLength: 600,
    },
    idEmisor: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    idReceptor: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    ano: {
        type: Number, // Añadimos ano como número entero
    },
    mes: {
        type: Number, // Añadimos mes como número entero
    },
    dia: {
        type: Number, // Añadimos dia como número entero
    },
    hora: {
        type: Number, // Añadimos hora como número entero
    },
    min: {
        type: Number, // Añadimos min como número entero
    },
    diaSem: {
        type: String, // Añadimos diaSem como cadena
        maxLength:8,
    },


});

module.exports = model("Collection", CollectionSchema);