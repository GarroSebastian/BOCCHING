const Request = require("../models/request");
const moment = require("moment");

const RequestController = {

    saveRequest: (req, res)=>{
        
        const data = req.body;
        const newRequest = new Request();

        newRequest.emisor = req.token_usuarioId;
        newRequest.receptor = req.params.id;
        newRequest.tipo = data.tipo;
        newRequest.viewed = false;
        newRequest.ano = moment(newRequest.date).format('YYYY');
        newRequest.mes = moment(newRequest.date).format('M');
        newRequest.dia = moment(newRequest.date).format('D');
        newRequest.diaSem = moment(newRequest.date).day();
        newRequest.hora = moment(newRequest.date).format('HH');
        newRequest.minuto = moment(newRequest.date).format('mm');
        
        Request.find({emisor: req.token_usuarioId, receptor: req.params.id}).then((requests)=>{

            if(requests && requests.length >= 1) {
                return res.send("Ya existe una solicitud");
            }
            else
            {
                newRequest.save().then((RequestSaved)=>{
                    if(!RequestSaved) res.send("La solicitud no se ha guardado");
        
                    if(RequestSaved) return res.send(RequestSaved);
                    
                });
            }

        })
    },

    deleteRequest: (req, res)=>{
        
        const userid = req.token_usuarioId;
        const ReceptorId = req.params.receptorid;

        Request.findOneAndDelete({emisor: userid, receptor: ReceptorId}).then(user=>{
            if(!user) return res.send("No se encontró la solicitud");

            if(user) return res.send({message: "La solicitud fue eliminada"});
        });
    },

    deleteRequestAdr: (req, res)=>{
        
        const userid = req.token_usuarioId;
        const Id = req.params.id;

        Request.findOneAndDelete({_id: Id}).then(user=>{
            if(!user) return res.send("No se encontró la solicitud");

            if(user) return res.send({message: "La solicitud fue eliminada"});
        });
    },

    getAllRequests: async(req, res)=>{
        const userid = req.token_usuarioId;
        
        var emitidos = await Request.find({emisor: userid}).clone().populate({path: 'emisor receptor'}).then(requests=>{

            if(!requests) return res.send({message: "No se encontraron solicitudes"});

            if(requests) return requests;
        });

        var recibidos = await Request.find({receptor: userid}).clone().populate({path: 'emisor receptor'}).then(requests=>{

            if(!requests) return res.send({message: "No se encontraron solicitudes"});

            if(requests) return requests;
        });

        return res.send({
            recibidos: recibidos,
            emitidos: emitidos
        });

    },

    getAllRequestsEmitidas: (req, res)=>{
        const userid = req.token_usuarioId;
        
        Request.find({emisor: userid}).populate({path: 'emisor receptor'}).then(requests=>{
            if(!requests) return res.send({message: "No se encontraron solicitudes"});

            if(requests) return res.send(requests);
        });

    },

    getAllRequestsRecibidas: (req, res)=>{
        const userid = req.token_usuarioId;
        
        Request.find({receptor: userid}).populate({path: 'emisor receptor'}).then(requests=>{
            if(!requests) return res.send({message: "No se encontraron solicitudes"});

            if(requests) return res.send(requests);
        });

    },

    getOneRequest: (req, res)=>{
        const userid = req.token_usuarioId;
        const ReceptorId = req.params.id;
        
        Request.find({emisor: userid, receptor: ReceptorId}).populate({path: 'emisor receptor'}).then(request=>{
            if(!request) return res.send({message: "No se encontró solicitud"});

            if(request) return res.send(request);
        });

    },
    getAllReceivedRequests: (req, res) => {
        const userId = req.token_usuarioId;

        Request.find({ receptor: userId })
            .populate({ path: 'emisor receptor' })
            .then(requests => {
                if (!requests) return res.send({ message: "No se encontraron solicitudes recibidas" });

                if (requests) return res.send(requests);
            });
    },

    actualizarSolicitud: async(req, res)=>{

        const id = req.token_usuarioId;
        const dataUpdate = req.body;

        Request.find({ _id: dataUpdate._id }).then((requests)=>{

            Request.findByIdAndUpdate(dataUpdate._id, dataUpdate, {new: true}).then((requestUpdated)=>{

                if(!requestUpdated) return res.status(404).send({
                     message: 'No se ha podido actualizar la solicitud'
                });

                if(requestUpdated) return res.status(200).send(requestUpdated);

            });
            
        });

    },

    actualizarViewerSolicitudes : (req, res) => {
        const userId = req.token_usuarioId;
      
        Request.updateMany({ receptor: userId }, { viewed: true })
          .then(() => res.send({ message: 'Viewer actualizado para todas las solicitudes recibidas' }))
          .catch((error) => res.status(500).send({ error: 'Error al actualizar el viewer', details: error }));
      }
    
}

module.exports = RequestController;