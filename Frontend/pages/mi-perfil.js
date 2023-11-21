import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { Zoom } from "../extra/zoom.js";
import Global from "../extra/global.js";
import styles from "./mi-perfil.module.css";
import Lateral from "../components/lateral.js"
import UsuarioApi from "../api/usuario";
import GustoApi from "../api/gusto.js";//Lo dejo aca por si lo quieren

const MiPerfil = () => {
  const [pag, setPag] = useState(1);
  
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
    confirmationCode:'12345678',
    mostrar_nombre: true
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  const [edad, setEdad] = useState(0);

  const defaultGusto = {
    idUsuario: '',
    idTipo: 0,
    subtipo: '',
    nombre: '',
    idAfinidad: 0,
    idDuracion: 0,
    idCompania: 0,
    priNombre: 0,
    idPrivacidad: 0
  }
  const [gustos, setGustos] = useState([])
  const [nuevoGusto, setNuevoGusto] = useState(defaultGusto)

  const arrayTipo = ['Sin especificar','Franquicia','Juego de mesa','Hobby','Pasatiempo + Juego',
  'Alimento','Música','Creador(a) de contenido','Deporte','Otro'];
  const [ID_Tipo, setID_Tipo] = useState(0);
  const arrayFranquicia = ['Sin especificar','Videojuego','Serie','Libro','Otro']
  const arrayPasatiempo = ['Sin especificar','Aire libre','Espacio cerrado','Mixto']
  const arrayAlimento = ['Sin especificar','Comida','Bebida']
  const arrayMusica = ['Sin especificar','Solista','Grupo','Mixto']
  const arrayCreador = ['Sin especificar','Gameplays','Tops','Crítico','Cómico','Informativo','Historia','Día a día','Otro']
  const arraySubTipo = [[''],arrayFranquicia,[''],[''],arrayPasatiempo,arrayAlimento,arrayMusica,arrayCreador,[''],['']];
  
  const primero=663, salto=50;

  const onRectangle11Click = useCallback(() => {
    router.push("/mi-perfil23");
  }, [router]);

  const onRectangle12Click = useCallback(() => {
    router.push("/mi-perfil22");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onPrivacidadTextClick = useCallback(() => {
    router.push("/mi-perfil241");
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

  const cambiarUsuario = (tipo, dato) => { //nombre y apellidos
    if (Global.ValidarTexto(dato)) {
      setUsuario({...usuario,[tipo]: dato})
    }
  }

  const ValidarCuenta = () => {
    //Datos obligatorios
    if(usuario.nombre==''){
      alert('No puedes dejar tu nombre vacío')
      return false;
    }
    let r=[];
    //Espacios
    if(usuario.nombre[0]===' '||usuario.nombre[usuario.nombre.length-1]===' '){
      r.push('tu nombre')
    }
    if(usuario.apellidos[0]===' '||usuario.apellidos[usuario.apellidos.length-1]===' '){
      r.push('tu apellido')
    }
    if(usuario.apodo[0]===' '||usuario.apodo[usuario.apodo.length-1]===' '){
      r.push('tu apodo')
    }
    if(r.length!=0){
      let t=`No puedes iniciar ni acabar ${r[0]}, `
      for(let i=1;i<r.length;i++){
        if(i==r.length-1){
          t+="ni ";
        }
        t+=r[i]+", ";
      }
      t = t.substring(0, t.length-2)
      alert(t+" con espacios")
      return false;
    }
    return true;
  }
  
  const Guardar = async() => {
    if(ValidarCuenta()){
      UsuarioApi.updateCurrent(usuario).then((user)=>{
        handleOnLoad()
        alert("¡Cambios guardados!")
      })
    }
    /*UsuarioApi.updateCurrent({...usuario, foto: pako.Deflate(usuario.foto, {to: 'string'})}).then((user)=>{
      handleOnLoad()
      alert("¡Cambios guardados!")
    })*/
  }
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE2ZmE4YTIwZmMxZWY3MmRjY2Y3OSIsImlhdCI6MTcwMDQwMzIxNSwiZXhwIjoxNzAwNDg5NjE1fQ.GOBiEEXwQPiaIwm3vzMkh7Ig_-V-PTmT3z6JBZ1anTU
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTE2ZmE4YTIwZmMxZWY3MmRjY2Y3OSIsImlhdCI6MTcwMDQwMzIxNSwiZXhwIjoxNzAwNDg5NjE1fQ.GOBiEEXwQPiaIwm3vzMkh7Ig_-V-PTmT3z6JBZ1anTU
usuario._id
"65516fa8a20fc1ef72dccf79"
*/

  const handleGustos = async() =>{
    var token = localStorage.getItem("token");

    GustoApi.getGustos(token).then((user)=>{
      
      const aux = user.data.gustos;
      setGustos(aux)
      
    });
  }
  
  const handleOnLoad = async() => {
    //var token = localStorage.getItem("token");
    /*UsuarioApi.findUser(token).then((user)=>{

      console.log(user.data);
    });*/

    UsuarioApi.findCurrent().then((user)=>{
      const aux = user.data.usuario;
      setUsuario(aux)
      /*if(aux.foto!=''){
        setUsuario({...aux, foto: pako.Deflate(aux.foto, {to: 'string'})})
      }else{
        setUsuario(aux)
      }*/
      const f = new Date(aux.nacimiento)
      const today = new Date()
      const dif = today.setDate(today.getDate()+1) - f;
      setEdad(Math.floor(dif/(1000*60*60*24*365.25)))
    });

    setGustos([
      {...defaultGusto,idTipo: 0, subtipo: '', nombre: 'Jugar tenis', idAfinidad: 0, idDuracion: 0, idCompania: 0},
      {...defaultGusto,idTipo: 1, subtipo: '', nombre: 'Jugar videojuegos', idAfinidad: 1, idDuracion: 1, idCompania: 1}
    ])

  }


  useEffect(() => {
    handleOnLoad();
    handleGustos();
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
            onClick={onRectangle2Click}
          />
          <img
            className={styles.miperfil1Item}
            alt=""
            src="/rectangle-29.svg"
            onClick={e => setPag(2)}
          />
          <div className={styles.colecciones}>Gustos</div>
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
          <div className={styles.bchadri888}>{usuario._id}</div>
          <div className={styles.idbocching}>IdBocching:</div>
          <div className={styles.edadejemploEnAos}>{edad}</div>
          <div className={styles.edad}>Edad:</div>
          <div className={styles.estaInformacinNo}>
            **Esta información no se puede modificar
          </div>
          <div className={styles.nombres}>Nombres:</div>
          <div className={styles.miperfil1Child4}>
            <input className={styles.dato} type="text" id="nombre" maxLength={30} value={usuario.nombre} onChange={e => cambiarUsuario("nombre", e.target.value)}></input>
          </div>
          <div className={styles.apellidos}>Apellidos:</div>
          <div className={styles.miperfil1Child5}>
            <input className={styles.dato} type="text" id="apellidos" maxLength={30} value={usuario.apellidos} onChange={e => cambiarUsuario("apellidos", e.target.value)}></input>
          </div>
          <div className={styles.apodo}>Apodo:</div>
          <div className={styles.miperfil1Child6}>
            <input className={styles.dato} type="text" id="apodo" maxLength={20} value={usuario.apodo} onChange={e => setUsuario({...usuario,apodo: e.target.value})}></input>
          </div>
          <div className={styles.gnero}>Género:</div>
          <div className={styles.gneroEjemploParent}>
            <select className={styles.datoGenero} id="genero" value={usuario.id_genero} onChange={e => setUsuario({...usuario,id_genero: e.target.value})} style={{width: "100%"}}>
                <option value={0}>Masculino</option>
                <option value={1}>Femenino</option>
                <option value={2}>Otro</option>
                <option value={3}>Prefiero no decirlo</option>
              </select>
          </div>
          <div className={styles.facultad}>Facultad:</div>
          <div className={styles.facultadEjemplo}>
            <select className={styles.datoGenero} id="facultad" value={usuario.facultad} onChange={e => actualizarFacultad(e.target.value)} style={{width: "101%"}}>
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
                usuario.mostrar_nombre?
                  usuario.nombre.length<=15?
                    <p>Nombre: {usuario.nombre}</p>
                  :
                    <p>Nombre: {usuario.nombre.substring(0,13)}...</p>
                :
                  usuario.apodo.length<=15?
                    <p>Apodo: {usuario.apodo}</p>
                  :
                    <p>Apodo: {usuario.apodo.substring(0,13)}...</p>
              }
            </div>
            <button onClick={e => setUsuario({...usuario,mostrar_nombre: !usuario.mostrar_nombre})} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
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
          <div className={styles.miperfil1Child11} style={{top: "1395px", left: "910px"}}>
            <div className={styles.nombreapodo}>
              <p style={{marginTop: "13px"}}>Guardar</p>
            </div>
            <button onClick={Guardar} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
          </div>
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
                onClick={e => setPag(1)}
              />
              <img
                className={styles.miperfil21Inner}
                alt=""
                src="/rectangle-29.svg"
                onClick={onRectangle2Click}
              />
              <div className={styles.colecciones2}>Gustos</div>
              <div className={styles.rectangleDiv2} />
              <div className={styles.miperfil21Child1} />
              <img className={styles.recDerIcon} alt="" src="/rec-der1.svg" />
              <img className={styles.derechaIcon} alt="" src="/derecha3.svg" />
              <img className={styles.recDerIcon1} alt="" src="/rec-der1.svg" />
              <div className={styles.miperfil21Child2} />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.tipo}>Tipo</div>
              <div className={styles.subtipo}>Subtipo</div>
              <div className={styles.nombre}>Nombre</div>
              <div className={styles.afinidad}>Afinidad</div>
              <div className={styles.duracin}>Duración</div>
              {
                gustos?.map((item, index) => {
                  return(
                    <>
                      <div className={styles.hobby} style={{top: `${primero+salto*index}px`}}>
                        {
                          arrayTipo[item.tipo]
                        }
                      </div>
                      <div className={styles.xd} style={{top: `${primero+salto*index}px`}}>
                        {
                          arraySubTipo[item.tipo][0]
                        }
                      </div>
                      <div className={styles.xd4} style={{top: `${primero+salto*index}px`}}>{item.nombre}</div>
                      <div className={styles.xd8} style={{top: `${primero+salto*index}px`}}>{item.afinidad}</div>
                      <div className={styles.xd12} style={{top: `${primero+salto*index}px`}}>{item.duracion}</div>
                      <div className={styles.miperfil21Child3} style={{top: `${695+salto*index}px`}} />
                    </>
                  )
                })
              }
              <img className={styles.derechaIcon1} alt="" src="/derecha2.svg" />
              <div className={styles.miPerfil}>Mi Perfil</div>
              <div className={styles.informacin2} onClick={e => setPag(1)}>
                Información
              </div>
              <div className={styles.privacidad} onClick={onPrivacidadTextClick}>
                Privacidad
              </div>
              <div className={styles.misColecciones}>Mis Gustos</div>
              <div className={styles.aquPodrsAgregar}>
                Aquí podrás agregar tus gustos personales, editarlos o eliminarlos
              </div>
              <div className={styles.miperfil21Child7} />
              <div className={styles.miperfil21Child8} onClick={onRectangle11Click} />
              <div className={styles.miperfil21Child9} onClick={onRectangle12Click} />
              <div className={styles.editar}>Editar</div>
              <div className={styles.aadir}>Añadir</div>
              
              <div className={styles.hobby} style={{marginLeft: '-3px', top: `${primero+salto*gustos.length}px`}}>
                <select value={nuevoGusto.idTipo} onChange={e => {
                  const selectedIndex = e.target.selectedIndex; // Obtiene el índice del elemento seleccionado
                  setNuevoGusto({ ...nuevoGusto,idTipo: e.target.value});
                  setID_Tipo(selectedIndex)
                }} >
                  {
                    arrayTipo.map((item, index) => {return (<option key={index}>{item}</option>)})
                  }
                </select>
              </div>

              <div className={styles.frameDiv}>
                <div className={styles.xd}>
                  <select  value={nuevoGusto.subtipo} onChange={e => setgustos2({...gustos2, subTipo:e.target.value})} style={{width: "200%"}}>
                    {
                      arraySubTipo[ID_Tipo].map((item, index)=>{return(<option key={index} value={item}>{item}</option>)})
                    }
                  </select>
                </div>
              </div>

              <div className={styles.xdParent4}>
                <div className={styles.xd}>
                  <input type="text" value={nuevoGusto.nombre} onChange={e => setgustos2({...gustos2, nombre:e.target.value})} style={{width: "100px"}} />
                </div>
              </div>

              <div className={styles.xdParent8}>
                <div className={styles.xd}>
                  <input type="text" value={nuevoGusto.idAfinidad} onChange={e => setgustos2({...gustos2, afinidad: e.target.value})} style={{width: "100px"}} />
                </div>
              </div>

              <div className={styles.xdParent12}>
                <div className={styles.xd}>
                  <input type="text" value={nuevoGusto.idDuracion} onChange={e => setgustos2({...gustos2, duracion: e.target.value})} style={{ width: "100px"}} />
                </div>
              </div>

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