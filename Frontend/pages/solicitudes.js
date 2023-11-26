import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes.module.css";
import Lateral from "../components/lateral.js";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import SolicitudApi from "../api/solicitud.js";

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

const Solicitudes = () => {
  Zoom();
  const router = useRouter();
  const [solicitudes, setSolicitudes] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [solicitudesSinViewer, setSolicitudesSinViewer] = useState(0);
  const [pag, setPag] = useState(1);

  const defaultUsuario = {
    _id: '',
    nombre: '',
    apellidos: '',
    correo: '',
    id_genero: 0,
    nacimiento: '',
    apodo: '',
    contrasena: '',
    foto: '',
    facultad: -1,
    carrera: '',
    especialidad: '',
    descripcion: '',
    mostrar_nombre: true,
    confirmationCode: ""
  }
  const [usuario, setUsuario] = useState(defaultUsuario);

  const defaultSolicitud = {
    _id: '', //el id de la solicitud
    idEmisor: '', //el id del usuario que creó la solicitud
    idReceptor: '', //el id del usuario al que se le envió la solicitud. Si existe una Solicitud con emisor X y receptor Y, no puede existir una con emisor Y y receptor X
    tipo: 0, //si es 0, es una solicitud normal; 1, solicitud oculta; 2, ya son amigos
    viewed: false //si es false, el usuario todavía no ha visto la solicitud y debe ser notificado
  }

  useEffect(() => {

    // Utiliza la función SolicitudesRecibidasUsuario de tu API de solicitudes
    SolicitudApi.SolicitudesRecibidasUsuario(window.localStorage.token)
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
          ]);
          
          //UsuarioApi.findCurrent().then((user) => {
          //const aux = user.data.usuario;
          //setUsuario(aux)
          setUsuario({...defaultUsuario,_id:'0',nombre:'Yo',apodo:'YoApodo',mostrar_nombre:true})

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
    
    SolicitudApi.actualizarViewerSolicitudes(window.localStorage.token)
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

  const AceptarSolicitud = (solicitud) => {};

  const RechazarSolicitud = (solicitud) => {};

  return (
    <div id='container'>
      <div className={styles.solicitudes1}>
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
        
        {solicitudes.filter(solicitud => solicitud.tipo === 0).map((solicitud, index) => {
              
          // Convierte la fecha en un objeto Date
          const dateObj = new Date(solicitud.date);
          // Obtiene el día, mes, año, hora y minutos
          const day = dateObj.getDate();
          const month = dateObj.getMonth() + 1; // Los meses comienzan en 0, por lo que sumamos 1
          const year = dateObj.getFullYear() % 100; // Obtiene los últimos dos dígitos del año
          const hours = dateObj.getHours();
          const minutes = dateObj.getMinutes();
          // Formatea la fecha y la hora
          const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;
          const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

          return(
            <>
              <div className={styles.Caja} />
              <div className={styles.Elipse} />
              <div className={styles.contlax} />
              <img className={styles.lax} alt="" src="/group-180.svg" onClick={e => onDeleteSolicitud(solicitud)} />
              <img className={styles.img} alt="" src="/group-147.svg" />
              <img className={styles.ojoMa} alt="" src="/vector2.svg" />
              <img className={styles.ojo} alt="" src="/frame1.svg" />
              <p className={styles.nombres}>
                {solicitud.receptor ?
                  <>{solicitud.receptor.nombre} / {solicitud.receptor.apodo || 'No disponible'}</>
                :
                  'No disponible'
                }
              </p>
              <div className={styles.linediv} /> {/* Línea divisoria */}
              <p className={styles.fechas}>{formattedDate} - {formattedTime}</p>
            </>
          )
        })}

        <div className={styles.solicitudes}>Solicitudes</div>
        <div className={styles.recibidas}>Recibidas</div>

        <div className={styles.solicitudesRecibidas}>Solicitudes recibidas</div>
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

        {/* Mensaje flotante */}
        {showMessage && (
          <div className={styles.floatingMessage}>
            Hay {solicitudesSinViewer} solicitudes sin viewer en 1.
          </div>
        )}
      </div>
      <Lateral pantalla="Solicitudes"/>
    </div> 
  );
};

export default Solicitudes;