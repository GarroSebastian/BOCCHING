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

const borrarGusto = async(token) => {

    try {
        const url = URI.concat('/delete-gusto');

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

const getGusto = async(token) => {

    try {
        const url = URI.concat('/gusto');

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

const actualizarGusto = async(request, token) => {

    try {
        const url = URI.concat('/update-gusto');

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

const SolicitudApi = { guardarGusto, borrarGusto, getGusto, actualizarGusto }

export default SolicitudApi;