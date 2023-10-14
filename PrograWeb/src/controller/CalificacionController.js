import CalificacionRepository from "../repository/CalificacionRepository.js";

const findAll = async (req, res) => {
    const result = await CalificacionRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = CalificacionRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await CalificacionRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = CalificacionRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = CalificacionRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CalificacionController = {findAll , findOne, create, update, remove}

export default CalificacionController
