/*import Horario from '../models/Horario.js'

const findAll = async () => {
    try {

        return await Horario.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (horario) => {
    try {

        const newHorario = await Horario.create(horario);

        return newHorario;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Horario.findOne({
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

const update = async (horario) => {
    try {
        const foundHorario =  await Horario.findOne({
            where: {
                id: horario.id
            }
        })

        foundHorario.set(horario)

        foundHorario.save()

        return foundHorario;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Horario.destroy({
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

const HorarioRepository = { findAll, create, findOne,update, remove };

export default HorarioRepository*/

let repository = [{idHorario: 1, idPersona: 1, horaInicio: 8, diaDeLaSemana: "lunes", horaFin: 10}, {idHorario: 2, idPersona: 2, horaInicio: 10, diaDeLaSemana: "martes", horaFin: 11}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idHorario: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idHorario == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idHorario == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idHorario == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository