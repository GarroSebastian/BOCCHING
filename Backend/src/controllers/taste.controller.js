const Taste = require("../models/taste");

const TasteController = {

    saveTaste: (req, res)=>{
        
        const newTaste = new Taste();
        
        const userid = req.token_usuarioId;
        const { franquicia,
            juego_de_mesa,
            hobby,
            pasatiempo,
            alimento,
            musica,
            creador_de_contenido,
            deporte } = req.body;

        if(userid){

            newTaste.usuario = userid;
            newTaste.franquicia = franquicia;
            newTaste.juego_de_mesa = juego_de_mesa;
            newTaste.hobby = hobby;
            newTaste.pasatiempo = pasatiempo;
            newTaste.alimento = alimento;
            newTaste.musica = musica;
            newTaste.creador_de_contenido = creador_de_contenido;
            newTaste.deporte = deporte;
    
            Taste.find({usuario: userid}).then((tastes)=>{
    
                if(tastes && tastes.length >= 1) {
                    return res.send("Ya existe este gusto");
                }
                else
                {
                    newTaste.save().then((TasteSaved)=>{
                        if(!TasteSaved) res.send("Tu gusto no se ha guardado");
            
                        if(TasteSaved) return res.send({gusto: TasteSaved});
                        
                    });
                }
    
            });
        }
        else
        {
            res.send("No se ha ingresado un texto");
        }
    },

    deleteTaste: (req, res)=>{
        const userid = req.token_usuarioId;

        Taste.findOneAndDelete({usuario: userid}).then(taste=>{
            if(!taste) return res.send("No se encontró el gusto");

            if(taste) return res.send({message: "El gusto fue eliminado"});
        });
    },

    getTaste: (req, res)=>{
        const userid = req.token_usuarioId;
        
        Taste.find({usuario: userid}).then(tastes=>{
            if(!tastes) return res.send({message: "No se encontraron gustos"});

            if(tastes) return res.send({gustos: tastes});
        });

    },

    updateTaste: (req, res)=>{
        const userid = req.token_usuarioId;
        const data = req.body;

        Taste.findOneAndUpdate({usuario: userid}, data, {new: true}).then((tasteUpdated)=>{
            if(!tasteUpdated) return res.send({message: "No se encontró gusto"});

            if(tasteUpdated) return res.send({gusto: tasteUpdated});
        });

    }
    
}

module.exports = TasteController;