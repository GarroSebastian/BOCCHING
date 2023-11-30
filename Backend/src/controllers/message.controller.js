const moment = require("moment");

const Message = require("../models/message");

const MessageController = {

    saveMessage: (req, res)=>{
        const data = req.body;
        const id_receptor = req.params.id;

        if(!data.mensaje || !id_receptor) return res.send("Rellena los campos necesarios");
        
        const newMessage = new Message();
        newMessage.emisor = req.token_usuarioId;
        newMessage.receptor = id_receptor;
        newMessage.mensaje = data.mensaje;
        newMessage.ano = moment(newMessage.date).format('YYYY');
        newMessage.mes = moment(newMessage.date).format('M');
        newMessage.dia = moment(newMessage.date).format('D');
        newMessage.diaSem = moment(newMessage.date).day();
        newMessage.hora = moment(newMessage.date).format('HH');
        newMessage.minuto = moment(newMessage.date).format('mm');

        newMessage.save().then((messageSaved)=>{
            if(!messageSaved) return res.send("Error al enviar el mensaje");

            return res.send(messageSaved);
        });
    },

    getReceivedMessages: (req, res)=>{
        const userid = req.token_usuarioId;

        Message.find({receptor: userid}).populate([{path: "emisor", select: "nombre apellidos apodo foto _id"}, {path: "receptor", select: "nombre apellidos apodo foto _id"}]).sort("-created_at").then((messages)=>{

            if(!messages) return res.send("No hay mensaje");

            return res.send(messages);
        });
    },

    getEmitMessages: (req, res)=>{
        const userid = req.token_usuarioId;

        Message.find({emisor: userid}).populate([{path: "emisor", select: "nombre apellidos apodo foto _id"}, {path: "receptor", select: "nombre apellidos apodo foto _id"}]).sort("-created_at").then((messages)=>{

            if(!messages) return res.send("No hay mensaje");

            return res.send(messages);
        });
    },

    getAllMessages: async (req, res)=>{
        const userid = req.token_usuarioId;

        var recibidos = await Message.find({receptor: userid}).clone().populate([{path: "emisor", select: "nombre apellidos apodo foto _id"}, {path: "receptor", select: "nombre apellidos apodo foto _id"}]).sort("-created_at").then((messages)=>{

            if(!messages) return res.send("No hay mensaje");

            return messages;

        });

        var emitidos = await Message.find({emisor: userid}).clone().populate([{path: "emisor", select: "nombre apellidos apodo foto _id"}, {path: "receptor", select: "nombre apellidos apodo foto _id"}]).sort("-created_at").then((messages)=>{

            if(!messages) return res.send("No hay mensaje");

            return messages;

        });

        return res.send({
            recibidos: recibidos,
            emitidos: emitidos
        });
    }

}

module.exports = MessageController;