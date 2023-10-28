import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes1.module.css";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import SolicitudApi from "../api/solicitud";

//Solicitudes Recibidas

const Solicitudes1 = () => {
  Zoom()

  const SolicitudRecibida = {
    emisor : '',
    receptor : '',
    tipo: Number,
    date_cambio: Date
  }
  const router = useRouter();
  
    const [solicitudesRecibidas, setSolicitudesRecibidas] = useState([]);
  
    useEffect(() =>{
      /*fetch(SolicitudApi.SolicitudesUsuario(window.localStorage.token))
      .then((response) => response.json())
      .then((data) => {
        setSolicitudesRecibidas(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
      }, []);*/})

  const handleOnLoad = async() => {

  }
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

  const AceptarSolicitud = (solicitud) => {

  };

  const RechazarSolicitud = (solicitud) => {

  }

  useEffect(() => {
    handleOnLoad();
  }, [])


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
      
      <div className={styles.rectangleDiv}>
        hola
        <ul>
      {solicitudesRecibidas.map((request) => (
        <li key={request._id}>
          <div>Date: {request.date}</div>
          <div>Emisor: {request.emisor}</div>
          <div>Receptor: {request.receptor}</div>
          <div>Type: {request.tipo}</div>
        </li>
      ))}
    </ul>
      
      
      </div>

      
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.recibidas}>Recibidas</div>

      <div className={styles.solicitudesRecibidas}>Solicitudes recibidas</div>
      <button className={styles.aceptar} onClick={AceptarSolicitud}>Aceptar</button>
      <button className={styles.rechazar} onClick={RechazarSolicitud}>Rechazar</button>
      <div className={styles.enviadas} onClick={onEnviadasTextClick}>
        Enviadas
      </div>
      <div className={styles.ocultas} onClick={onOcultasTextClick}>
        Ocultas
      </div>
      <div className={styles.solicitudes1Child1}/>
      <div className={styles.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>
      
      {Object.entries(solicitudesRecibidas).map(([solicitud, valores]) => (
          <div>
          <div key={solicitud} className={styles.solicitudes1Child2}>
              {valores.map((valor, index) => (
                <span key={`${solicitud}-${index}`}>{valor}</span>
                
              ))}
          </div>
          {
            //Las 2 siguientes lineas son los iconos de perfil
          }
          <div className={styles.ellipseDiv} />
          <img className={styles.groupIcon} alt="" src="/group-119.svg" />

          <button className={styles.solicitudes1Child15} onClick={() => AceptarSolicitud(solicitud)}>
          {
            //IMAGEN de listo : check list
          }
          </button>
          
          </div>
          
        ))}
      {
        //El menu de la izq
      }
      
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
