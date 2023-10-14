/*import Cita from '../models/Curso.js'

const findAll = async () => {
    try {

        return await Cita.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (cita) => {
    try {

        const newCita = await Cita.create(cita);

        return newCita;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Cita.findOne({
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

const update = async (cita) => {
    try {
        const foundCita =  await Cita.findOne({
            where: {
                id: cita.id
            }
        })

        foundCita.set(cita)

        foundCita.save()

        return foundCita;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Cita.destroy({
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

const CitaRepository = { findAll, create, findOne,update, remove };

export default CitaRepository*/

let repository = [{idCita: 1, idPersonaDocente: 1, idPersonaAlumno: 1, fecha: "01/24/2023", horaInicio: "08:00", horaFin: "10:00", enlaceSesion: "hola.com", estado: "a", idCurso: 1}, {idCita: 2, idPersonaDocente: 2, idPersonaAlumno: 2, fecha: "01/25/2023", horaInicio: "10:00", horaFin: "11:00", enlaceSesion: "hol2a.com", estado: "n", idCurso: 2}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idCita: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idCita == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idCita == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idCita == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository