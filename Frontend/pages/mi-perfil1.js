import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styles from "./mi-perfil1.module.css";
import Zoom from "../extra/zoom.js"

const MiPerfil1 = () => {
  const router = useRouter();

  const defaultUsuario = {
    nombres: 'Adrián',
    apellidos: 'Duarte',
    correo: '20200711@aloe.ulima.edu.pe',
    genero: 0,
    nacimiento: '2002-12-27',
    edad: 20,
    apodo: 'Adri888',
    contrasena: '',
    foto: '',
    facultad: 'Ingeniería y Arquitectura',
    carrera: 'Ingeniería de Sistemas',
    especialidad: 'Desarrollo de Videojuegos',
    descripcion: 'Holaaaaaa'
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  
  const onRectangleClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil21");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVector2Click = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onGroupIconClick = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  const onVectorIcon3Click = useCallback(() => {
    router.push("/buscar1");
  }, [router]);

  const onVectorIcon4Click = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onXMLID273IconClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);
  
  return (
    <div id={styles.container}>
      <div className={styles.miperfil1}>
        <img
          className={styles.miperfil1Child}
          alt=""
          src="/rectangle-29.svg"
          onClick={onRectangleClick}
        />
        <img
          className={styles.miperfil1Item}
          alt=""
          src="/rectangle-29.svg"
          onClick={onRectangle1Click}
        />
        <div className={styles.colecciones}>Colecciones</div>
        <img className={styles.miperfil1Inner} alt="" src="/rectangle-161.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.miperfil1Child1} />
        <div className={styles.miperfil1Child2} />
        <div className={styles.miperfil1Child3} />
        <div className={styles.miPerfil}>Mi Perfil</div>
        <div className={styles.informacin}>Información</div>
        <div className={styles.privacidad}>Privacidad</div>
        <div className={styles.general}>General</div>
        <div className={styles.correoInstitucional}>Correo Institucional:</div>
        <div className={styles.ejemplodecorreocorreoejemplo}>{usuario.correo}</div>
        <div className={styles.cdigoUniversitario}>Código Universitario:</div>
        <div className={styles.codigouniversitarioejemplo}>{usuario.correo.substring(0,8)}</div>
        <div className={styles.bchadri888}>BchAdri888 (falta)</div>
        <div className={styles.idbocching}>IdBocching:</div>
        <div className={styles.edadejemploEnAos}>{usuario.edad}</div>
        <div className={styles.edad}>Edad:</div>
        <div className={styles.estaInformacinNo}>
          **Esta información no se puede modificar
        </div>
        <div className={styles.nombres}>Nombres:</div>
        <div className={styles.miperfil1Child4}>
          <input className={styles.dato} type="text" id="nombres" value={usuario.nombres} onChange={e => setUsuario({...usuario,nombres: e.target.value})}></input>
        </div>
        <div className={styles.apellidos}>Apellidos:</div>
        <div className={styles.miperfil1Child5}>
          <input className={styles.dato} type="text" id="apellidos" value={usuario.apellidos} onChange={e => setUsuario({...usuario,apellidos: e.target.value})}></input>
        </div>
        <div className={styles.apodo}>Apodo:</div>
        <div className={styles.miperfil1Child6}>
          <input className={styles.dato} type="text" id="apodo" value={usuario.apodo} onChange={e => setUsuario({...usuario,apodo: e.target.value})}></input>
        </div>
        <div className={styles.gnero}>Género:</div>
        <div className={styles.gneroEjemploParent}>
          <select className={styles.datoGenero} id="genero" value={usuario.genero} onChange={e => setUsuario({...usuario,genero: e.target.value})}>
              <option value={0}>Masculino</option>
              <option value={1}>Femenino</option>
              <option value={2}>Otro</option>
              <option value={3}>Prefiero no decirlo</option>
            </select>
        </div>
        <div className={styles.carrera}>Carrera:</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-21.svg" />
        <div className={styles.carreraEjemplo}>{usuario.carrera}</div>
        <div className={styles.miperfil1Child7} />
        <div className={styles.facultad}>Facultad:</div>
        <img className={styles.miperfil1Child8} alt="" src="/polygon-3.svg" />
        <div className={styles.facultadEjemplo}>{usuario.facultad}</div>
        <div className={styles.miperfil1Child9} />
        <div className={styles.especialidad}>Especialidad</div>
        <div className={styles.especialidadEjemploParent}>
          <input className={styles.datoEspecialidad} type="text" id="especialidad" value={usuario.especialidad} onChange={e => setUsuario({...usuario,especialidad: e.target.value})}></input>
        </div>
        <div className={styles.descripccin}>Descripcción</div>
        <div className={styles.miperfil1Child10}>
          <textarea class={styles.datoDescripcion} id="descripcion" value={usuario.descripcion} onChange={e => setUsuario({...usuario,descripcion: e.target.value})}></textarea>
        </div>
        <div className={styles.miperfil1Child11} />
        <div className={styles.ellipseDiv} />
        <img className={styles.vectorIcon} alt="" src="/vector25.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector26.svg" />
        <div className={styles.nombreapodo}>Nombre/Apodo</div>
        <img className={styles.miperfil1Child12} alt="" src="/polygon-6.svg" />
        <div className={styles.miperfil1Child13} />
        <img className={styles.vectorIcon2} alt="" src="/vector27.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector28.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector29.svg" />
        <div className={styles.miperfil1Child14} />
        <img
          className={styles.groupIcon}
          alt=""
          src="/group-194.svg"
          onClick={onGroupClick}
        />
        <img className={styles.miperfil1Child15} alt="" src="/group-1951.svg" />
        <img
          className={styles.vectorIcon5}
          alt=""
          src="/vector17.svg"
          onClick={onVector2Click}
        />
        <img
          className={styles.miperfil1Child16}
          alt=""
          src="/group-197.svg"
          onClick={onGroupIconClick}
        />
        <img
          className={styles.vectorIcon6}
          alt=""
          src="/vector30.svg"
          onClick={onVectorIcon3Click}
        />
        <img
          className={styles.vectorIcon7}
          alt=""
          src="/vector31.svg"
          onClick={onVectorIcon4Click}
        />
        <img
          className={styles.xmlid273Icon}
          alt=""
          src="/xmlid-2732.svg"
          onClick={onXMLID273IconClick}
        />
      </div>
    </div>
  );
};

export default MiPerfil1;