const moment = require("moment");
const Group = require("../models/group");

const GroupController = {

    saveGroup: (req, res) => {
        const data = req.body;
        const userid = req.token_usuarioId;
        
        const newGroup = new Group();
        if(userid) {

            newGroup.admin = userid;
            newGroup.usuarios = data.usuarios;
            newGroup.usuarios.push(userid);
            newGroup.created_at = moment().unix();

            newGroup.save().then((GroupSaved)=>{
                if(!GroupSaved) res.send("El grupo no se ha guardado");
    
                if(GroupSaved) return res.send("El grupo fue creado con exito");
                
            });
        }
        else
        {
            res.send("No existe el usuario");

        }

    },

    getGroup: (req, res) => {

        const userid = req.token_usuarioId;
        
        if(userid) {

            Group.find({$or: [{admin: userid},{usuarios: {$in : [userid]} }] }).then(group=>{
                if(!group) return res.send("No se encontró el grupo");
    
                if(group) return res.send({grupo: group});
            });
        }
        else
        {
            res.send("No existe el usuario");

        }

    },

    deleteGroup: (req, res) => {
        const data = req.body;
        const userid = req.token_usuarioId;
        
        if(userid) {

            Group.findOneAndDelete({admin: userid}).then(group=>{
                if(!group) return res.send("No se encontró el grupo");
    
                if(group) return res.send({message: "El grupo fue eliminado"});
            });
        }
        else
        {
            res.send("No existe el usuario");

        }

    }

}

module.exports = GroupController;