const buildSearchQuery = (criteria) => {
    const query = {};

    if (criteria.nombre) {
        query.nombre = { $regex: new RegExp(criteria.nombre, 'i') };
    }

    if (criteria.genero) {
        query.genero = criteria.genero;
    }

    if (criteria.mismaFacultad !== undefined) {
        query.mismaFacultad = criteria.mismaFacultad;
    }

    if (criteria.mismaCarrera !== undefined) {
        query.mismaCarrera = criteria.mismaCarrera;
    }

    //if (criteria.mismaEspecialidad !== undefined) {
        //query.mismaEspecialidad = criteria.mismaEspecialidad;
 //   }

 //   if (criteria.palabras) {
  //      query.descripcion = { $regex: new RegExp(criteria.palabras, 'i') };
//    }

    if (criteria.gustos && criteria.gustos.length > 0) {
        query.gustos = { $in: criteria.gustos };
    }

    return query;
  };
  
  module.exports = buildSearchQuery;