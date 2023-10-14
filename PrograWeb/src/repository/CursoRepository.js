/*import Curso from '../models/curso.js'

const findAll = async () => {
    try {

        return await Curso.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (curso) => {
    try {

        const newCurso = await Curso.create(curso);

        return newCurso;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Curso.findOne({
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

const update = async (curso) => {
    try {
        const foundCurso =  await Curso.findOne({
            where: {
                id: curso.id
            }
        })

        foundCurso.set(curso)

        foundCurso.save()

        return foundCurso;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Curso.destroy({
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


const CursoRepository = { findAll, create, findOne,update, remove };

export default CursoRepository*/

let repository = [{idCurso: 1, idUniversidad: 1, nombre: "Programación Web"}, {idCurso: 2, idUniversidad: 2, nombre: "Simulación"}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idCurso: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idCurso == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idCurso == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idCurso == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository