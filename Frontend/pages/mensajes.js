import { useEffect, useState } from "react";
import { Zoom } from "../extra/zoom.js"
import styles from "./mensajes.module.css";
import Lateral from "../components/lateral.js"
import UsuarioApi from "../api/usuario";

const Mensajes = () => {
  Zoom()

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
  const defaultMensaje = {
    idEmisor: "",
    idReceptor: "",
    mensaje: "",
    ano: 0,
    mes: 0,
    dia: 0,
    diaSem: '',
    hora: 0,
    minuto: 0,
    segundo: 0,
    mili: 0
  }
  const [mensajes, setMensajes] = useState([]);
  const defaultChat = {
    idOtro: "",
    nombre: "",
    ultimo: "",
    fecha: "",
    foto: "",
    mensaje: ""
  }
  const [chats, setChats] = useState([]);
  const [busqChat, setBusqChat] = useState("");
  const [idConv, setIdConv] = useState("");

  const filtrarMensajes = async() => {
    const filtrados = []
    for(const m of sinfiltrar){
      if(m.idEmisor===usuario._id || m.idReceptor===usuario._id){
          filtrados.push(m)
      }
    }
    return filtrados;
  }
  
  const handleOnLoad = async() => {
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
  }

  useEffect(() => {
    if(usuarios.length>0){
      //UsuarioApi.findCurrent().then((user) => {
      //const aux = user.data.usuario;
      //setUsuario(aux)
      setUsuario({...defaultUsuario,_id:'0',nombre:'Yo',apodo:'YoApodo',mostrar_nombre:true})
    }
  }, [usuarios])

  const [sinfiltrar, setSinfiltrar] = useState([])
  useEffect(() => {
    if(usuario!==defaultUsuario){
      setSinfiltrar([
        {...defaultMensaje,idEmisor: "0", idReceptor: "1", mensaje: "hola1", ano: 2023, mes: 11, dia: 2, diaSem: "Jueves", hora: 3, minuto: 53},
        {...defaultMensaje,idEmisor: "0", idReceptor: "1", mensaje: "hola2", ano: 2023, mes: 11, dia: 2, diaSem: "Jueves", hora: 3, minuto: 55},
        {...defaultMensaje,idEmisor: "2", idReceptor: "0", mensaje: "mob1", ano: 2023, mes: 11, dia: 1, diaSem: "Miércoles", hora: 3, minuto: 53},
        {...defaultMensaje,idEmisor: "2", idReceptor: "0", mensaje: "mob2", ano: 2023, mes: 11, dia: 1, diaSem: "Miércoles", hora: 3, minuto: 55},
        {...defaultMensaje,idEmisor: "0", idReceptor: "3", mensaje: "AAA1", ano: 2023, mes: 10, dia: 31, diaSem: "Martes", hora: 3, minuto: 53},
        {...defaultMensaje,idEmisor: "3", idReceptor: "0", mensaje: "AAA2", ano: 2023, mes: 10, dia: 31, diaSem: "Martes", hora: 3, minuto: 55},
        {...defaultMensaje,idEmisor: "4", idReceptor: "0", mensaje: "Bocchingn't1", ano: 2023, mes: 9, dia: 1, diaSem: "Sábado", hora: 2, minuto: 55},
        {...defaultMensaje,idEmisor: "0", idReceptor: "4", mensaje: "Bocchingn't2", ano: 2023, mes: 9, dia: 1, diaSem: "Sábado", hora: 3, minuto: 55},
        {...defaultMensaje,idEmisor: "3", idReceptor: "1", mensaje: "si salgo mueres", ano: 2023, mes: 10, dia: 20, hora: 3, minuto: 53}
      ])
    }
  }, [usuario])

  useEffect(() => {
    if(sinfiltrar.length>0){
      filtrarMensajes().then((filtrados) => {
        setSinfiltrar([])
        setMensajes(filtrados)
      })
    }
    //setChats([{...defaultChat,idOtro: "1", nombre: "Adrián", texto: "hola"}, {...defaultChat,idOtro: "2", nombre: "Rodrigo", texto: "mob"}, {...defaultChat,idOtro: "3", nombre: "Camayo", texto: "AAAAA"}])
  }, [sinfiltrar])

  useEffect(() => {
    if(mensajes.length>0){
      asignarChats().then((result) => {
        setChats(result)
      })
    }
  }, [mensajes])

  const CompararFechas = (ano, mes, dia, diaSem, hora, minuto) => {
    const fecha = new Date(`${ano}-${mes}-${dia}`);
    const hoy = new Date();
    const dif = Math.floor((hoy-fecha) / (1000 * 60 * 60 * 24));
    if(dif<0){
      return "Error: Resta negativa";
    }else if(dif===0){
      return `${hora}:${minuto}`;
    }else if(dif===1){
      return "Ayer";
    }else if(dif<7){
      return diaSem;
    }else{
      return `${dia<10?"0":""}${dia}/${mes<10?"0":""}${mes}/${ano}`;
    }
  }
  
  const asignarChats = async() => {
    const aux = [];
    for(const m of mensajes){
      const idOtro = m.idEmisor===usuario._id? m.idReceptor : m.idEmisor;
      const i = aux.findIndex((item) => item.idOtro===idOtro);
      const f = CompararFechas(m.ano, m.mes, m.dia, m.diaSem, m.hora, m.minuto)
      if(i==-1){ //Ordenar chats
        aux.push({...defaultChat,idOtro: idOtro, nombre: usuarios.find((u) => u._id===idOtro).mostrar_nombre? usuarios.find((u) => u._id===idOtro).nombre : usuarios.find((u) => u._id===idOtro).apodo, ultimo: m.mensaje, fecha: f})
      }else if(true){ //Mensaje más reciente
        aux[i] = {...aux[i],ultimo: m.mensaje, fecha: f}
      }
    }
    return aux;
  }
  
  let n = true;
  useEffect(() => {
    if(n){
      n=false;
      handleOnLoad();
    }
  }, [])

  const cambiarTextareas = (texto) => {
    const aux = chats.map((item) => {
      if(item.idOtro === idConv){
        return {...item, mensaje: texto}
      }else{
        return item
      }
    })
    setChats(aux)
  }
  
  const prepararMensaje = async() => {
    let sem;
    switch(new Date().getDay()){
      case 1:
        sem = "Lunes"
        break;
      case 2:
        sem = "Martes"
        break;
      case 3:
        sem = "Miércoles"
        break;
      case 4:
        sem = "Jueves"
        break;
      case 5:
        sem = "Viernes"
        break;
      case 6:
        sem = "Sábado"
        break;
      case 7:
        sem = "Domingo"
        break;
      default:
        sem = "Error"
        break;
    }
    const aux = {
      idEmisor: usuario._id,
      idReceptor: idConv,
      mensaje: ChatActual().mensaje,
      ano: new Date().getFullYear(),
      mes: new Date().getMonth()+1,
      dia: new Date().getDate(),
      diaSem: sem,
      hora: new Date().getHours(),
      minuto: new Date().getMinutes(),
      segundo: new Date().getSeconds(),
      mili: new Date().getMilliseconds()
    }
    return aux;
  }

  const ChatActual = () => {
    return chats.find((item) => item.idOtro === idConv);
  }
  
  const EnviarMensaje = () => {
    if(ChatActual().mensaje.length>0){
      prepararMensaje().then((mensaje) => {
        //MensajesApi.sendMessage(mensaje)
        cambiarTextareas("")
      })
    }
  }
  
  return (
    <div id="container">
      <div className={styles.mensajes2}>
        <div className={styles.mensajes2Item} />
        {
          idConv!=""?
            <>
              <div className={styles.mensajes2Inner} />
              <div className={styles.daDeLa}>Día de la conversación</div>
              <div className={styles.rectangleDiv} />
              <div className={styles.ellipseDiv} />
              <img className={styles.groupIcon} alt="" src="/group-147.svg" />
              {
                mensajes?.filter((item) => item.idEmisor===idConv || item.idReceptor===idConv).map((item, index) => {
                  if(item.idEmisor===usuario._id){
                    const primero=500, salto=110;
                    return(
                      <>
                        <div className={styles.mensajes2Child6} style={{top: `${primero+salto*index}px`}}/>
                        <div className={styles.mensaje00012} style={{top: `${primero+17+salto*index}px`}}>{item.mensaje}</div>
                        <div className={styles.hora} style={{top: `${primero+68.5+salto*index}px`}}>{item.hora}:{item.minuto}</div>
                      </>
                    )
                  }else{
                    const primero=480, salto=110;
                    return(
                      <>
                        <div className={styles.mensajes2Child1} style={{top: `${primero+salto*index}px`}}/>
                        <img className={styles.mensajes2Child3} style={{top: `${primero+10.88+salto*index}px`}} alt="" src="/group-140.svg" />
                        <div className={styles.mensajes2Child5} style={{top: `${primero+45+salto*index}px`}}/>
                        <b className={styles.nombre01} style={{top: `${primero+12+salto*index}px`}}>{ChatActual()?.nombre}</b>
                        <div className={styles.mensaje00011} style={{top: `${primero+55+salto*index}px`}}>{item.mensaje}</div>
                        <div className={styles.hora2} style={{top: `${primero+107+salto*index}px`}}>{item.hora}:{item.minuto}</div>
                      </>
                    )
                  }
                })
              }
              <div className={styles.mensajes2Child9} />
              <div className={styles.mensajes2Child10} />
              <div className={styles.escribirMensaje}>
                <textarea value={ChatActual()?.mensaje} onChange={e => cambiarTextareas(e.target.value)} style={{width: "262%", height: "100%", resize: "none", border: "none"}}/>
              </div>
              <div className={styles.mensajes2Child31}>
                <button onClick={e => EnviarMensaje()} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
            </>
          :
            <>
              <div className={styles.seleccioneUnaConversacin}>
                <p className={styles.seleccioneUna}>Selecciona una</p>
                <p className={styles.seleccioneUna}>conversación</p>
              </div>
              <img
                className={styles.transhumansGrowthIcon}
                alt=""
                src="/transhumans-growth@2x.png"
              />
            </>
        }
        <div className={styles.mensajes}>Mensajes</div>

        <div className={styles.mensajes2Child11} />
        <div className={styles.bsqueda}>
          <input type="text" placeholder="Búsqueda" value={busqChat} onChange={e => setBusqChat(e.target.value)} style={{width: "140%", background: "transparent", border: "none"}}></input>
        </div>
        
        <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
        <div className={styles.lineDiv} />
        <div className={styles.mensajes2Child12} />
        {
          chats?.filter((item) => item.nombre.toLowerCase().includes(busqChat.toLowerCase())).map((item, index) => {
            const primero=360, salto=97;
            return(
              <>
                <div className={styles.mensajes2Child13} style={{top: `${primero+salto*index}px`}}>
                  <button onClick={e => setIdConv(item.idOtro)} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
                </div>
                <div className={styles.mensajes2Child19} style={{top: `${primero-7+salto*index}px`}}>
                  <button onClick={e => setIdConv(item.idOtro)} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
                </div>
                <b className={styles.nombre1} style={{top: `${primero+4+salto*index}px`}}>{item.nombre}</b>
                <div className={styles.mensaje0001} style={{top: `${primero+31+salto*index}px`}}>{item.ultimo}</div>
                <div className={styles.horaOFecha} style={{top: `${primero+48+salto*index}px`}}>{item.fecha}</div>
                <img className={styles.mensajes2Child25} style={{top: `${primero+11+salto*index}px`}} alt="" src="/group-147.svg" />
              </>
            )
          })
        }
        <div className={styles.nombre11}>{ChatActual()?.nombre}</div>
      </div>
      <Lateral pantalla="Mensajes"></Lateral>
    </div>
  );
};

export default Mensajes;