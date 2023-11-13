import { useCallback, useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import styles from "./solicitudes2.module.css";
import axios from 'axios';
import SolicitudItem from "../components/CardSolicitud";
//Solicitudes Enviadas
const Solicitudes2 = () => {
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No se encontró el token en el Local Storage');
      return;
    }

    const headers = {
      Authorization: token,
    };

    axios
      .get('http://localhost:3700/getAllSolicitudes', { headers })
      .then((response) => {
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
        
        if (response.status === 200) {
          const solicitudesData = response.data.solicitudes;
          setSolicitudes(solicitudesData);
        }
      })
      .catch((error) => {
        console.error('Error al obtener las solicitudes:', error);
      });
  }, []);

    // Agrega un manejador de eventos para eliminar una solicitud
    const handleDeleteSolicitud = (solicitudToDelete) => {
      if (!solicitudToDelete.receptor || !solicitudToDelete.receptor._id) {
        console.log('La solicitud no tiene receptor o el receptor no tiene _id.');
        return;
      }
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.log('No se encontró el token en el Local Storage');
      return;
    }

    const headers = {
      Authorization: token,
    };
      // Envía una solicitud para eliminar la solicitud en el servidor
      // Debes implementar la lógica del servidor para esto
      axios
        .delete(`http://localhost:3700/delete-solicitud/${solicitudToDelete.receptor._id}`, { headers})
        .then((response) => {
          if (response.status === 200) {
            // La solicitud se eliminó correctamente en el servidor
            // Actualiza la lista de solicitudes para reflejar la eliminación
            setSolicitudes((prevSolicitudes) =>
              prevSolicitudes.filter((solicitud) => solicitud._id !== solicitudToDelete._id)
            );
          }
        })
        .catch((error) => {
          console.error('Error al eliminar la solicitud:', error);
        });
    };

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const onRecibidasTextClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onOcultasTextClick = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onGuardadasTextClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  

  return (
    <div className={styles.solicitudes2}>
      <img
        className={styles.solicitudes2Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img className={styles.solicitudes2Item} alt="" src="/rectangle-16.svg" />
      <img
        className={styles.solicitudes2Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle3Click}
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.solicitudesEnviadas}>Solicitudes Enviadas</div>
      <div className={styles.cancelar}>Cancelar</div>
      <div className={styles.ocultar}>Ocultar</div>
      <ul className={styles.SoliciAH}>
        {solicitudes.map((solicitud) => (
          <li key={solicitud._id}>
            <SolicitudItem solicitud={solicitud} onDeleteSolicitud={handleDeleteSolicitud} />
          </li>
        ))}
      </ul>



      <div className={styles.recibidas} onClick={onRecibidasTextClick}>
        Recibidas
      </div>
      <div className={styles.enviadas}>Enviadas</div>
      <div className={styles.ocultas} onClick={onOcultasTextClick}>
        Ocultas
      </div>
      <div className={styles.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>

      <img className={styles.solicitudes2Child23} alt="" src="/group-146.svg" />
    </div>
  );
};

export default Solicitudes2;
