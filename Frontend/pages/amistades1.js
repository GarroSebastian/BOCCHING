import { useRouter } from "next/router";
import { Zoom } from "../extra/zoom.js"
import styles from "./amistades1.module.css";
import Lateral from "../components/lateral.js";
import Card from "../components/CardN.js";
import { useState, useEffect } from 'react';
import UsuarioApi from "../api/usuario.js";
import SolicitudApi from "../api/solicitud.js";
import Global from "../extra/global.js";

/*
- Cargar del Backend todas las solicitudes donde el usuario es emisor o receptor, y que sean de tipo 2 (Amigos)
- Si el usuario es el emisor, mostrar la info del receptor; y viceversa
- Utilizar el id del otro usuario para agarrar sus datos del UsuarioApi (nombre, foto, etc)
- Cada uno tiene botón de "Cancelar amistad": 1. confirm("¿Estás segur@?") 2. Si retorna true, DELETE Solicitud)
- Aparecen en pantalla en orden alfabético
- Al darles clic, llevan a http://localhost:3000/perfil?id={} (reemplazar {} por el id del otro usuario)

Por si acaso lo necesitas, las variables del objeto Solicitud:
const defaultSolicitud = {
  _id: '', //el id de la solicitud
  idEmisor: '', //el id del usuario que creó la solicitud
  idReceptor: '', //el id del usuario al que se le envió la solicitud
  tipo: 0 //si es 0, es una solicitud normal; 1, solicitud oculta; 2, ya son amigos
}
*/

const Amistades1 = () => {
  Zoom()
  const router = useRouter();

  const [usuario, setUsuario] = useState()
  const [usuarios, setUsuarios] = useState([])
  const [solicitudes, setSolicitudes] = useState([])

  const verPerfil = (id) => {
    const path = `/perfil?id=${encodeURIComponent(id)}`;
    router.push(path);
  };

  const [searchText, setSearchText] = useState("");

  const handleSolicitudes = async() => {
    SolicitudApi.SolicitudesCurrent().then((soli)=>{
      setSolicitudes(soli.data.solicitudes)
    })
  }

  const getFrUser = (s) => {
    const aux = usuarios?.find(u => u._id === (usuario?._id===s.emisor?s.receptor:s.emisor))
    if(aux===undefined){
      return null;
    }else{
      return aux;
    }
  }

  const handleUsers = async() => {
    UsuarioApi.findAllUsers().then((users) => {
      const aux = users.data;
      setUsuarios(aux)
    })
    /*setUsuarios([
      {...defaultUsuario,_id:'0',nombre:'Yo',apodo:'YoApodo',mostrar_nombre:true},
      {...defaultUsuario,_id:'654e9212c34301c2ce78eaef',nombre:'Adrián',apodo:'AdriánApodo',mostrar_nombre:true},
      {...defaultUsuario,_id:'2',nombre:'RodrigoNombre',apodo:'Rodrigo',mostrar_nombre:false},
      {...defaultUsuario,_id:'3',nombre:'Camayo',apodo:'CamayoApodo',mostrar_nombre:true},
      {...defaultUsuario,_id:'4',nombre:'George',apodo:'GeorgeApodo',mostrar_nombre:true}
    ])*/
  }

  const handleUser = async() => {
    UsuarioApi.findCurrent().then((user)=>{
      const aux = user.data.usuario;
      setUsuario(aux)
    });
    //setUsuario({...defaultUsuario,_id:'0',nombre:'Yo',apodo:'YoApodo',mostrar_nombre:true})
  }
  
  useEffect(() => {
    handleUsers()
    handleUser()
    handleSolicitudes()
  }, []);

  return (
    <div id="container">
      <div className={styles.amistades1}>
        <img className={styles.amistades1Child} alt="" src="/rectangle-16.svg" />
        <div className={styles.amistades1Item}>
          {solicitudes?.filter(s => s.tipo===2 && (getFrUser(s)?.mostrar_nombre===true?getFrUser(s)?.nombre:getFrUser(s)?.apodo)?.toLowerCase().includes(searchText.toLowerCase())).map((s) => {
            return(
            <div key={s.id} className="card-cell">
              <Card
                name={getFrUser(s).mostrar_nombre===true?getFrUser(s).nombre:getFrUser(s).apodo}
                text={Global.CompararFechas(s.ano, s.mes, s.dia, s.diaSem, s.hora, s.minuto)}
                onClick={e => verPerfil(getFrUser(s)._id)}
                img={getFrUser(s).foto}
              />
            </div>
            )
          })}
        </div>
        <div className={styles.amistades}>Amistades</div>
        <div className={styles.amigos}>Amigos</div>
        <div>
          <input
            className={styles.inputContainer}
            type="text"
            placeholder="Escribe aquí..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <Lateral pantalla="Amistades" />
    </div>
  );
};

export default Amistades1;