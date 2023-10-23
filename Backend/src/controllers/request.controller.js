const Request = require("../models/request");

const RequestController = {

    saveRequest: (req, res)=>{
        
        const data = req.body;
        const newRequest = new Request();

        newRequest.emisor = req.token_usuarioId;
        newRequest.receptor = req.params.id;
        newRequest.tipo = data.tipo;
        
        Request.find({emisor: req.token_usuarioId, receptor: req.params.id}).then((requests)=>{

            if(requests && requests.length >= 1) {
                return res.send("Ya existe una solicitud");
            }
            else
            {
                newRequest.save().then((RequestSaved)=>{
                    if(!RequestSaved) res.send("La solicitud no se ha guardado");
        
                    if(RequestSaved) return res.send({request: RequestSaved});
                    
                });
            }

        })
    },

    deleteRequest: (req, res)=>{
        
        const userid = req.token_usuarioId;
        const ReceptorId = req.params.id;

        Request.findOneAndDelete({emisor: userid, receptor: ReceptorId}).then(user=>{
            if(!user) return res.send("No se encontró la solicitud");

            if(user) return res.send({message: "La solicitud fue eliminada"});
        });
    },

    getAllRequests: (req, res)=>{
        const userid = req.token_usuarioId;
        
        Request.find({emisor: userid}).populate({path: 'emisor receptor'}).then(requests=>{
            if(!requests) return res.send({message: "No se encontraron solicitudes"});

            if(requests) return res.send({solicitudes: requests});
        });

    },

    getOneRequest: (req, res)=>{
        const userid = req.token_usuarioId;
        const ReceptorId = req.params.id;
        
        Request.find({emisor: userid, receptor: ReceptorId}).populate({path: 'emisor receptor'}).then(request=>{
            if(!request) return res.send({message: "No se encontró solicitud"});

            if(request) return res.send({solicitud: request});
        });

    }
    
}

module.exports = RequestController;