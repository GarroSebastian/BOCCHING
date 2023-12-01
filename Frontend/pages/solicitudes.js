import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes.module.css";
import Lateral from "../components/lateral.js";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js";
import SolicitudApi from "../api/solicitud.js";
import Global from "../extra/global.js";

/*
Por cada solicitud:
- Mostrar foto
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
  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  const botonAmarillo = (s,n) => {
    if(pag===1){
      SolicitudApi.actualizarSolicitud({...s,tipo:2}).then(() => {
        handleSolicitudes()
        alert("¡Felicidades, ya eres amig@ de "+n+"!")
      })
    }else if(pag===2){
      SolicitudApi.borrarSolicitudById(s._id).then(() => {
        handleSolicitudes()
        alert("Se ha cancelado la solicitud")
      })
    }else{
      SolicitudApi.actualizarSolicitud({...s,tipo:0}).then(() => {
        handleSolicitudes()
        alert(n+" será notificad@ de tu solicitud")
      })     
    }
  }
  
  const botonOjo = (s) => {
    SolicitudApi.actualizarSolicitud({...s,tipo:1}).then(() => {
      handleSolicitudes()
      alert("Se ha ocultado la solicitud")
    })
  }

  const botonX = async(s) => {
    SolicitudApi.borrarSolicitudById(s._id).then(() => {
      handleSolicitudes()
      alert("Se ha rechazado la solicitud")
    })
  }

  const verPerfil = (id) => {
    const path = `/perfil?id=${encodeURIComponent(id)}`;
    router.push(path);
  };
  
  const handleSolicitudes = () => {
    
    setSolicitudes([
      {...defaultSolicitud,_id:'0',idEmisor:'1',idReceptor:'0',tipo:0, ano:2023,mes:11,dia:27,diaSem:"Lunes",hora:2,minuto:45},
      {...defaultSolicitud,_id:'1',idEmisor:'2',idReceptor:'0',tipo:0, ano:2023,mes:11,dia:26,diaSem:"Lunes",hora:2,minuto:45},
      {...defaultSolicitud,_id:'2',idEmisor:'0',idReceptor:'3',tipo:0, ano:2023,mes:11,dia:25,diaSem:"Lunes",hora:2,minuto:45},
      {...defaultSolicitud,_id:'3',idEmisor:'0',idReceptor:'4',tipo:1, ano:2023,mes:11,dia:10,diaSem:"Lunes",hora:2,minuto:45},
    ]);
    /*
    // Utiliza la función SolicitudesRecibidasUsuario de tu API de solicitudes
    SolicitudApi.SolicitudesRecibidasUsuario(window.localStorage.token)
    .then((response) => {
      console.log("resp",response)
      if (response && response.data) {
        
        //const solicitudesData = response.data.solicitudesRecibidas;
        //setSolicitudes(solicitudesData);
        
        
      }
    })
    .catch((error) => {
      console.error("Error al obtener las solicitudes:", error);
    });
    */

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

    handleSolicitudes()
    
  }, []);

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
            <>
              <img className={styles.solicitudes2Child} alt="" src="/rectangle-29.svg" onClick={e => setPag(1)}/>
              <div className={styles.recibidas2}>Recibidas</div>
            </>
        }
        {
          pag===2?
            <>
              <img className={styles.solicitudes2Item} alt="" src="/rectangle-16.svg" />
              <div className={styles.enviadas2}>Enviadas</div>
            </>
          :
            <>
              <img className={styles.solicitudes1Inner} alt="" src="/rectangle-29.svg" onClick={e => setPag(2)}/>
              <div className={styles.enviadas}>Enviadas</div>
            </>
        }
        {
          pag===3?
            <>
              <img className={styles.rectangleIcon2} alt="" src="/rectangle-16.svg" />
              <div className={styles.ocultas2}>Ocultas</div>
            </>
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
              <div className={styles.Caja} style={{top: `${primero+salto*index}px`}} onClick={e => verPerfil(s[val])}/>
              <div className={styles.Elipse} style={{top: `${primero-7+salto*index}px`}} onClick={e => verPerfil(s[val])}>
                {getFrUser()!==null && <img id="imagenSeleccionada" src={getFrUser().foto} alt="Imagen seleccionada" style={{display: "block", maxWidth: "90%", maxHeight: "90%", borderRadius: "20%"}}/>}
              </div>
              <div className={styles.contlax} style={{top: `${primero-4+salto*index}px`}} onClick={e => botonAmarillo(s, getFrUser().mostrar_nombre === true? getFrUser().nombre : getFrUser().apodo)}/>
              {
                pag===2 ?
                  <>
                    <img className={styles.lax} style={{top: `${primero+10+salto*index}px`}} alt="" src="/group-180.svg" />
                    <img className={styles.ojoMa} style={{top: `${primero-1+salto*index}px`}} onClick={e => botonOjo(s)} alt="" src="/vector2.svg" />
                    <img className={styles.ojo} style={{top: `${primero+10+salto*index}px`}} alt="" src="/frame1.svg" />
                  </>
                :
                  <>
                    <img className={styles.vectorIconz} style={{top: `${primero+3+salto*index}px`}} onClick={e => botonX(s)} alt="" src="/vector2.svg" />
                    <img className={styles.solicitudes3Child14} style={{top: `${primero+17+salto*index}px`}} alt="" src="/group-180.svg" />
                    {
                      pag===1 ?
                        <img className={styles.checkIcon} style={{top: `${primero+18+salto*index}px`}} alt="" src="/check.svg" />
                      :
                        <img className={styles.vectorIcon5z} style={{top: `${primero+15+salto*index}px`}} alt="" src="/vector6.svg" />
                    }
                  </>
              }
              {
                getFrUser().foto===null && <img className={styles.img} style={{top: `${primero+10+salto*index}px`}} alt="" src="/group-147.svg"/>
              }
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
        {
          pag===1 ?
            <>
              <div className={styles.solicitudesRecibidas}>Solicitudes recibidas</div>
              <div className={styles.cancelar}>Aceptar</div>
              <div className={styles.ocultar}>Rechazar</div>
            </>
          :pag===2?
            <>
              <div className={styles.solicitudesRecibidas}>Solicitudes enviadas</div>
              <div className={styles.cancelar}>Cancelar</div>
              <div className={styles.ocultar}>Ocultar</div>
            </>
          :
            <>
              <div className={styles.solicitudesRecibidas}>Solicitudes ocultas</div>
              <div className={styles.cancelar}>Enviar</div>
              <div className={styles.ocultar}>Cancelar</div>
            </>
        }
        
        <div className={styles.solicitudes1Child1} />

        {/* Mensaje flotante */}
        {showMessage && (
        <div className={styles.overlay}>
          <div className={styles.floatingMessage}>
            Tienes {solicitudesSinViewer} solicitudes Nuevas.
            <span className={styles.closeButton} onClick={handleCloseMessage}>X</span>
          </div>
        </div>
      )}
      </div>
      <Lateral pantalla="Solicitudes"/>
    </div> 
  );
};

export default Solicitudes;