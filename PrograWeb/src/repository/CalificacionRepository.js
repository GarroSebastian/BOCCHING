/*import Calificacion from '../models/Calificacion.js'

const findAll = async () => {
  try {

      return await Calificacion.findAll();

  } catch(err) {
      console.error(err)

      return null;
  }
}

const create = async (calificacion) => {
  try {

      const newCalificacion = await Calificacion.create(calificacion);

      return newCalificacion;

  } catch(err) {
      console.error(err)

      return null;
  }
}

const findOne = async (id) => {
  try {
      return await Calificacion.findOne({
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

const update = async (calificacion) => {
  try {
      const foundCalificacion =  await Calificacion.findOne({
          where: {
              id: calificacion.id
          }
      })

      foundCalificacion.set(calificacion)

      foundCalificacion.save()

      return foundCalificacion;

  }
  catch(err) {
      console.error(err)
      return null;
  }
}

const remove = async (id) => {
  try {
      await Calificacion.destroy({
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

const CalificacionRepository = { findAll, create, findOne,update, remove };

export default CalificacionRepository*/


let repository = [{idCalificacion: 1, idCita: 1, calificacion: 2, comentario: "Hola k ase"}, {idCalificacion: 2, idCita: 2, calificacion: 3.5, comentario: "Poool"}]
let counter = 2
  
const findAll = () => {
    return repository
}

const create = (item) => {
    counter++
    const newElement = {...item, idCalificacion: counter}
    repository.push(newElement)
    return item
}

const findOne = (id) => {
    return repository.find(item => item.idCalificacion == id)
}

const update = (item) => {
    const index = repository.findIndex(i => i.idCalificacion == item.id)
    if(index > -1)
        repository[index] = item
}

const remove = (id) => {
    const index = repository.findIndex(i => i.idCalificacion == id)
    if(index > -1){
        repository.splice(index, 1)
        return true
    }else{
        return false
    }
}

const Repository = {findAll, create, findOne, update, remove}

export default Repository