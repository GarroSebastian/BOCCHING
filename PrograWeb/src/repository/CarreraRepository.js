/*import Carrera from '../models/Carrera.js'

const findAll = async () => {
    try {

        return await Carrera.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (carrera) => {
    try {

        const newCarrera = await Carrera.create(carrera);

        return newCarrera;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Carrera.findOne({
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

const update = async (carrera) => {
    try {
        const foundCarrera =  await Carrera.findOne({
            where: {
                id: carrera.id
            }
        })

        foundCarrera.set(carrera)

        foundCarrera.save()

        return foundCarrera;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Carrera.destroy({
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

const CarreraRepository = { findAll, create, findOne,update, remove };

export default CarreraRepository*/

let repository = [{idCarrera: 1, idUniversidad: 1}, {idCarrera: 2, idUniversidad: 2}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idCarrera: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idCarrera == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idCarrera == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idCarrera == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository