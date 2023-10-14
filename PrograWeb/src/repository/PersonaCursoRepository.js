/*import PersonaCurso from '../models/PersonaCurso.js'

const findAll = async () => {
    try {

        return await PersonaCurso.findAll();

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (personaCurso) => {
    try {

        const newPersonaCurso = await PersonaCurso.create(personaCurso);

        return newPersonaCurso;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await PersonaCurso.findOne({
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

const update = async (personaCurso) => {
    try {
        const foundPersonaCurso =  await PersonaCurso.findOne({
            where: {
                id: personaCurso.id
            }
        })

        foundPersonaCurso.set(personaCurso)

        foundPersonaCurso.save()

        return foundPersonaCurso;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await PersonaCurso.destroy({
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

const PersonaCursoRepository = { findAll, create, findOne,update, remove };

export default PersonaCursoRepository*/

let repository = [{idPersonaCurso: 1, idPersona: 1, idCurso: 1}, {idPersonaCurso: 2, idPersona: 2, idCurso: 2}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idPersonaCurso: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idPersonaCurso == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idPersonaCurso == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idPersonaCurso == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository