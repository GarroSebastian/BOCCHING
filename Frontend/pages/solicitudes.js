import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes.module.css";
import Lateral from "../components/lateral.js";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import SolicitudApi from "../api/solicitud.js";
import Global from "../extra/global.js";

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
  const [usuarios, setUsuarios] = useState([]);

  const defaultSolicitud = {
    _id: '', //el id de la solicitud
    idEmisor: '', //el id del usuario que creó la solicitud
    idReceptor: '', //el id del usuario al que se le envió la solicitud. Si existe una Solicitud con emisor X y receptor Y, no puede existir una con emisor Y y receptor X
    tipo: 0, //si es 0, es una solicitud normal; 1, solicitud oculta; 2, ya son amigos
    viewed: false, //si es false, el usuario todavía no ha visto la solicitud y debe ser notificado
    ano: 0, //el año
    mes: 0, //el mes
    dia: 0, //el día
    diaSem: '', //el día de la semana
    hora: 0, //la hora
    minuto: 0 //el minuto cuando se envió el mensaje
  }

  useEffect(() => {

    //UsuarioApi.findAll().then((users) => {
    //const aux = user.data.usuarios;
    //setUsuarios(aux)
    setUsuarios([
      {...defaultUsuario,_id:'0',nombre:'Yo',apodo:'YoApodo',mostrar_nombre:true},
      {...defaultUsuario,_id:'1',nombre:'Adrián',apodo:'AdriánApodo',mostrar_nombre:true},
      {...defaultUsuario,_id:'2',nombre:'RodrigoNombre',apodo:'Rodrigo',mostrar_nombre:false},
      {...defaultUsuario,_id:'3',nombre:'Camayo',apodo:'CamayoApodo',mostrar_nombre:true},
      {...defaultUsuario,_id:'4',nombre:'George',apodo:'GeorgeApodo',mostrar_nombre:true}
    ])

    //UsuarioApi.findCurrent().then((user) => {
    //const aux = user.data.usuario;
    //setUsuario(aux)
    setUsuario({...defaultUsuario,_id:'0',nombre:'Yo',apodo:'YoApodo',mostrar_nombre:true})
    
    // Utiliza la función SolicitudesRecibidasUsuario de tu API de solicitudes
    SolicitudApi.SolicitudesRecibidasUsuario(window.localStorage.token)
      .then((response) => {
        if (response && response.data) {
          //const solicitudesData = response.data.solicitudesRecibidas;
          //setSolicitudes(solicitudesData);
          setSolicitudes([
            {...defaultSolicitud,_id:'0',idEmisor:'1',idReceptor:'0',tipo:0, ano:2023,mes:11,dia:27,diaSem:"Lunes",hora:2,minuto:45},
            {...defaultSolicitud,_id:'1',idEmisor:'2',idReceptor:'0',tipo:0, ano:2023,mes:11,dia:26,diaSem:"Lunes",hora:2,minuto:45},
            {...defaultSolicitud,_id:'2',idEmisor:'0',idReceptor:'3',tipo:0, ano:2023,mes:11,dia:25,diaSem:"Lunes",hora:2,minuto:45},
            {...defaultSolicitud,_id:'3',idEmisor:'0',idReceptor:'4',tipo:1, ano:2023,mes:11,dia:10,diaSem:"Lunes",hora:2,minuto:45},
          ]);

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

  return (
    <div id='container'>
      <div className={styles.solicitudes1}>
      {
          pag===1?
            <>
              <img className={styles.solicitudes1Item} alt="" src="/rectangle-16.svg" />
              <div className={styles.recibidas}>Recibidas</div>
            </>
          :
            null
        }
        {
          pag===2?
            null
          :
            <>
              <img className={styles.solicitudes1Inner} alt="" src="/rectangle-29.svg" onClick={e => setPag(2)}/>
              <div className={styles.enviadas}>Enviadas</div>
            </> 
        }
        {
          pag===3?
            null
          :
            <>
              <img className={styles.rectangleIcon} alt="" src="/rectangle-29.svg" onClick={e => setPag(3)}/>
              <div className={styles.ocultas}>Ocultas</div>
            </>
        }
        <div className={styles.rectangleDiv} />
        
        {solicitudes.filter(s => (pag===1&&(s.idReceptor===usuario._id&&s.tipo===0)) || (pag===2&&(s.idEmisor===usuario._id&&s.tipo===0)) || (pag===3&&(s.idEmisor===usuario._id&&s.tipo===1)) ).map((s, index) => {

          const getFrUser = () => {
            return usuarios.find(u => u._id === s[val]);
          }
              
          const primero=470, salto=100, val=(pag===1?"idEmisor":"idReceptor");
          return(
            <>
              <div className={styles.Caja} style={{top: `${primero+salto*index}px`}} onClick={e => location.pathname = `/perfil?id=${encodeURIComponent(s[val])}`}/>
              <div className={styles.Elipse} style={{top: `${primero-7+salto*index}px`}} onClick={e => location.pathname = `/perfil?id=${encodeURIComponent(s[val])}`}/>
              {
                pag === 1 ?
                  null
                : pag===2 ?
                  <>
                    <div className={styles.contlax} style={{top: `${primero-1+salto*index}px`}} onClick={e => onDeleteSolicitud(s)}/>
                    <img className={styles.lax} style={{top: `${primero+10+salto*index}px`}} alt="" src="/group-180.svg" />
                    <img className={styles.ojoMa} style={{top: `${primero-1+salto*index}px`}} alt="" src="/vector2.svg" />
                    <img className={styles.ojo} style={{top: `${primero+10+salto*index}px`}} alt="" src="/frame1.svg" />
                  </>
                :
                  null
              }
              <img className={styles.img} style={{top: `${primero+10+salto*index}px`}} alt="" src="/group-147.svg" />
              <p className={styles.nombres} style={{top: `${primero+21+salto*index}px`}}>
                {
                  getFrUser().mostrar_nombre === true ?
                    `${getFrUser().nombre} ${getFrUser().apellidos}`
                  :
                    `${getFrUser().apodo}`
                }
              </p>
              <div className={styles.linediv} style={{top: `${primero+16+salto*index}px`}}/> {/* Línea divisoria */}
              <p className={styles.fechas} style={{top: `${primero+23+salto*index}px`}}>{Global.CompararFechas(s.ano, s.mes, s.dia, s.diaSem, s.hora, s.minuto)}</p>
            </>
          )
        })}

        <div className={styles.solicitudes}>Solicitudes</div>
        <div className={styles.solicitudesRecibidas}>{pag===1?"Solicitudes recibidas":pag===2?"Solicitudes enviadas":"Solicitudes ocultas"}</div>
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