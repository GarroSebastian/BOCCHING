const Taste = require("../models/taste");

const TasteController = {

    saveTaste: (req, res)=>{
        
        const data = req.body;
        const newTaste = new Taste();
        
        const userid = req.token_usuarioId;
        const dataText = data.text;

        if(dataText){

            newTaste.usuario = userid;
            newTaste.text = dataText;
    
            Taste.find({usuario: userid, text: dataText}).then((tastes)=>{
    
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
        const taste_id = req.params.id

        Taste.findOneAndDelete({_id: taste_id, usuario: userid}).then(taste=>{
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

        Taste.findByIdAndUpdate({usuario: userid}, data).then(taste=>{
            if(!taste) return res.send({message: "No se encontró gusto"});

            if(taste) return res.send({gusto: taste});
        });

    }
    
}

module.exports = TasteController;