import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { Zoom } from "../extra/zoom.js";
import Global from "../extra/global.js";
import styles from "./mi-perfil.module.css";
import Lateral from "../components/lateral.js"
import UsuarioApi from "../api/usuario";
import GustoApi from "../api/gusto.js";

/*Validar Perfil:
- Basarse en las validaciones de crear-cuenta y agregar las necesarias en la función ValidarCuenta()

Editar Gustos:
- Intenta coordinar con Rodrigo para que te haga componentes nuevos que puedas usar más fácilmente
- Ya te dejé las variables que componen el objeto Gusto (también comenté qué hace cada una), y coordinaré con Backend para que las tenga iguales
- Actualmente, la pantalla muestra los gustos leídos del Backend arriba, y abajo hay <select> e <input> para introducir los datos de un nuevo gusto. Cámbialo como necesites
- Si se te ocurre cómo renombrar el tipo "Alimento" para que quede mejor con sus subtipos "Comida" y "Bebida", genial
- Subtipos "Franquicia" y "Creador@ de contenido" deberían ser checkboxs en vez de <select> (permite marcar de 1 a muchos, "Sin especificar" desmarca el resto)
- Afinidad es un <select> con los valores [Sin especificar, Me encanta, Me fascina, Me gusta, Me es indiferente, Me aburre, Me disgusta]
- Duración es un <select> con los valores [Sin especificar, Duración ilimitada, Ya lo consumí, Lo estoy consumiendo, Lo consumiré pronto, Espero consumirlo próximamente]
- Compañía son checkboxs con las opciones [Sin especificar, Solo, con una persona, en grupo] (“Sin especificar” desmarca todo)
- REVISA LA TABLA DE LA PÁGINA 17 DEL WORD DE FUNCIONALIDADES para saber qué atributos aparecen con qué Tipos (verde = aparecen, rojo = no aparecen). Si puedes intenta cumplir el amarillo, sino descártalo

Guardar en Backend:
- Jala tu código de la otra pantalla. Cuando verifiques que ya pasaste todo bien, borra la otra pantalla y su module.css
- "Añadir" debe subir el Gusto al Backend y tras eso llamar al handleGustos() para recargar los datos
- "Eliminar" no tiene botón. Puedes pedirle uno a Rodrigo o ponerlo dentro de "Editar". Más fácil sería poner un botón Eliminar al costado de cada Gusto, dentro del .map()
- "Eliminar" debe eliminar el Gusto del Backend y tras eso llamar al handleGustos() para recargar los datos
- Para "Editar", puedes hacer que lleve a una pestaña nueva, o eliminar el botón e integrar la opción en la pestaña actual; luego puede haber un Editar al costado de cada Gusto, o uno general (recomiendo este). Si lo necesitas, puedes cambiar los text por inputs o coordinar con Rodrigo
- Si elegiste la opción que recomendé, "Editar" haría un update de todos los Gustos (uno por uno), y tras eso llamar al handleGustos() para recargar los datos

- ELIMINAR PESTAÑA "PRIVACIDAD"
*/

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
    idUsuario: '', //el id del usuario al que pertenece el gusto. No se muestra en pantalla
    idTipo: 0, //el id del tipo de gusto. Se guarda como número pero en pantalla se muestra como texto. Aaron ya hizo un <select> borrador
    subtipo: '', //si el subtipo es un <select>, es el id del subtipo. si son checkboxes, cada caracter es un valor booleano de si el checkbox se marcó o no. Aaron ya hizo un <select> borrador
    nombre: '', //el nombre del gusto. Se muestra en pantalla
    idAfinidad: 0, //el id de la afinidad del gusto. Se guarda como número pero en pantalla se muestra como texto
    idDuracion: 0, //el id de la duracion del gusto. Se guarda como número pero en pantalla se muestra como texto
    idCompania: 0 //el id de la compañía del gusto. Se guarda como número pero en pantalla se muestra como texto
  }
  const [gustos, setGustos] = useState([])
  const [nuevoGusto, setNuevoGusto] = useState(defaultGusto)

  const arrayTipo = ['Sin especificar','Franquicia','Juego de mesa','Hobby','Pasatiempo + Juego',
  'Alimento','Músic@','Creador(a) de contenido','Deporte','Otro'];
  const [ID_Tipo, setID_Tipo] = useState(0);
  const arrayFranquicia = ['Sin especificar','Videojuego','Película','Serie','Libro','Otro']
  const arrayPasatiempo = ['Sin especificar','Aire libre','Espacio cerrado','Ambos']
  const arrayAlimento = ['Sin especificar','Comida','Bebida']
  const arrayMusica = ['Sin especificar','Solista','Grupo','Ambos']
  const arrayCreador = ['Sin especificar','Gameplays','Tops','Críticas','Aprendizaje','Sketches','Informativo','Historia','Día a día','Otro']
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
  
  const GuardarPerfil = async() => {
    if(ValidarCuenta()){
      UsuarioApi.updateCurrent(usuario).then((user)=>{
        handlePerfil()
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
  
  const handlePerfil = async() => {
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

  }

  const handleGustos = async() => {
    GustoApi.getGustosCurrent().then((user)=>{
      const aux = user.data.gustos;
      setGustos(aux)
    });
  }

  useEffect(() => {
    handlePerfil();
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
            <button onClick={GuardarPerfil} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
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

              <div className={styles.hobby} style={{left: '500px', marginLeft: '-3px', top: `${primero+salto*gustos.length}px`}}>
                <select value={nuevoGusto.subtipo} onChange={e => setNuevoGusto({ ...nuevoGusto,subtipo: e.target.value})} style={{width: "200%"}}>
                  {
                    arraySubTipo[ID_Tipo].map((item, index)=>{return(<option key={index} value={item}>{item}</option>)})
                  }
                </select>
              </div>

                <div className={styles.hobby} style={{left: '700px', marginLeft: '-3px', top: `${primero+salto*gustos.length}px`}}>
                  <input type="text" value={nuevoGusto.nombre} onChange={e => setNuevoGusto({ ...nuevoGusto,nombre: e.target.value})} style={{width: "100px"}} />
                </div>

                <div className={styles.hobby} style={{left: '900px', marginLeft: '-3px', top: `${primero+salto*gustos.length}px`}}>
                  <input type="text" value={nuevoGusto.idAfinidad} onChange={e => setNuevoGusto({ ...nuevoGusto,idAfinidad: e.target.value})} style={{width: "100px"}} />
                </div>

                <div className={styles.hobby} style={{left: '1100px', marginLeft: '-3px', top: `${primero+salto*gustos.length}px`}}>
                  <input type="text" value={nuevoGusto.idDuracion} onChange={e => setNuevoGusto({ ...nuevoGusto,idDuracion: e.target.value})} style={{ width: "100px"}} />
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