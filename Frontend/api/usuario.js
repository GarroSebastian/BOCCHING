import Base from './base.js'

const endpoint = '/usuario';

const register = async (request) => await Base.post('/register',request);
const login = async (request) => await Base.post('/login',request);

const findAll = async() => await Base.get(endpoint);

const findOne = async(id) => {
    const newEndpoint = endpoint.concat('/',id);

    return await Base.get(newEndpoint);
}

const update = async(request) => await Base.put(endpoint,request);

const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);
    return await Base.remove(newEndpoint);
}

const UsuarioApi = { register, login, findAll, findOne, update, remove }

export default UsuarioApi;