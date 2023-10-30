import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil23.module.css";
import { useState, useEffect } from 'react';
import GustoApi from "../api/gusto";


const MiPerfil23 = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil1");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onInformacinTextClick = useCallback(() => {
    router.push("/mi-perfil1");
  }, [router]);

  const onPrivacidadTextClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle12Click = useCallback(() => {
    router.push("/mi-perfil21");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorClick = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onGroupIcon4Click = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/buscar1");
  }, [router]);

  const onVectorIcon1Click = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onXMLID273IconClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);
  //variables importantes 1
  const defaultgusto = {
    gustos: ''
  }
  const [gusto, setgusto] = useState(defaultgusto);
  
  //Llamado al Get
  const handleGetGustos = () => {
    GustoApi.getGusto(window.localStorage.token).then((gusto)=>{
      console.log(gusto)
      const aux = gusto.data;
      setgusto(aux)
    })
  }
  //Use effect
  useEffect(() => {
    handleGetGustos();
  }, [])

  
  /*
  EDITAR DATOS
  const acutalizar = () =>{
    GustoApi.actualizarGusto('',window.localStorage.token)
  }
  
  

  const tipo = ['musica','dibujo','futbol']
  const subtipo = ['realizar actividades','ver contenido relacionado','hablar del tema']

  const defaultGustos2 = {
    id: '1',
    nombre: 'pintar',
    afinidad: 'me gusta mucho',
    duracion: '1 hora',
    verTipo: 'dibujo',
    subTipo: 'realizar actividades'
  }
  */
  const arrayTipo = ['musica','dibujo','futbol'];
  const arraySubTipo = ['realizar actividades','ver contenido relacionado','hablar del tema'];
  const [id, setid] = useState('1');
  const [nombre, setnombre] = useState('pintar');
  const [afinidad, setafinidad] = useState('me gusta mucho');
  const [duracion, setduracion] = useState('1 hora');
  const [verTipo, setverTipo] = useState('musica');
  const [subTipo, setsubTipo] = useState('realizar actividades');

  const defaultGustos2 = {
    id: id,
    nombre: nombre,
    afinidad: afinidad,
    duracion: duracion,
    verTipo: verTipo,
    subTipo: subTipo
  }

  const [gustos2, setgustos2] = useState(defaultGustos2);
  //Posiblemente la rpta seria crear otras variables
  const [id2, setid2] = useState(id);
  const [nombre2, setnombre2] = useState(nombre);
  const [afinidad2, setafinidad2] = useState(afinidad);
  const [duracion2, setduracion2] = useState(duracion);
  const [verTipo2, setverTipo2] = useState(verTipo);
  const [subTipo2, setsubTipo2] = useState(subTipo);
  console.log("Datos acutalizados 1, ",gustos2)
  const actualizarGusto =()=>{
    const defaultGustos3 = {
      id: id2,
      nombre: nombre2,
      afinidad: afinidad2,
      duracion: duracion2,
      verTipo: verTipo2,
      subTipo: subTipo2
    }
    setgustos2(defaultGustos3)
  }
  console.log("Datos acutalizados 2, ",gustos2)

  

  return (
    <div className={styles.miperfil23}>
      <img className={styles.miperfil23Child} alt="" src="/rectangle-161.svg" />
      <img
        className={styles.miperfil23Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.miperfil23Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <div className={styles.colecciones}>Colecciones</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.xdParent}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdGroup}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdContainer}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.xd}>
          <select  value={subTipo2} 
          onChange={(e) => {
            setsubTipo2(e.target.value)
          }} 
          style={{width: "200%"}}>
                
                {
                  arraySubTipo.map((item, index)=>{
                    return(
                      <>
                      {
                        //el value={item} es el verdadero valor que guardas
                        //osea la id
                      }
                      <option value={item}>{item}</option>
                      </>
                    ) 
                  }
                  )
                }
              </select>
        </div>
      </div>
      <div className={styles.xdParent1}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent2}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent3}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent4}>
        <div className={styles.xd}>
        <input type="text"
                value={nombre2} onChange={e => setnombre2(e.target.value)} 
                style={{width: "100px"}}>
                </input>
        </div>
        
      </div>
      <div className={styles.xdParent5}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent6}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent7}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent8}>
        <div className={styles.xd}>
        <input type="text" value={afinidad2}
                onChange={e => setafinidad2(e.target.value)} 
                style={{width: "100px"}}>
          </input>
        </div>
      </div>
      <div className={styles.xdParent9}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent10}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent11}>
        <div className={styles.xd}>xd</div>
        <img className={styles.frameChild} alt="" src="/polygon-35.svg" />
      </div>
      <div className={styles.xdParent12}>
        <div className={styles.xd}>
        <input type="text" value={duracion2}
                onChange={e => setduracion2(e.target.value)} 
                style={{ width: "100px"}}>
                </input>
        </div>
      </div>
      <img className={styles.derechaIcon} alt="" src="/derecha2.svg" />
      <div className={styles.miPerfil}>Mi Perfil</div>
      <div className={styles.informacin} onClick={onInformacinTextClick}>
        Información
      </div>
      <div className={styles.privacidad} onClick={onPrivacidadTextClick}>
        Privacidad
      </div>
      <div className={styles.eliminarOEditar}>
        Eliminar o editar una colección
      </div>
      <div className={styles.seleccionaUnoDe}>
        Selecciona uno de tus gustos para editarlo o eliminarlo
      </div>
      <div className={styles.miperfil23Child1} />
      <div className={styles.miperfil23Child2} />
      <img className={styles.recDerIcon} alt="" src="/rec-der1.svg" />
      <img className={styles.derechaIcon1} alt="" src="/derecha3.svg" />
      <img className={styles.recDerIcon1} alt="" src="/rec-der1.svg" />
      <div className={styles.miperfil23Child3} />
      <img className={styles.layer1Icon} alt="" src="/layer-12.svg" />
      <div className={styles.miperfil23Child4} />
      <div className={styles.miperfil23Child5} />
      <div className={styles.miperfil23Child6} />
      <div className={styles.miperfil23Child7} />
      <div className={styles.tipoParent}>
        <div className={styles.xd}>Tipo</div>
        <div className={styles.xd}>Subtipo</div>
        <div className={styles.xd}>Nombre</div>
        <div className={styles.xd}>Afinidad</div>
        <div className={styles.xd}>Duración</div>
      </div>
      <div className={styles.hobby}>
      <select  value={verTipo2} onChange={e => setverTipo2(e.target.value)} >
                
                {
                  arrayTipo.map((item, index)=>{
                    return(
                      <>
                      {
                        //el value={item} es el verdadero valor que guardas
                        //osea la id
                      }
                      <option value={item}>{item}</option>
                      </>
                    ) 
                  }
                  )
                }
              </select>
      </div>
      <div className={styles.hobby1}>Hobby</div>
      <div className={styles.hobby2}>Hobby</div>
      <div className={styles.hobby3}>Hobby</div>
      <img className={styles.derechaIcon2} alt="" src="/derecha2.svg" />
      <div className={styles.miperfil23Child8} />
      <div className={styles.miperfil23Child9} onClick={onRectangle12Click} />
      <div className={styles.editar}>Editar</div>
      <div className={styles.confirmar}>
        <button type="submit" onClick={actualizarGusto}>
          Guardar
        </button>
        Confirmarz
      </div>
      <img className={styles.groupIcon} alt="" src="/group-70.svg" />
      <img className={styles.miperfil23Child10} alt="" src="/group-70.svg" />
      <img className={styles.miperfil23Child11} alt="" src="/group-70.svg" />
      <img className={styles.miperfil23Child12} alt="" src="/group-70.svg" />
      <div className={styles.miperfil23Child13} />
      <img
        className={styles.miperfil23Child14}
        alt=""
        src="/group-194.svg"
        onClick={onGroupClick}
      />
      <img className={styles.miperfil23Child15} alt="" src="/group-195.svg" />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector22.svg"
        onClick={onVectorClick}
      />
      <img
        className={styles.miperfil23Child16}
        alt=""
        src="/group-197.svg"
        onClick={onGroupIcon4Click}
      />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector23.svg"
        onClick={onVectorIconClick}
      />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector24.svg"
        onClick={onVectorIcon1Click}
      />
      <img
        className={styles.xmlid273Icon}
        alt=""
        src="/xmlid-2731.svg"
        onClick={onXMLID273IconClick}
      />
      
    </div>
  );
};

export default MiPerfil23;
