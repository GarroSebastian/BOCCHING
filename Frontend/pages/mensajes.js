import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Zoom } from "../extra/zoom.js"
import styles from "./mensajes.module.css";
import Lateral from "../components/lateral.js"

const Mensajes = () => {
  Zoom()
  const router = useRouter();

  const defaultMensaje = {
    idEmisor: "",
    idReceptor: "",
    mensaje: "",
    fecha: "2022"
  }
  const [mensajes, setMensajes] = useState([]);
  const defaultChat = {
    idUsuario: "",
    nombre: "",
    texto: "",
    fecha: "2022",
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

  const findChat = (id) => {
    for(const item of chats){
      if(item.idUsuario === id){
        return item;
      }
    }
    return null;
  }
  
  const handleOnLoad = () => {
    setChats([{...defaultChat,idUsuario: "1", nombre: "Adrián", texto: "hola"}, {...defaultChat,idUsuario: "2", nombre: "Rodrigo", texto: "mob"}, {...defaultChat,idUsuario: "3", nombre: "Camayo", texto: "AAAAA"}])
    setMensajes([
      {...defaultMensaje,idEmisor: "0", idReceptor: "1", mensaje: "hola1"},
      {...defaultMensaje,idEmisor: "1", idReceptor: "0", mensaje: "hola2"},
      {...defaultMensaje,idEmisor: "0", idReceptor: "2", mensaje: "mob1"},
      {...defaultMensaje,idEmisor: "2", idReceptor: "0", mensaje: "mob2"},
      {...defaultMensaje,idEmisor: "0", idReceptor: "3", mensaje: "AAA1"},
      {...defaultMensaje,idEmisor: "3", idReceptor: "0", mensaje: "AAA2"}
    ]);
  }
  
  useEffect(() => {
    handleOnLoad();
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
              <div className={styles.mensajes2Child1} />
              <div className={styles.mensajes2Child2} />
              <img className={styles.mensajes2Child3} alt="" src="/group-140.svg" />
              <img className={styles.mensajes2Child4} alt="" src="/group-140.svg" />
              <div className={styles.mensajes2Child5} />
              <div className={styles.mensajes2Child6} />
              <div className={styles.mensajes2Child7} />
              <div className={styles.mensajes2Child8} />
              <b className={styles.nombre01}>Nombre 01</b>
              <b className={styles.nombre011}>Nombre 01</b>
              <div className={styles.mensaje00011}>Mensaje 0001.1</div>
              <div className={styles.mensaje00012}>Mensaje 0001.2</div>
              <div className={styles.mensaje00013}>Mensaje 0001.3</div>
              <div className={styles.mensaje00014}>Mensaje 0001.4</div>
              <div className={styles.hora}>Hora</div>
              <div className={styles.hora1}>Hora</div>
              <div className={styles.hora2}>Hora</div>
              <div className={styles.hora3}>Hora</div>
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
                  <button onClick={e => setIdConv(item.idUsuario)} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
                </div>
                <b className={styles.nombre1} style={{top: `${primero+4+salto*index}px`}}>{item.nombre}</b>
                <div className={styles.mensaje0001} style={{top: `${primero+31+salto*index}px`}}>{item.texto}</div>
                <div className={styles.horaOFecha} style={{top: `${primero+48+salto*index}px`}}>{item.fecha}</div>
                <img className={styles.mensajes2Child25} style={{top: `${primero+11+salto*index}px`}} alt="" src="/group-147.svg" />
              </>
            )
          })
        }
        <div className={styles.nombre11}>{findChat(idConv)?.nombre}</div>
      </div>
      <Lateral pantalla="Mensajes"></Lateral>
    </div>
  );
};

export default Mensajes;