import Base from './base.js'
import axios from 'axios';
const URI = 'http://localhost:3700';

const endpoint = '/usuario';

const register = async (request) => await Base.post('/register', request);

const login = async (request) => await Base.post('/login', request);

const findUser = async(token) =>   {try {
    const url = URI.concat('/usuario');

    const authAxios = axios.create({
        baseURL: URI,
        headers: {
            Authorization: token
        }
    });

    return await authAxios.get(url);

} catch(err) {
    console.error(err);
    return null;
}}

const findUserById = async(id) => await Base.get('/findUsuarioById/'+id);

const findAllUsers = async (token) => await Base.get('/get-all-users', token);

const updateUser = async (request, token) => {

    try {
        const url = URI.concat('/update-user');

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: token
            }
        });

        return await authAxios.put(url, request);

    } catch(err) {
        console.error(err);
        return null;
    }

};

const remove = async (token) => await Base.put('/delete-user', token);

const findCurrent = async () => await Base.get(endpoint, window.localStorage.token);

const updateCurrent = async (request) => await Base.put('/update-user', request, window.localStorage.token);

const UsuarioApi = { register, login, findUser, findUserById, findAllUsers, findCurrent, updateUser, updateCurrent, remove };

export default UsuarioApi;