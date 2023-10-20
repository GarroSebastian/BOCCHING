const Mensaje = require("../models/request");

const mensajeController = {
    saveRequest: (req, res) => {
        const data = req.body;
        const newMensaje = new Mensaje();

        newMensaje.emisor = req.token_usuarioId;
        newMensaje.receptor = req.params.id;
        newMensaje.mensaje = data.mensaje;
        newMensaje.ano = data.ano;
        newMensaje.mes = data.mes;
        newMensaje.dia = data.dia;
        newMensaje.hora = data.hora;
        newMensaje.min = data.min;
        newMensaje.diaSem = data.diaSem;
     newMensaje.save((error, mensajeGuardado) => {
            if (error) {
                console.error("Error al guardar el mensaje:", error);
                return res.status(500).send("Error al guardar el mensaje");
            }

            if (mensajeGuardado) {
                // El mensaje se guardó con éxito
                return res.status(200).send({ message: "Mensaje enviado con éxito", mensaje: mensajeGuardado });
            } else {
                // No se pudo guardar el mensaje
                return res.status(500).send("No se pudo enviar el mensaje");
            }
        });
    },
};

module.exports = mensajeController;
