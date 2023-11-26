
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes1.module.css";
import styles2 from "./solicitudes2.module.css";
import styles3 from './solicitudes3.module.css';
import styles4 from "./solicitudes4.module.css";
import Lateral from "../components/lateral.js";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import SolicitudApi from "../api/solicitud.js";
import SolicitudItem from "../components/CardSolicitud.js";

/*Recibidas:
- Cargar del Backend todas las solicitudes donde el usuario es receptor, y que sean de tipo 0 (Solicitud enviada)
- Cada una tiene 2 botones: Aceptar (UPDATE Solicitud, cambiando Tipo a 2), rechazar (DELETE Solicitud)
Enviadas:
- Cargar del Backend todas las solicitudes donde el usuario es emisor, y que sean de tipo 0 (Solicitud enviada)
- Cada una tiene 2 botones: Ocultar (UPDATE Solicitud, cambiando Tipo a 1), cancelar (DELETE Solicitud)
Ocultas:
- Cargar del Backend todas las solicitudes donde el usuario es emisor, y que sean de tipo 1 (Solicitud oculta)
- Cada una tiene 2 botones: Enviar (UPDATE Solicitud, cambiando Tipo a 0), cancelar (DELETE Solicitud)
Guardadas: Eliminar

Por cada solicitud:
- Utilizar el id del otro usuario para agarrar sus datos del UsuarioApi (nombre, foto, etc)
- Si la variable mostrar-nombre es true, mostrar el nombre; sino, el apodo
- Mostrar foto
- Al darles clic, llevan a http://localhost:3000/perfil?id={} (reemplazar {} por el id del otro usuario)

- Abajo están las variables del objeto Solicitud, cada una explicadas
- UNIFICAR PANTALLAS, CAMBIAR EL NOMBRE DE ÉSTA A solicitudes, pasar el contenido del resto a ésta y tras eso ELIMINARLOS CON SUS MODULE.CSS
- Después de hacer cualquier llamado al Backend, volver a recargar los datos (GET)
*/

const Solicitudes1 = () => {
  Zoom();
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [solicitudesSinViewer, setSolicitudesSinViewer] = useState(0);
  const [pag, setPag] = useState(1);

  const defaultSolicitud = {
    _id: '', //el id de la solicitud
    idEmisor: '', //el id del usuario que creó la solicitud
    idReceptor: '', //el id del usuario al que se le envió la solicitud. Si existe una Solicitud con emisor X y receptor Y, no puede existir una con emisor Y y receptor X
    tipo: 0, //si es 0, es una solicitud normal; 1, solicitud oculta; 2, ya son amigos
    viewed: false //si es false, el usuario todavía no ha visto la solicitud y debe ser notificado
  }

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
          //const solicitudesData = response.data.solicitudesRecibidas;
          //setSolicitudes(solicitudesData);
          setSolicitudes([
            {...defaultSolicitud,_id:'0',idEmisor:'0',idReceptor:'1',tipo:0},
            {...defaultSolicitud,_id:'1',idEmisor:'0',idReceptor:'2',tipo:0},
            {...defaultSolicitud,_id:'2',idEmisor:'0',idReceptor:'3',tipo:0},
            {...defaultSolicitud,_id:'3',idEmisor:'0',idReceptor:'4',tipo:1},
            {...defaultSolicitud,_id:'4',idEmisor:'0',idReceptor:'5',tipo:1},
            {...defaultSolicitud,_id:'5',idEmisor:'0',idReceptor:'6',tipo:2},
            {...defaultSolicitud,_id:'6',idEmisor:'0',idReceptor:'7',tipo:2},
          ]
          );
          // Calcular la cantidad de solicitudes sin viewer en 1
          /*
          const solicitudesSinViewerCount = solicitudesData.filter(
            (solicitud) => solicitud.viewer !== 1
          ).length;
          setSolicitudesSinViewer(solicitudesSinViewerCount);
          
          // Mostrar el mensaje si hay solicitudes sin viewer en 1
          if (solicitudesSinViewerCount > 0) {
            setShowMessage(true);
          }
          */
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
    /*
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
      */
  };

  console.log("hola",solicitudes);
  console.log(solicitudes.filter(solicitud => solicitud.tipo === 0))
  
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

  /*
  <div id='container'>
      {
        pag==1?<div></div>
        :<>{
          pag==2?<div></div>
          :
          null
        }<>{
          pag==3?<div></div>
          :
          null
        }<>{
          pag==4?<div></div>
          :
          null
        }
        </>
      }
    <Lateral></Lateral>
  </div>
  */

  return (
    
    <div id='container'>
  {
    pag === 1 ? <div id="container">
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
        {solicitudes.filter(solicitud => solicitud.tipo === 0).map((solicitud, index) => {
          
            return(
              <li key={solicitud._id}>
              <SolicitudItem
                solicitud={solicitud}
                onDeleteSolicitud={handleDeleteSolicitud}
              />
              </li>
            )
        
          
          
        })}
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
    </div>
  </div> : null
  }
  {
    pag === 2 ? <div className={styles2.solicitudes2}>
    <img
      className={styles2.solicitudes2Child}
      alt=""
      src="/rectangle-29.svg"
      onClick={onRectangleClick}
    />
    <img className={styles2.solicitudes2Item} alt="" src="/rectangle-16.svg" />
    <img
      className={styles2.solicitudes2Inner}
      alt=""
      src="/rectangle-29.svg"
      onClick={onRectangle2Click}
    />
    <img
      className={styles2.rectangleIcon}
      alt=""
      src="/rectangle-29.svg"
      onClick={onRectangle3Click}
    />
    <div className={styles2.rectangleDiv} />
    <div className={styles2.solicitudes}>Solicitudes</div>
    <div className={styles2.solicitudesEnviadas}>Solicitudes Enviadas</div>
    <div className={styles2.cancelar}>Cancelar</div>
    <div className={styles2.ocultar}>Ocultar</div>
    <ul className={styles2.SoliciAH}>
      {solicitudes.map((solicitud) => (
        <li key={solicitud._id}>
          <SolicitudItem solicitud={solicitud} onDeleteSolicitud={handleDeleteSolicitud} />
        </li>
        
      ))}
    </ul>



    <div className={styles2.recibidas} onClick={onRecibidasTextClick}>
      Recibidas
    </div>
    <div className={styles2.enviadas}>Enviadas</div>
    <div className={styles2.ocultas} onClick={onOcultasTextClick}>
      Ocultas
    </div>
    <div className={styles2.guardadas} onClick={onGuardadasTextClick}>
      Guardadas
    </div>

    <img className={styles2.solicitudes2Child23} alt="" src="/group-146.svg" />
  </div> : null
  }
  {
    pag === 3 ? <div id="container">
    <div className={styles3.solicitudes3}>
      <img
        className={styles3.solicitudes3Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img
        className={styles3.solicitudes3Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles3.solicitudes3Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <img className={styles3.rectangleIcon} alt="" src="/rectangle-16.svg" />
      <div className={styles3.rectangleDiv} />
      <img className={styles3.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles3.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles3.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles3.solicitudes}>Solicitudes</div>
      <div className={styles3.solicitudesOcultas}>Solicitudes Ocultas</div>
      <div className={styles3.enviar}>Enviar</div>
      <div className={styles3.cancelar}>Cancelar</div>
      <div className={styles3.solicitudes3Child1} />
      <div className={styles3.solicitudes3Child2} />
      <div className={styles3.solicitudes3Child3} />
      <div className={styles3.solicitudes3Child4} />
      <div className={styles3.ellipseDiv} />
      <div className={styles3.solicitudes3Child5} />
      <div className={styles3.solicitudes3Child6} />
      <b className={styles3.nombreYApellido}>Nombre y Apellido / Apodo</b>
      <b className={styles3.nombreYApellido1}>Nombre y Apellido / Apodo</b>
      <b className={styles3.nombreYApellido2}>Nombre y Apellido / Apodo</b>
      <img className={styles3.groupIcon} alt="" src="/group-147.svg" />
      <img className={styles3.solicitudes3Child7} alt="" src="/group-147.svg" />
      <img className={styles3.solicitudes3Child8} alt="" src="/group-147.svg" />
      <div className={styles3.lineDiv} />
      <div className={styles3.solicitudes3Child9} />
      <div className={styles3.solicitudes3Child10} />
      <div className={styles3.fechaOHora}>Fecha o hora</div>
      <div className={styles3.fechaOHora1}>Fecha o hora</div>
      <div className={styles3.fechaOHora2}>Fecha o hora</div>
      <div className={styles3.solicitudes3Child11} />
      <div className={styles3.solicitudes3Child12} />
      <div className={styles3.solicitudes3Child13} />
      <img className={styles3.solicitudes3Child14} alt="" src="/group-180.svg" />
      <img className={styles3.solicitudes3Child15} alt="" src="/group-180.svg" />
      <img className={styles3.solicitudes3Child16} alt="" src="/group-180.svg" />
      <img className={styles3.vectorIcon3} alt="" src="/vector6.svg" />
      <img className={styles3.vectorIcon4} alt="" src="/vector6.svg" />
      <img className={styles3.vectorIcon5} alt="" src="/vector6.svg" />
      <div className={styles3.recibidas} onClick={onRecibidasTextClick}>
        Recibidas
      </div>
      <div className={styles3.enviadas} onClick={onEnviadasTextClick}>
        Enviadas
      </div>
      <div className={styles3.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>
      <div className={styles3.ocultas}>Ocultas</div>
      <div className={styles3.ocultarLaContainer}>
        <p className={styles3.ocultarLa}>
          ** Ocultar = La persona no verá que le enviaste la solicitud, pero si
          esta
        </p>
        <p className={styles3.ocultarLa}>
          te envía una solicitud oculta, ambos se harán amigos.
        </p>
      </div>
      <img className={styles3.solicitudes3Child17} alt="" src="/group-146.svg" />

      {/* Your existing UI elements are now integrated */}
      {friendRequests.map((request) => (
        <div key={request.id}>
          <p>{request.name}</p>
          <p>Status: {request.status}</p>
          {request.status === 'hidden' && (
            <button onClick={() => onEnviarClick(request.id)}>Enviar</button>
          )}
        </div>
      ))}
    </div>
  </div> : null
  }
  {
    pag === 4 ? <div className={styles4.solicitudes4}>
    <img
      className={styles4.solicitudes4Child}
      alt=""
      src="/rectangle-29.svg"
      onClick={onRectangleClick}
    />
    <img
      className={styles4.solicitudes4Item}
      alt=""
      src="/rectangle-29.svg"
      onClick={onRectangle1Click}
    />
    <img
      className={styles4.solicitudes4Inner}
      alt=""
      src="/rectangle-29.svg"
      onClick={onRectangle2Click}
    />
    <img className={styles4.rectangleIcon} alt="" src="/rectangle-16.svg" />
    <div className={styles4.rectangleDiv} />
    <img className={styles4.vectorIcon} alt="" src="/vector2.svg" />
    <img className={styles4.vectorIcon1} alt="" src="/vector2.svg" />
    <img className={styles4.vectorIcon2} alt="" src="/vector2.svg" />
    <div className={styles4.ocultar}>Ocultar</div>
    <img className={styles4.frameIcon} alt="" src="/frame.svg" />
    <img className={styles4.vectorIcon3} alt="" src="/vector3.svg" />
    <img className={styles4.vectorIcon4} alt="" src="/vector4.svg" />
    <img className={styles4.vectorIcon5} alt="" src="/vector5.svg" />
    <img className={styles4.frameIcon1} alt="" src="/frame.svg" />
    <img className={styles4.vectorIcon6} alt="" src="/vector2.svg" />
    <img className={styles4.vectorIcon7} alt="" src="/vector2.svg" />
    <img className={styles4.vectorIcon8} alt="" src="/vector2.svg" />
    <div className={styles4.solicitudes}>Solicitudes</div>
    <div className={styles4.solicitudesGuardadas}>Solicitudes Guardadas</div>
    <div className={styles4.enviar}>Enviar</div>
    <div className={styles4.cancelar}>Cancelar</div>
    <div className={styles4.solicitudes4Child1} />
    <div className={styles4.solicitudes4Child2} />
    <div className={styles4.solicitudes4Child3} />
    <div className={styles4.solicitudes4Child4} />
    <div className={styles4.ellipseDiv} />
    <div className={styles4.solicitudes4Child5} />
    <div className={styles4.solicitudes4Child6} />
    <b className={styles4.nombreYApellido}>Nombre y Apellido / Apodo</b>
    <b className={styles4.nombreYApellido1}>Nombre y Apellido / Apodo</b>
    <b className={styles4.nombreYApellido2}>Nombre y Apellido / Apodo</b>
    <img className={styles4.groupIcon} alt="" src="/group-147.svg" />
    <img className={styles4.solicitudes4Child7} alt="" src="/group-147.svg" />
    <img className={styles4.solicitudes4Child8} alt="" src="/group-147.svg" />
    <div className={styles4.lineDiv} />
    <div className={styles4.solicitudes4Child9} />
    <div className={styles4.solicitudes4Child10} />
    <div className={styles4.fechaOHora}>Fecha o hora</div>
    <div className={styles4.fechaOHora1}>Fecha o hora</div>
    <div className={styles4.fechaOHora2}>Fecha o hora</div>
    <div className={styles4.solicitudes4Child11} />
    <div className={styles4.solicitudes4Child12} />
    <div className={styles4.solicitudes4Child13} />
    <img className={styles4.solicitudes4Child14} alt="" src="/group-180.svg" />
    <img className={styles4.solicitudes4Child15} alt="" src="/group-180.svg" />
    <img className={styles4.solicitudes4Child16} alt="" src="/group-180.svg" />
    <img className={styles4.vectorIcon9} alt="" src="/vector6.svg" />
    <img className={styles4.vectorIcon10} alt="" src="/vector6.svg" />
    <img className={styles4.vectorIcon11} alt="" src="/vector6.svg" />
    <div className={styles4.guardadasSon}>
      ** Guardadas = Son personas que dejaste pendiente enviarle una solicitud
      de amistad.
    </div>
    <div className={styles4.recibidas} onClick={onRecibidasTextClick}>
      Recibidas
    </div>
    <div className={styles4.enviadas} onClick={onEnviadasTextClick}>
      Enviadas
    </div>
    <div className={styles4.ocultas} onClick={onOcultasTextClick}>
      Ocultas
    </div>
    <div className={styles4.guardadas}>Guardadas</div>
    <div className={styles4.frame} />
    <img className={styles4.solicitudes4Child17} alt="" src="/group-146.svg" />
  </div> : null
  }
  <Lateral pantalla="Solicitudes"/>
</div>


    
        
  );
};

export default Solicitudes1;