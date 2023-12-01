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

const borrarSolicitudById = async(id) => {

    try {
        const url = URI.concat('/delete-solicitud-id/'+id);

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: window.localStorage.token
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

const SolicitudesCurrent = async() => {

    try {
        const url = URI.concat('/getSolicitudesFromUser');

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: window.localStorage.token
            }
        });

        return await authAxios.get(url);

    } catch(err) {
        console.error(err);
        return null;
    }

}

const SolicitudesRecibidasUsuario = async (token) => {
    try {
        const url = URI.concat('/get-all-received-requests');

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: token
            }
        });

        return await authAxios.get(url);

    } catch (err) {
        console.error(err);
        return null;
    }
}

const findOneSolicitud = async (idReceptor, token) => {
    try {
        const url = URI.concat('/findOneSolicitud/' + idReceptor);

        const authAxios = axios.create({
            baseURL: URI,
            headers: {
                Authorization: token
            }
        });

        return await authAxios.get(url);

    } catch (err) {
        console.error(err);
        return null;
    }
}

const actualizarSolicitud = async (request) => {
    try {
      const url = URI.concat('/update-solicitud');
  
      const authAxios = axios.create({
        baseURL: URI,
        headers: {
          Authorization: window.localStorage.token,
        },
      });
  
      return await authAxios.put(url, request);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

const actualizarViewerSolicitudes = async (token) => {
    try {
      const url = URI.concat('/actualizar-viewer-solicitudes');
  
      const authAxios = axios.create({
        baseURL: URI,
        headers: {
          Authorization: token,
        },
      });
  
      return await authAxios.put(url);
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const SolicitudApi = {
    guardarSolicitud,
    borrarSolicitud,
    borrarSolicitudById,
    SolicitudesUsuario,
    findOneSolicitud,
    SolicitudesRecibidasUsuario,
    actualizarViewerSolicitudes, 
    SolicitudesCurrent,
    actualizarSolicitud
  };
export default SolicitudApi;