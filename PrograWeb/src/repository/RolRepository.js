/*import Rol from '../models/Rol.js'

const findAll = async () => {
    try {

        return await Rol.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (rol) => {
    try {

        const newRol = await Rol.create(rol);

        return newRol;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Rol.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (rol) => {
    try {
        const foundRol =  await Rol.findOne({
            where: {
                id: rol.id
            }
        })

        foundRol.set(rol)

        foundRol.save()

        return foundRol;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Rol.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}

const RolRepository = { findAll, create, findOne,update, remove };

export default RolRepository*/

let repository = [{idRol: 1, descripcion: "Alumno"}, {idRol: 2, descripcion: "Profesor"}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idRol: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idRol == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idRol == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idRol == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository