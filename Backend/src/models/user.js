const  { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    nombre: String,
    apellidos: String,
    correo: String,
    contrasena: String,
    apodo: String,
    id_genero: String,
    nacimiento: String,
    foto: String,
    carrera: String,
    facultad: String,
    especialidad: String,
    descripcion: String,
    mostrar_nombre: Boolean
});

module.exports = model("User", UserSchema);