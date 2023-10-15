const User = require("../models/user");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserController = {

    save_User: (req, res)=>{
        const data = req.body;
        const newUser = new User();
        
        if(data.nombre && data.correo && data.contrasena){

            newUser.nombre = data.nombre,
            newUser.apellidos = data.apellidos,
            newUser.correo = data.correo,
            newUser.apodo = data.apodo,
            newUser.id_genero = data.id_genero
            newUser.nacimiento = data.nacimiento,
            newUser.foto = data.foto,
            newUser.carrera = data.carrera,
            newUser.facultad = data.facultad,
            newUser.especialidad = data.especialidad,
            newUser.descripcion = data.descripcion,
            newUser.mostrar_nombre = data.mostrar_nombre
    
            User.find({ $or: [{correo: newUser.correo.toLowerCase()}, {apodo: newUser.apodo.toLowerCase()}] })
            
            .then((users)=>{
                            
                    if(users && users.length >= 1){
                        return res.json({message: "El usuario que intentas registrar ya existe"});
                    }
                    else
                    {
                        jwt.sign({id: newUser.id}, "textoSecretoCodificador", {
                            expiresIn: 60 * 60 * 24
                        });
    
                        bcrypt.hash(data.contrasena, 8, (err, hash)=>{
                            
                            if(err) return res.send("error en hash");
    
                            if(hash){
                                newUser.contrasena = hash;
    
                                newUser.save().then((err, userSaved)=>{
    
                                if(err) res.send(err);
    
                                if(userSaved) res.send("usuario registrado");
    
                                });
                            }
                        });
    
                    }
                });
    
        }
        else
        {
            res.send("Agrega todos los campos necesarios.");
        }
    
    },

    login_User: (req, res)=>{
        const data = req.body;
        const dataCorreo = data.correo;
        const dataContrasena = data.contrasena;
    
        User.findOne({ correo: dataCorreo }).then((user)=>{
            
            if(user){

                bcrypt.compare(dataContrasena, user.contrasena).then(async(check)=>{
    
                    if(check){

                        const token = await jwt.sign({id: user._id}, "textoSecretoCodificador", {
                            expiresIn: 60 * 60 * 24
                        });
    
                        return res.json({token: token});

                    }
    
                    if(!check) return res.status(404).send("error");
    
                });
            }
            else
            {
                return res.status(404).send("error");
            }
    
        });
        
    },

    get_user: async(req, res)=>{

        const user_id = req.token_usuarioId;

        var user = await User.findById(user_id , {password:0}).then((user)=>{

            if(!user) res.send("No se puede ingresar al perfil");
            return user;

        });

        res.send({usuario: user});
    },

    update_user: async(req, res)=>{

        const id = req.token_usuarioId;
        const dataUpdate = req.body;
        delete dataUpdate.contrasena;

        if(req.file){
            dataUpdate.imagePath = req.file.filename || "";
        }

        User.find({ $or: [{apodo: dataUpdate.apodo.toLowerCase()}, {correo: dataUpdate.correo.toLowerCase()}] }, (err, users)=>{

            var sameData = false;
            users.forEach((user)=>{
                if(user._id != id) sameData = true;
            });

            if(sameData) return res.status(404).send({message: 'Los datos ya estan en uso'});

            User.findByIdAndUpdate(id, dataUpdate, {new: true}, (err, userUpdated)=>{

                if(err) return res.status(500).send({
                    message: 'no tienes permiso para actualizar ese usuario'
                })
                 if(!userUpdated) return res.status(404).send({
                     message: 'no sea podido actualizar el usuario'
                })

                return res.status(200).send(userUpdated)

            });
            
        });

    }
    
}

module.exports = UserController;