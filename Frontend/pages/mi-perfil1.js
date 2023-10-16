import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styles from "./mi-perfil1.module.css";
import { Zoom } from "../extra/zoom.js"
import Lateral from "../components/lateral.js"

const MiPerfil1 = () => {
  Zoom()
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
    facultad: -1,
    carrera: 'Ingeniería de Sistemas',
    especialidad: 'Desarrollo de Videojuegos',
    descripcion: 'Holaaaaaa',
    mostrarNombre: true
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  
  const actualizarFacultad = (value) => {
    if(value>=0){
      setUsuario({...usuario,facultad: value})
    }
  }
  
  const onRectangleClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil21");
  }, [router]);

  const mostrarImagen = () => {
      const fileInput = document.getElementById("fileInput");
      const imagenSeleccionada = document.getElementById("imagenSeleccionada");
      const file = fileInput.files[0];

      if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {  
              setUsuario({...usuario,foto: e.target.result})
              imagenSeleccionada.style.display = "block";
          };

          reader.readAsDataURL(file);
      }
  }
  
  return (
    <div id='container'>
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
        <div className={styles.facultad}>Facultad:</div>
        <div className={styles.facultadEjemplo}>
          <select className={styles.datoGenero} id="facultad" value={usuario.facultad} onChange={e => actualizarFacultad(e.target.value)}>
            <option value={-1}>Selecciona una opción</option>
            <option value={0}>Estudios Generales</option>
            <option value={1}>Facultad de Arquitectura</option>
            <option value={2}>Facultad de Ciencias Empresariales y Económicas</option>
            <option value={3}>Facultad de Comunicación</option>
            <option value={4}>Facultad de Derecho</option>
            <option value={5}>Facultad de Ingeniería</option>
            <option value={6}>Facultad de Psicología</option>
          </select>
        </div>
        <div className={styles.carrera}>Carrera:</div>
        <div className={styles.miperfil1Child9}>
          <input className={styles.dato} type="text" id="carrera" value={usuario.carrera} onChange={e => setUsuario({...usuario,carrera: e.target.value})}></input>
        </div>
        <div className={styles.especialidad}>Especialidad</div>
        <div className={styles.especialidadEjemploParent}>
          <input className={styles.datoEspecialidad} type="text" id="especialidad" value={usuario.especialidad} onChange={e => setUsuario({...usuario,especialidad: e.target.value})}></input>
        </div>
        <div className={styles.descripccin}>Descripcción</div>
        <div className={styles.miperfil1Child10}>
          <textarea className={styles.datoDescripcion} id="descripcion" value={usuario.descripcion} onChange={e => setUsuario({...usuario,descripcion: e.target.value})}></textarea>
        </div>
        <div className={styles.miperfil1Child11}>
          <div className={styles.nombreapodo}>
            <p>Mostrar mi</p>
            {
              usuario.mostrarNombre?
                <p>Nombre: {usuario.nombres}</p>
              :
                <p>Apodo: {usuario.apodo}</p>
            }
          </div>
          <button onClick={e => setUsuario({...usuario,mostrarNombre: !usuario.mostrarNombre})} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
        </div>
        <div className={styles.ellipseDiv}>
          <img id="imagenSeleccionada" src={usuario.foto} alt="Imagen seleccionada" style={{display: "none", maxWidth: "90%", maxHeight: "90%", borderRadius: "20%"}} />
          <input type="file" accept="image/*" id="fileInput" style={{display: 'none'}} onChange={mostrarImagen}></input>
        </div>
        {
          usuario.foto==''?
            <>
              <img className={styles.vectorIcon} alt="" src="/vector25.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector26.svg" />
            </>
          :
            null
        }
        <div className={styles.miperfil1Child13}>
          <button onClick={e => document.getElementById("fileInput").click()} style={{width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
        </div>
        <img className={styles.vectorIcon2} alt="" src="/vector27.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector28.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector29.svg" />
        <Lateral></Lateral>
      </div>
    </div>
  );
};

export default MiPerfil1;