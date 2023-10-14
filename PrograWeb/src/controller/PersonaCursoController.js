import PersonaCursoRepository from "../repository/PersonaCursoRepository.js";

const findAll = async (req, res) => {
    const result = await PersonaCursoRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = PersonaCursoRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await PersonaCursoRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = PersonaCursoRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = PersonaCursoRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const PersonaCursoController = {findAll , findOne, create, update, remove}


export default PersonaCursoController
