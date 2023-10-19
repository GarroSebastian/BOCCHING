import Base from './base.js'

const endpoint = '/usuario';

const register = async (request) => await Base.post('/register',request);
const login = async (request) => await Base.post('/login',request);

const findUser = async(token) => await Base.get('/usuario', token);

const update = async(request, token) => await Base.put('/update-user', request, token);

const remove = async(token) => await Base.put('/delete-user', token);

/*
const remove = async(id) => {
    const newEndpoint = endpoint.concat('/',id);
    return await Base.remove(newEndpoint);
}*/

const findCurrent = async() => {
    //const newEndpoint = endpoint.concat('/',id);
    //return await Base.get(newEndpoint);
    return await Base.get(endpoint, window.localStorage.token);
}



const UsuarioApi = { register, login, findUser, findCurrent, update, remove }

export default UsuarioApi;