/*import Persona from '../models/Persona.js'

const findAll = async () => {
    try {

        return await Persona.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (persona) => {
    try {

        const newPersona = await Persona.create(persona);

        return newPersona;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Persona.findOne({
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

const update = async (persona) => {
    try {
        const foundPersona =  await Persona.findOne({
            where: {
                id: persona.id
            }
        })

        foundPersona.set(persona)

        foundPersona.save()

        return foundPersona;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Persona.destroy({
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

const PersonaRepository = { findAll, create, findOne,update, remove };

export default PersonaRepository*/

let repository = [{idPersona: 1, nombre: "Adrián", apellido: "Duarte", tipoDocumento: "DNI", dni: 74143539, idRol: 1, email: "20200711@aloe", contrasena: "hola", idCarrera: 1, tituloPresentacion: "aa", presentacion: "zzz", grado: "centigrado", imagen: ""}, {idPersona: 2, nombre: "Pol", apellido: "Quispe", tipoDocumento: "DNI", dni: 74143538, idRol: 2, email: "pol@rdm", contrasena: "adios", idCarrera: 2, tituloPresentacion: "bb", presentacion: "bb", grado: "centigrado2", imagen: ""}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idPersona: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idPersona == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idPersona == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idPersona == id)
    console.log(index)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository