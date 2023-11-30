const Taste = require("../models/taste");

const TasteController = {

    saveTaste: (req, res)=>{
        
        const newTaste = new Taste();
        
        const userid = req.token_usuarioId;
        const { tipo,
            nombre,
            subtipo,
            afinidad,
            duracion,
            compania } = req.body;

        if(userid){

            newTaste.usuario = userid;
            newTaste.tipo = tipo;
            newTaste.nombre = nombre;
            newTaste.subtipo = subtipo;
            newTaste.afinidad = afinidad;
            newTaste.duracion = duracion;
            newTaste.compania = compania;

            if(subtipo == null) newTaste.subtipo = "";
            if(afinidad == null) newTaste.afinidad = 0;
            if(duracion == null)  newTaste.duracion = 0;
            if(compania == null)  newTaste.compania = 0;
    
            Taste.find({usuario: userid, nombre: nombre}).then((tastes)=>{
    
                if(tastes && tastes.length >= 1) {
                    return res.send("Ya existe este gusto");
                }
                else
                {
                    newTaste.save().then((TasteSaved)=>{
                        
                        if(!TasteSaved) res.send("Tu gusto no se ha guardado");
            
                        if(TasteSaved) return res.send(TasteSaved);
                        
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
        const tasteId = req.params.id;

        Taste.findOneAndDelete({_id: tasteId, usuario: userid}).then(taste=>{
            if(!taste) return res.send("No se encontró el gusto");

            if(taste) return res.send({message: "El gusto fue eliminado"});
        });
    },

    getTastes: (req, res)=>{
        const userid = req.token_usuarioId;
        
        Taste.find({usuario: userid}).then(tastes=>{
            if(!tastes) return res.send({message: "No se encontraron gustos"});

            if(tastes) return res.send(tastes);
        });

    },

    getTaste: (req, res)=>{
        const userid = req.token_usuarioId;
        const tasteId = req.params.id;
        
        Taste.findOne({_id: tasteId, usuario: userid}).then(taste=>{
            if(!taste) return res.send({message: "No se encuentra el gusto"});

            if(taste) return res.send(taste);
        });

    },

    updateTaste: (req, res)=>{
        const userid = req.token_usuarioId;
        const tasteId = req.params.id;
        const data = req.body;

        Taste.findOneAndUpdate({_id: tasteId, usuario: userid}, data, {new: true}).then((tasteUpdated)=>{
            if(!tasteUpdated) return res.send({message: "No se encontró gusto"});

            if(tasteUpdated) return res.send({gusto: tasteUpdated});
        });

    }
    
}

module.exports = TasteController;