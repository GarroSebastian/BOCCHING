import CitaRepository from "../repository/CitaRepository.js";

const findAll = async (req, res) => {
    const result = await CitaRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = CitaRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await CitaRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = CitaRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = CitaRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CitaController = {findAll , findOne, create, update, remove}

export default CitaController

