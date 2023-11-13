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
            newUser.confirmationCode=data.confirmationCode
    
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

                bcrypt.compare(dataContrasena, user.contrasena, async(err, check)=>{
    
                    if(check){

                        const token = await jwt.sign({id: user._id}, "textoSecretoCodificador", {
                            expiresIn: 60 * 60 * 24
                        });
    
                        return res.json({token: token});

                    }
    
                    if(err) return res.status(404).send("error 2");
    
                });
            }
            else
            {
                return res.status(404).send("error 1");
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
    find_all_users: (req, res) => {
        User.find({}, { contrasena: 0 }, (err, users) => {
            if (err) {
                return res.status(500).send("Error while fetching users");
            }
            return res.status(200).json(users);
        });
    },

    update_user: async(req, res)=>{

        const id = req.token_usuarioId;
        const dataUpdate = req.body;
        delete dataUpdate.contrasena;

        User.find({ $or: [{apodo: dataUpdate.apodo.toLowerCase()}, {correo: dataUpdate.correo.toLowerCase()}] }).then((users)=>{

            var sameData = false;

            users.forEach((user)=>{
                if(user._id != id) sameData = true;
            });

            if(sameData) return res.status(404).send({message: 'Los datos ya estan en uso'});

            User.findByIdAndUpdate(id, dataUpdate, {new: true}).then((userUpdated)=>{

                if(!userUpdated) return res.status(404).send({
                     message: 'no sea podido actualizar el usuario'
                });

                if(userUpdated) return res.status(200).send(userUpdated);

            });
            
        });

    },

    delete_user: async(req, res)=>{

        const user_id = req.token_usuarioId;

        await User.findByIdAndDelete(user_id).then((userDeleted)=>{

            if(!userDeleted) return res.send("No se puede eliminar el perfil");

            if(userDeleted) return res.send("Perfil eliminado");

        });

    },

    verify_delete_code : async (req, res) => {
    const user_id = req.token_usuarioId;
    const confirmationCode = req.params.confirmationCode;

    // Obtener el usuario de la base de datos
    var user = await User.findById(user_id )



    if (!user) {
        return res.status(404).send(`Usuario no encontrado. user_id: ${user_id}`);
    }
    // Verificar si el código de confirmación coincide
    if (confirmationCode === user.confirmationCode) {
        // Eliminar la cuenta del usuario
        await User.findByIdAndDelete(user_id);
        return res.status(200).send("Cuenta eliminada exitosamente");
     } else {
        return res.status(400).send("Código de confirmación incorrecto");
    }
    
    }
    
    
}

module.exports = UserController;