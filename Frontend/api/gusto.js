import axios from 'axios';

const URI = 'http://localhost:3700';

const guardarGusto = async(request, token) => {

    try {
        const url = URI.concat('/save-gusto');

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: token
            }
        });

        return await authAxios.post(url, request);

    } catch(err) {
        console.error(err);
        return null;
    }

}

const getGustos = async(token) => {

    try {
        const url = URI.concat('/gustos');

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
    }

}

const getGusto = async(idReceptor, token) => {

    try {
        const url = URI.concat('/gusto/'+idReceptor);

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
    }

}

const borrarGusto = async(idReceptor, token) => {

    try {
        const url = URI.concat('/delete-gusto/'+idReceptor);

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: token
            }
        });

        return await authAxios.delete(url);

    } catch(err) {
        console.error(err);
        return null;
    }

}

const actualizarGusto = async(request, idReceptor, token) => {

    try {
        const url = URI.concat('/update-gusto/'+idReceptor);

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

}

const GustoApi = { guardarGusto, getGustos, getGusto, borrarGusto, actualizarGusto }

export default GustoApi;