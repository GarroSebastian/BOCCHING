import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Global from "../extra/global.js";
import styles from "./Perfil.module.css";
import Lateral from "../components/lateral.js"
import UsuarioApi from "../api/usuario";


/*Validar Perfil:
- Basarse en las validaciones de crear-cuenta y agregar las necesarias en la función ValidarCuenta()
*/

const InfoPerfil = ({id}) => { //si id es null, estás en mi-perfil (te deja editar los datos). si tiene valor, estás viendo otro perfil (no te deja editar)

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

  const [contador, setContador] = useState(true);
  const onRectangle11Click = useCallback(() => { //Boton editar
    // Cambiar el valor de contador cuando se presiona el botón 
    setContador(prevContador => !prevContador);
  }, []);

  const onRectangle12Click = useCallback(() => {  //Boton añadir
    // Cambiar el valor de contador cuando se presiona el botón 
    console.log("Añadir presionado");
  }, []);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onPrivacidadTextClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onClickChat = useCallback(() => {
    router.push("//mensajes");
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
  
  const handleUser = (aux) => {
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
  }

  const handlePerfil = async() => {
    //var token = localStorage.getItem("token");
    /*UsuarioApi.findUser(token).then((user)=>{

      console.log(user.data);
    });*/

    if(id===null){
      UsuarioApi.findCurrent().then((user)=>{
        handleUser(user.data.usuario)
      });
    }else{
      /*UsuarioApi.findOne().then((user)=>{
        handleUser(user.data.usuario)
      });*/
      console.log("CAMAYOOOOOO")
    }

  }

    const handleInputChange = (index, fieldName, event) => {
    const updatedGustos = [...gustos];
    updatedGustos[index] = {
        ...updatedGustos[index],
        [fieldName]: event.target.value
    };
    setGustos(updatedGustos);
    };

  useEffect(() => {
    handlePerfil();
  }, [])
  
  return (
    <>
        <div className={styles.miperfil1Child1} />
        <div className={styles.miperfil1Child2} />
        <div className={styles.miperfil1Child3} />      
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
        {
        id===null?
            <>
            <div className={styles.miperfil1Child13}>
                <button onClick={e => document.getElementById("fileInput").click()} style={{width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
            </div>
            <img className={styles.vectorIcon2} alt="" src="/vector27.svg" />
            <img className={styles.vectorIcon3} alt="" src="/vector28.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector29.svg" />
            </>
        :
            <>
            <div className={styles.amistades2Child5} onClick={onClickChat}/>
            <img className={styles.amistades2Child6} alt="" src="/group-1351.svg"/>
            </>
        }
        <div className={styles.miperfil1Child11} style={{top: "1395px", left: "910px"}}>
        <div className={styles.nombreapodo}>
            <p style={{marginTop: "13px"}}>Guardar</p>
        </div>
        <button onClick={GuardarPerfil} style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "transparent", border: "none"}}></button>
        </div>
    </>
  );
};

export default InfoPerfil;