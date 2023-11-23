import { useCallback, useEffect, useState } from "react"; 
import { useRouter } from "next/router";
import styles from "./solicitudes2.module.css";
import axios from 'axios';
import SolicitudItem from "../components/CardSolicitud";
import SolicitudApi from "../api/solicitud";
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

    // Utiliza la función SolicitudesUsuario de tu API de solicitudes
    SolicitudApi.SolicitudesUsuario(token)
      .then((response) => {
        if (response && response.data) {
          const solicitudesData = response.data.solicitudes;
          setSolicitudes(solicitudesData);
        }
      })
      .catch((error) => {
        console.error('Error al obtener las solicitudes:', error);
      });
  }, []);

  const handleDeleteSolicitud = (solicitudToDelete) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('No se encontró el token en el Local Storage');
      return;
    }

    // Utiliza la función borrarSolicitud de tu API de solicitudes
    SolicitudApi.borrarSolicitud(solicitudToDelete.receptor._id, token)
      .then((response) => {
        if (response && response.status === 200) {
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

  console.log(solicitudes);

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
