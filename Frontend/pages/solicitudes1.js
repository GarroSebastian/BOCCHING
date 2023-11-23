
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes1.module.css";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import SolicitudApi from "../api/solicitud";
import SolicitudItem from "../components/CardSolicitud.js";

const Solicitudes1 = () => {
  Zoom();
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [solicitudesSinViewer, setSolicitudesSinViewer] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No se encontró el token en el Local Storage");
      return;
    }

    // Utiliza la función SolicitudesRecibidasUsuario de tu API de solicitudes
    SolicitudApi.SolicitudesRecibidasUsuario(token)
      .then((response) => {
        if (response && response.data) {
          const solicitudesData = response.data.solicitudesRecibidas;
          setSolicitudes(solicitudesData);

          // Calcular la cantidad de solicitudes sin viewer en 1
          const solicitudesSinViewerCount = solicitudesData.filter(
            (solicitud) => solicitud.viewer !== 1
          ).length;
          setSolicitudesSinViewer(solicitudesSinViewerCount);

          // Mostrar el mensaje si hay solicitudes sin viewer en 1
          if (solicitudesSinViewerCount > 0) {
            setShowMessage(true);
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener las solicitudes:", error);
      });

    // Llama a la función para actualizar el campo viewer
    SolicitudApi.actualizarViewerSolicitudes(token)
      .then((response) => {
        if (response && response.data) {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error al actualizar el viewer:", error);
      });
  }, []);

  const handleDeleteSolicitud = (solicitudToDelete) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No se encontró el token en el Local Storage");
      return;
    }

    // Utiliza la función borrarSolicitud de tu API de solicitudes
    SolicitudApi.borrarSolicitud(solicitudToDelete.receptor._id, token)
      .then((response) => {
        if (response && response.status === 200) {
          setSolicitudes((prevSolicitudes) =>
            prevSolicitudes.filter(
              (solicitud) => solicitud._id !== solicitudToDelete._id
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error al eliminar la solicitud:", error);
      });
  };

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onEnviadasTextClick = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onOcultasTextClick = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onGuardadasTextClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const AceptarSolicitud = (solicitud) => {};

  const RechazarSolicitud = (solicitud) => {};

  return (
    <div id="container">
      <div className={styles.solicitudes1}>
        <img
          className={styles.solicitudes1Child}
          alt=""
          src="/rectangle-29.svg"
          onClick={onRectangleClick}
        />
        <img className={styles.solicitudes1Item} alt="" src="/rectangle-16.svg" />
        <img
          className={styles.solicitudes1Inner}
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
        <ul className={styles.SoliciAH}>
          {solicitudes.map((solicitud) => (
            <li key={solicitud._id}>
              <SolicitudItem
                solicitud={solicitud}
                onDeleteSolicitud={handleDeleteSolicitud}
              />
            </li>
          ))}
        </ul>
  
        <div className={styles.solicitudes}>Solicitudes</div>
        <div className={styles.recibidas}>Recibidas</div>
  
        <div className={styles.solicitudesRecibidas}>
          Solicitudes recibidas
        </div>
        <button className={styles.aceptar} onClick={AceptarSolicitud}>
          Aceptar
        </button>
        <button className={styles.rechazar} onClick={RechazarSolicitud}>
          Rechazar
        </button>
        <div className={styles.enviadas} onClick={onEnviadasTextClick}>
          Enviadas
        </div>
        <div className={styles.ocultas} onClick={onOcultasTextClick}>
          Ocultas
        </div>
        <div className={styles.solicitudes1Child1} />
        <div className={styles.guardadas} onClick={onGuardadasTextClick}>
          Guardadas
        </div>
  
        {/* Mensaje flotante */}
        {showMessage && (
          <div className={styles.floatingMessage}>
            Hay {solicitudesSinViewer} solicitudes sin viewer en 1.
          </div>
        )}
  
        {/* El menu de la izquierda */}
        <img
          className={styles.solicitudes1Child19}
          alt=""
          src="/group-1461.svg"
        />
      </div>
    </div>
  );
};

export default Solicitudes1;