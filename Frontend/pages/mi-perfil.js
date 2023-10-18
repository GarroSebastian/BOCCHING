import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styles from "./mi-perfil.module.css";
import { Zoom } from "../extra/zoom.js"
import Lateral from "../components/lateral.js"
import UsuarioApi from "../api/usuario";

const MiPerfil = () => {
  const [pag, setPag] = useState(1);
  
  Zoom()
  const router = useRouter();

  const defaultUsuario = {
    nombres: '',
    apellidos: '',
    correo: '',
    genero: 0,
    nacimiento: '',
    edad: 0,
    apodo: '',
    contrasena: '',
    foto: '',
    facultad: -1,
    carrera: '',
    especialidad: '',
    descripcion: '',
    mostrarNombre: true
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  
  const onRectangle11Click = useCallback(() => {
    router.push("/mi-perfil23");
  }, [router]);

  const onRectangle12Click = useCallback(() => {
    router.push("/mi-perfil22");
  }, [router]);
  
  const actualizarFacultad = (value) => {
    if(value>=0){
      setUsuario({...usuario,facultad: value})
    }
  }

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

  const handleOnLoad = async() => {
    //console.log(UsuarioApi.findCurrent())
    /*const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmYyN2I4YTAyNzNmZjQ3ODY3ZGJiMCIsImlhdCI6MTY5NzU4OTE3OCwiZXhwIjoxNjk3Njc1NTc4fQ.jAGQLCbiMXaspWoRBi2sEm4naSq8aN31xadV_OFAhjE`,
        'Content-Type': 'application/json',
      },
    };
    fetch('http://localhost:3700/usuario', requestOptions).then(res => {
      if(!response.ok){
        throw new Error('Error en la solicitud');
      }
      return response.json();
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });*/
    //setUsuario()
  }

  useEffect(() => {
    //handleOnLoad();
  }, [])
  
  return (
    <div id='container'>
      {
        pag==1?
          <div className={styles.miperfil1}>
          <img
            className={styles.miperfil1Child}
            alt=""
            src="/rectangle-29.svg"
            onClick={e => setPag(3)}
          />
          <img
            className={styles.miperfil1Item}
            alt=""
            src="/rectangle-29.svg"
            onClick={e => setPag(2)}
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
        </div>
      :
        <>
        {
          pag==2?
            <div className={styles.miperfil21}>
              <img className={styles.miperfil21Child} alt="" src="/rectangle-161.svg" />
              <img
                className={styles.miperfil21Item}
                alt=""
                src="/rectangle-29.svg"
                onClick={onRectangle1Click}
              />
              <img
                className={styles.miperfil21Inner}
                alt=""
                src="/rectangle-29.svg"
                onClick={onRectangle2Click}
              />
              <div className={styles.colecciones}>Colecciones</div>
              <div className={styles.rectangleDiv} />
              <div className={styles.miperfil21Child1} />
              <img className={styles.recDerIcon} alt="" src="/rec-der1.svg" />
              <img className={styles.derechaIcon} alt="" src="/derecha3.svg" />
              <img className={styles.recDerIcon1} alt="" src="/rec-der1.svg" />
              <div className={styles.miperfil21Child2} />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.miperfil21Child3} />
              <div className={styles.miperfil21Child4} />
              <div className={styles.miperfil21Child5} />
              <div className={styles.miperfil21Child6} />
              <div className={styles.tipo}>Tipo</div>
              <div className={styles.subtipo}>Subtipo</div>
              <div className={styles.nombre}>Nombre</div>
              <div className={styles.afinidad}>Afinidad</div>
              <div className={styles.duracin}>Duración</div>
              <div className={styles.hobby}>Hobby</div>
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
              <img className={styles.derechaIcon1} alt="" src="/derecha2.svg" />
              <div className={styles.miPerfil}>Mi Perfil</div>
              <div className={styles.informacin} onClick={onInformacinTextClick}>
                Información
              </div>
              <div className={styles.privacidad} onClick={onPrivacidadTextClick}>
                Privacidad
              </div>
              <div className={styles.misColecciones}>Mis Colecciones</div>
              <div className={styles.aquPodrsAgregar}>
                Aquí podrás agregar tus gustos personales, editarlos o eliminarlos
              </div>
              <div className={styles.miperfil21Child7} />
              <div className={styles.miperfil21Child8} onClick={onRectangle11Click} />
              <div className={styles.miperfil21Child9} onClick={onRectangle12Click} />
              <div className={styles.editar}>Editar</div>
              <div className={styles.aadir}>Añadir</div>
            </div>
          :
          null
        }
        </>
      }
      <Lateral></Lateral>
    </div>
  );
};

export default MiPerfil;