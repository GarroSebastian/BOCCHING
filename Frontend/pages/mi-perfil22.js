import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil22.module.css";
import { useState, useEffect } from 'react';
import { Zoom } from "../extra/zoom.js"
import GustoApi from "../api/gusto";

const MiPerfil22 = () => {
  Zoom();
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

  const onRectangle12Click = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await GustoApi.guardarGusto(gustos2, token);
      console.log(token);
  
      if (response && response.status === 201) {
        // La data fue guardada en la DB
        console.log('Gustos guardados correctamente');
      } else {
        console.log(gustos2);
        console.log(response, response.status);
        console.error('Error al guardar gustos');
      }
    } catch (error) {
      console.error('Ocurrió un error', error);
    }
  };

    //router.push("/mi-perfil21");


  const onGroupClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorClick = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onGroupIconClick = useCallback(() => {
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

  const tipo = ['musica','dibujo','futbol']
  const subtipo = ['realizar actividades','ver contenido relacionado','hablar del tema']

  const defaultGustos2 = {
    nombre: '',
    afinidad: '',
    duracion: '',
    subTipo: ''
  }
  const [gustos2, setgustos2] = useState(defaultGustos2);

  return (
    <div id="container">
    <div className={styles.miperfil22}>
      <img className={styles.miperfil22Child} alt="" src="/rectangle-161.svg" />
      <img
        className={styles.miperfil22Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.miperfil22Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <div className={styles.colecciones}>Colecciones</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.recDerIcon} alt="" src="/rec-der1.svg" />
      <img className={styles.derechaIcon} alt="" src="/derecha3.svg" />
      <img className={styles.recDerIcon1} alt="" src="/rec-der1.svg" />
      <div className={styles.miperfil22Child1} />
      <img className={styles.layer1Icon} alt="" src="/layer-12.svg" />
      <div className={styles.miperfil22Child2} />
      <div className={styles.miperfil22Child3} />
      <div className={styles.miperfil22Child4} />
      <div className={styles.miperfil22Child5} />
      <div className={styles.tipoParent}>
        <div className={styles.tipo}>Tipo</div>
        <div className={styles.tipo}>Subtipo</div>
        <div className={styles.tipo}>Nombre</div>
        <div className={styles.tipo}>Afinidad</div>
        <div className={styles.tipo}>Duración</div>
      </div>
      <div className={styles.hobby}>
        hobby  
      </div>
      <div className={styles.hobby1}>Hobby</div>
      <div className={styles.hobby2}>Hobby</div>
      <div className={styles.hobby3}>Hobby</div>
      <div className={styles.xd}>xd</div>
      <div className={styles.xd1}>xd</div>
      <div className={styles.xd2}>xd</div>
      <div className={styles.xd3}>xd</div>
      <div className={styles.xd4}>xd</div>
      <div className={styles.xd5}>xd</div>
      <div className={styles.xd6}>xd</div>
      <div className={styles.xd7}>xd</div>
      <div className={styles.xd8}>xd</div>
      <div className={styles.xd9}>xd</div>
      <div className={styles.xd10}>xd</div>
      <div className={styles.xd11}>xd</div>
      <div className={styles.xd12}>xd</div>
      <div className={styles.xd13}>xd</div>
      <div className={styles.xd14}>xd</div>
      <div className={styles.xd15}>xd</div>
      
      <div className={styles.hobby4}>
        <select onChange={e => setgustos2({ ...gustos2, tipo: e.target.value })} >
                <option value={-1}>Selecciona</option>
                {
                  tipo?.map((item, index)=>{
                    return(
                      <>
                      <option value={index}>{item}</option>
                      </>
                    )
                  }
                  )
                }
              </select>
      </div>
      <img className={styles.derechaIcon1} alt="" src="/derecha2.svg" />
      <div className={styles.miperfil22Child6} />
      <div className={styles.xdParent}>
        <div className={styles.tipo}>
          <select onChange={e => setgustos2({ ...gustos2, subTipo: e.target.value })} 
          style={{width: "130%"}}>
                <option value={-1}>Selecciona</option>
                {
                  subtipo?.map((item, index)=>{
                    return(
                      <>
                      <option value={index}>{item}</option>
                      </>
                    )
                  }
                  )
                }
              </select>
        </div>
        
      </div>
      <div className={styles.xdGroup}>
        <div className={styles.tipo}>
          <input type="text"
                onChange={e => setgustos2({...gustos2,nombre: e.target.value})} 
                style={{width: "100px"}}>
                </input>
        </div>
      </div>
      <div className={styles.xdContainer}>
        <div className={styles.tipo}>
          <input type="text"
                onChange={e => setgustos2({...gustos2,afinidad: e.target.value})} 
                style={{width: "100px"}}>
          </input>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.tipo}>
        <input type="text"
                onChange={e => setgustos2({...gustos2,duracion: e.target.value})} 
                style={{ width: "100px"}}>
                </input>
        </div>
      </div>
      
      <img className={styles.derechaIcon1} alt="" src="/derecha2.svg" />
      <div className={styles.miPerfil}>Mi Perfil</div>
      <div className={styles.informacin} onClick={onInformacinTextClick}>
        Información
      </div>
      <div className={styles.privacidad} onClick={onPrivacidadTextClick}>
        Privacidad
      </div>
      <div className={styles.aadirColeccin}>Añadir colección</div>
      <div className={styles.aquPodrsAgregar}>
        Aquí podrás agregar un nuevo gusto personal
      </div>
      <div className={styles.miperfil22Child7} />
      <div className={styles.miperfil22Child8} />
      <div className={styles.miperfil22Child9} onClick={onRectangle12Click} />
      <div className={styles.editar}>Editar</div>
      <div className={styles.confirmar}>Confirmar</div>
      <div className={styles.miperfil22Child10} />
      <div className={styles.miperfil22Child11} />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-194.svg"
        onClick={onGroupClick}
      />
      <img className={styles.miperfil22Child12} alt="" src="/group-195.svg" />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector22.svg"
        onClick={onVectorClick}
      />
      <img
        className={styles.miperfil22Child13}
        alt=""
        src="/group-197.svg"
        onClick={onGroupIconClick}
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
    </div>
  );
};

export default MiPerfil22;
