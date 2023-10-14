/*import Universidad from '../models/Universidad.js'

const findAll = async () => {
    try {

        return await Universidad.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (universidad) => {
    try {

        const newUniversidad = await Universidad.create(universidad);

        return newUniversidad;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Universidad.findOne({
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

const update = async (universidad) => {
    try {
        const foundUniversidad =  await Universidad.findOne({
            where: {
                id: universidad.id
            }
        })

        foundUniversidad.set(universidad)

        foundUniversidad.save()

        return foundUniversidad;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Universidad.destroy({
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

const UniversidadRepository = { findAll, create, findOne, update, remove };

export default UniversidadRepository*/

let repository = [{idUniversidad: 1, descripcion: "Universidad de Lima"}, {idUniversidad: 2, descripcion: "UPC"}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idUniversidad: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idUniversidad == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idUniversidad == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idUniversidad == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository