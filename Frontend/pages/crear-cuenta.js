import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styles from "./crear-cuenta.module.css";
import { Zoom } from "../extra/zoom.js"
import Global from "../extra/global.js"
import UsuarioApi from "../api/usuario.js"

const CrearCuenta = () => {
  Zoom()
  const [edad, setEdad] = useState(-1)

  const defaultUsuario = {
    nombre: '',
    apellidos: '',
    correo: '',
    id_genero: -1,
    nacimiento: '',
    apodo: '',
    contrasena: '',
    foto: '',
    carrera: "",
    facultad: -1,
    especialidad: "",
    descripcion: "",
    mostrar_nombre: true ,
    confirmationCode: "12345678"
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  const [contra2, setContra2] = useState('');
  
  const router = useRouter();

  const irMenu = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onCancelarTextClick = useCallback(() => {
    router.push("/");
  }, [router]);
  
  const cambiarUsuario = (tipo, dato) => { //nombre y apellidos
    if (Global.ValidarTexto(dato)) {
      setUsuario({...usuario,[tipo]: dato})
    }
  }

  const [cargando, setCargando] = useState(false);
  const onCrearCuentaClick = async() => {
    if(cargando===false){
      setCargando(true)
      if(ValidarCuenta()){
        if(confirm("¿Estás segur@? No podrás modificar tu correo institucional ni tu fecha de nacimiento posteriormente")){
          try{
            const res = await UsuarioApi.register(usuario)
            if(res.data.hasOwnProperty("message")){
              alert(res.data.message)
            }else{
              alert("¡Cuenta creada exitosamente!")
              const defaultCredenciales = {
                correo: usuario.correo,
                contrasena: usuario.contrasena
              }
              const res = await UsuarioApi.login(defaultCredenciales)
              window.localStorage.setItem("token", res.data.token);
              irMenu()
            }
          }catch(e){
            alert("Error. Backend no encendido")
          }
        }
      }
      setCargando(false)
    }
  }
  
  const actualizarEdad = (value) => {
    const f = new Date(value)
    const today = new Date()
    if(f>today.setDate(today.getDate())){ 
      alert("Esa fecha todavía no ha transcurrido")
    }else{
      const dif = today.setDate(today.getDate()+1) - f;
      setUsuario({...usuario, nacimiento:value})
      setEdad(Math.floor(dif/(1000*60*60*24*365.25)))
    }
  }

  const actualizarGenero = (value) => {
    if(value>=0){
      setUsuario({...usuario,id_genero: value})
    }
  }

  const DiferentesContra = (contra) => {
    let c = [];
    for(let i=0; i<contra.length; i++){
      if(!c.includes(contra[i])){
        c.push(contra[i])
      }
    }
    return c.length;
  }
  
  
  const ValidarCuenta = () => {
    let r=[];
    //Datos obligatorios
    if(usuario.nombre==''){
      r.push('el nombre')
    }
    if(usuario.correo==''){
      r.push('el correo')
    }
    if(usuario.id_genero==-1){
      r.push('el género')
    }
    if(usuario.nacimiento===''){
      r.push('la fecha de nacimiento')
    }
    if(usuario.contrasena=='' || contra2==''){
      r.push('la contraseña')
    }
    if(r.length!=0){
      let t=`Falta introducir ${r[0]}, `
      for(let i=1;i<r.length;i++){
        if(i==r.length-1){
          t+="y ";
        }
        t+=r[i]+", ";
      }
      t = t.substring(0, t.length-2)
      alert(t)
      return false;
    }
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
    //Correo institucional
    if(!usuario.correo.includes('@aloe.ulima.edu.pe')){
      alert("Solo se permiten correos institucionales de la Ulima (@aloe.ulima.edu.pe)")
      return false;
    }else if(usuario.correo.length<26){
      alert("El correo institucional está incompleto")
      return false;
    }else if(parseInt(usuario.correo.substring(0,8))<=9999999 || isNaN(usuario.correo.substring(0,8)) || !usuario.correo.endsWith('@aloe.ulima.edu.pe')){
      alert("Formato del correo institucional incorrecto")
      return false;
    }//Correo duplicado se revisa en Backend
    //Contraseña
    if(usuario.contrasena!=contra2){
      alert("Las contraseñas no coinciden")
      return false;
    }else if(usuario.contrasena.length<7){
      alert(`La contraseña debe tener al menos 8 caracteres (faltan ${8-usuario.contrasena.length})`)
      return false;
    }else if(usuario.contrasena.length<8){
      alert(`La contraseña debe tener al menos 8 caracteres (falta ${8-usuario.contrasena.length})`)
      return false;
    }
    const n = DiferentesContra(usuario.contrasena)
    if(n<2){
      alert(`La contraseña debe tener al menos 3 caracteres diferentes (faltan ${3-n})`)
      return false;
    }else if(n<3){
      alert(`La contraseña debe tener al menos 3 caracteres diferentes (falta ${3-n})`)
      return false;
    }
    //Edad
    if(edad < 16){
      alert("Necesitas tener al menos 16 años")
      return false;
    }else if(edad > 70){
      alert("No puedes tener más de 70 años")
      return false;
    }
    return true;
  }

  return (
    <div id='container'>
      <div className={styles.crearcuenta}>
        <img
          className={styles.crearcuentaChild}
          alt=""
          src="/rectangle-162.svg"
        />
        <div className={styles.crearcuentaItem} />
        <div className={styles.general}>General</div>
        <div className={styles.crearcuentaInner}>
          <input className={styles.dato} type="text" id="nombre" maxLength={30} value={usuario.nombre} onChange={e => cambiarUsuario("nombre", e.target.value)}></input>
        </div>
        {
          false?
            <div className={styles.rectangleDiv} />
          :
            null
        }
        <div className={styles.crearcuentaChild1}>
          {
            isNaN(edad) || edad<0?
              null
            :
              <input className={styles.dato} type="text" id="edad" disabled={true} value={edad}></input>
          }
        </div>
        <div className={styles.crearcuentaChild2}>
          <input className={styles.dato} type="text" id="apodo" maxLength={20} value={usuario.apodo} onChange={e => setUsuario({...usuario,apodo: e.target.value})} style={{width: "90%"}}></input>
        </div>
        <div className={styles.crearcuentaChild3}>
          <input className={styles.dato} type="text" id="apellidos" maxLength={30} value={usuario.apellidos} onChange={e => cambiarUsuario("apellidos", e.target.value)}></input>
        </div>
        <div className={styles.crearcuentaChild4}>
          <select className={styles.dato} id="genero" value={usuario.id_genero} onChange={e => actualizarGenero(e.target.value)} style={{width: "95%"}}>
            <option value={-1}>Selecciona una opción</option>
            <option value={0}>Masculino</option>
            <option value={1}>Femenino</option>
            <option value={2}>Otro</option>
            <option value={3}>Prefiero no decirlo</option>
          </select>
        </div>
        <div className={styles.crearcuentaChild5}>
          <input className={styles.dato} type="text" id="correo" maxLength={26} value={usuario.correo} onChange={e => setUsuario({...usuario,correo: e.target.value})}></input>
        </div>
        <div className={styles.crearcuentaChild6}>
          <input className={styles.dato} type="date" id="nacimiento" value={usuario.nacimiento} onChange={(e) => actualizarEdad(e.target.value)} style={{width: "93%"}}/>
        </div>
        <div className={styles.crearcuentaChild7}>
          <input className={styles.dato} type="password" id="contra" maxLength={40} value={usuario.contrasena} onChange={e => setUsuario({...usuario,contrasena: e.target.value})} style={{width: "93%"}}></input>
        </div>
        <div className={styles.crearcuentaChild8}>
          <input className={styles.dato} type="password" id="contra2" maxLength={40} value={contra2} onChange={e => setContra2(e.target.value)} style={{width: "93%"}}></input>
        </div>
        <div className={styles.crearcuentaChild9} />
        <div className={styles.crearcuentaChild10} onClick={onCrearCuentaClick} />
        <div className={styles.nombre}>Nombre:</div>
        {
          false?
            <div className={styles.universidad}>Universidad:</div>
          :
            null
        }
        <div className={styles.edad}>Edad:</div>
        <div className={styles.apodo}>Apodo:</div>
        <div className={styles.apellido}>Apellido:</div>
        <div className={styles.genero}>Género:</div>
        <div className={styles.correoInstitucional}>Correo institucional:</div>
        <div className={styles.fechaDeNacimiento}>Fecha de nacimiento:</div>
        <div className={styles.contrasea}>Contraseña:</div>
        <div className={styles.repetirContrasea}>Repetir contraseña:</div>
        <img className={styles.userIcon} alt="" src="/user2.svg" />
        <div className={styles.crearCuenta} onClick={onCrearCuentaClick}>
          Crear cuenta
        </div>
        <div className={styles.cancelar} onClick={onCancelarTextClick}>
          Cancelar
        </div>
        <img
          className={styles.crearcuentaChild11}
          alt=""
          src="/polygon-351.svg"
        />
        <img
          className={styles.transhumansWaitingIcon}
          alt=""
          src="/transhumans-waiting@2x.png"
        />
        <div className={styles.footer}>
          <div className={styles.byTeambocching}>By: TeamBocching</div>
        </div>
        <div className={styles.crearcuentaChild12} />
        <div className={styles.creacinDeCuenta}>Creación de cuenta</div>
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img className={styles.vectorIcon} alt="" src="/vector35.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector36.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector37.svg" />
          <img className={styles.vectorIcon3} alt="" src="/vector38.svg" />
          <div className={styles.txt01}>Bocching</div>
        </div>
      </div>
    </div>
  );
};

export default CrearCuenta;