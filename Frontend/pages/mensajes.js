import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Zoom } from "../extra/zoom.js"
import styles from "./mensajes.module.css";
import Lateral from "../components/lateral.js"
import UsuarioApi from "../api/usuario";

const Mensajes = () => {
  Zoom()
  const router = useRouter();

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
    mostrar_nombre: true
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
    minuto: 0
  }
  const [mensajes, setMensajes] = useState([]);
  const defaultChat = {
    idOtro: "",
    nombre: "",
    texto: "",
    fecha: "",
    foto: ""
  }
  const [chats, setChats] = useState([]);
  const [busqChat, setBusqChat] = useState("");
  const [idConv, setIdConv] = useState("");

  const onRectangleClick = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  const onConversacinTextClick = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

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
        {...defaultMensaje,idEmisor: "0", idReceptor: "1", mensaje: "hola1", ano: 2023, mes: 10, dia: 20, diaSem: "Viernes", hora: 3, minuto: 53},
        {...defaultMensaje,idEmisor: "1", idReceptor: "0", mensaje: "hola2", ano: 2023, mes: 10, dia: 20, diaSem: "Viernes", hora: 3, minuto: 55},
        {...defaultMensaje,idEmisor: "0", idReceptor: "2", mensaje: "mob1", ano: 2023, mes: 10, dia: 19, diaSem: "Jueves", hora: 3, minuto: 53},
        {...defaultMensaje,idEmisor: "2", idReceptor: "0", mensaje: "mob2", ano: 2023, mes: 10, dia: 19, diaSem: "Jueves", hora: 3, minuto: 55},
        {...defaultMensaje,idEmisor: "0", idReceptor: "3", mensaje: "AAA1", ano: 2023, mes: 10, dia: 18, diaSem: "Miércoles", hora: 3, minuto: 53},
        {...defaultMensaje,idEmisor: "3", idReceptor: "0", mensaje: "AAA2", ano: 2023, mes: 10, dia: 18, diaSem: "Miércoles", hora: 3, minuto: 55},
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
        console.log(mensajes)
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
      return `${dia}/${mes}/${ano}`;
    }
  }
  
  const asignarChats = async() => {
    const chats = [];
    for(const m of mensajes){
      const idOtro = m.idEmisor===usuario._id? m.idReceptor : m.idEmisor;
      const i = posChat(chats, idOtro);
      const f = CompararFechas(m.ano, m.mes, m.dia, m.diaSem, m.hora, m.minuto)
      if(i==-1){ //Actualizar si mensaje es más reciente, Ordenar chats
        chats.push({...defaultChat,idOtro: idOtro, nombre: usuarios.find((u) => u._id===idOtro).mostrar_nombre? usuarios.find((u) => u._id===idOtro).nombre : usuarios.find((u) => u._id===idOtro).apodo, texto: m.mensaje, fecha: f})
      }else{
        chats[i] = {...chats[i],texto: m.mensaje, fecha: f}
      }
    }
    return chats;
  }

  const posChat = (chats, idOtro) => {
    for(let i=0; i<chats.length; i++){
      if(chats[i].idOtro===idOtro){
        return i;
      }
    }
    return -1;
  }
  
  let n = true;
  useEffect(() => {
    if(n){
      n=false;
      handleOnLoad();
    }
  }, [])
  
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
                mensajes?.filter((item) => item.idEmisor === chats[posChat(chats,idConv)]?.idOtro).map((item) => {
                  <>
                    <div className={styles.mensajes2Child1} />
                    <img className={styles.mensajes2Child3} alt="" src="/group-140.svg" />
                    <div className={styles.mensajes2Child5} />
                    <b className={styles.nombre01}>{chats[posChat(chats,idConv)]?.nombre}</b>
                    <div className={styles.mensaje00011}>Mensaje 0001.1</div>
                    <div className={styles.hora2}>Hora</div>
                  </>
                })
              }

              <div className={styles.mensajes2Child6} />
              <div className={styles.mensajes2Child7} />
              <div className={styles.mensaje00012}>Mensaje 0001.2</div>
              <div className={styles.mensaje00013}>Mensaje 0001.3</div>
              <div className={styles.hora}>Hora</div>
              <div className={styles.hora1}>Hora</div>
              
              <div className={styles.mensajes2Child9} />
              <div className={styles.mensajes2Child10} />
              <div className={styles.escribirMensaje}>
                <textarea></textarea>
              </div>
              <div className={styles.mensajes2Child31} />
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
                  <button onClick={e => console.log(mensajes.filter((item) => item.idEmisor==index+1))} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
                </div>
                <div className={styles.mensajes2Child19} style={{top: `${primero-7+salto*index}px`}}>
                  <button onClick={e => setIdConv(item.idOtro)} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
                </div>
                <b className={styles.nombre1} style={{top: `${primero+4+salto*index}px`}}>{item.nombre}</b>
                <div className={styles.mensaje0001} style={{top: `${primero+31+salto*index}px`}}>{item.texto}</div>
                <div className={styles.horaOFecha} style={{top: `${primero+48+salto*index}px`}}>{item.fecha}</div>
                <img className={styles.mensajes2Child25} style={{top: `${primero+11+salto*index}px`}} alt="" src="/group-147.svg" />
              </>
            )
          })
        }
        <div className={styles.nombre11}>{chats[posChat(chats,idConv)]?.nombre}</div>
      </div>
      <Lateral pantalla="Mensajes"></Lateral>
    </div>
  );
};

export default Mensajes;