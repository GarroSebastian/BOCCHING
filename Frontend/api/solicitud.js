import axios from 'axios';

const URI = 'http://localhost:3700';

const guardarSolicitud = async(request, idReceptor, token) => {

    try {
        const url = URI.concat('/save-solicitud/'+idReceptor);

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

const borrarSolicitud = async(idReceptor, token) => {

    try {
        const url = URI.concat('/delete-solicitud/'+idReceptor);

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

const SolicitudesUsuario = async(token) => {

    try {
        const url = URI.concat('/getAllSolicitudes');

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

const ObtenerSolicitudUsuario = async(idReceptor, token) => {

    try {
        const url = URI.concat('/getSolicitud/'+idReceptor);

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

const SolicitudApi = { guardarSolicitud, borrarSolicitud, SolicitudesUsuario, ObtenerSolicitudUsuario }

export default SolicitudApi;