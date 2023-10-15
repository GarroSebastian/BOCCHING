import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react'
import styles from "./crear-cuenta.module.css";

const CrearCuenta = () => {
  
  const defaultUsuario = {
    nombres: '',
    apellidos: '',
    correo: '',
    genero: -1,
    nacimiento: '',
    edad: -1,
    apodo: '',
    contrasena: ''
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  const [usuarios, setUsuarios] = useState([]);
  const [contra2, setContra2] = useState('');
  
  const router = useRouter();

  const irMenu = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onCancelarTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleOnLoad = async() =>{
    const result = await usuarioApi.findAll()
    setPersonas(result.data)
  }

  const handleGuardarUsuario = async(usuario) => {
    await usuarioApi.create(usuario)
  }

  const onCrearCuentaClick = () => {
    console.log(usuario)
    if(ValidarCuenta()){
      alert("¡Cuenta creada exitosamente!")
      irMenu()
    }
  }
  
  const actualizarEdad = (value) => {
    const f = new Date(value)
    const today = new Date()
    if(f>today.setDate(today.getDate()-1)){
      alert("Esa fecha todavía no ha transcurrido")
    }else{
      const dif = today.setDate(today.getDate()+1) - f;
      setUsuario({...usuario, nacimiento:value, edad: Math.floor(dif/(1000*60*60*24*365.25))})
    }
  }

  const actualizarGenero = (value) => {
    if(value>=0){
      setUsuario({...usuario,genero: value})
    }
  }
  
  const ExisteCorreo = (correo) => {
    const u = usuarios.find((u) => u.correo == correo)
    return (u !== undefined);
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
    if(usuario.nombres==''){
      r.push('el nombre')
    }
    if(usuario.correo==''){
      r.push('el correo')
    }
    if(usuario.genero==-1){
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
    //Correo institucional
    if(!usuario.correo.includes('@aloe.ulima.edu.pe')){
      alert("Solo se permiten correos institucionales de la Ulima (@aloe.ulima.edu.pe)")
      return false;
    }else if(usuario.correo.length<26){
      alert("El correo institucional está incompleto")
      return false;
    }else if(parseInt(usuario.correo.substring(0,8))<=9999999 || !usuario.correo.endsWith('@aloe.ulima.edu.pe')){
      alert("Formato del correo institucional incorrecto")
      return false;
    }else if(ExisteCorreo(usuario.correo)){
      alert("Ese correo institucional ya está en uso")
      return false;
    }
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
    if(usuario.edad < 16){
      alert("Necesitas tener al menos 16 años")
      return false;
    }
    return true;
  }

  useEffect(()=>{
    //handleOnLoad()
  },[])

  return (
    <div className={styles.crearcuenta}>
      <img
        className={styles.crearcuentaChild}
        alt=""
        src="/rectangle-162.svg"
      />
      <div className={styles.crearcuentaItem} />
      <div className={styles.general}>General</div>
      <div className={styles.crearcuentaInner}>
        <input className={styles.dato} type="text" id="nombres" value={usuario.nombres} onChange={e => setUsuario({...usuario,nombres: e.target.value})}></input>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.crearcuentaChild1}>
        {
          isNaN(usuario.edad) || usuario.edad<0?
            null
          :
            <input className={styles.dato} type="text" id="edad" disabled={true} value={usuario.edad}></input>
        }
      </div>
      <div className={styles.crearcuentaChild2}>
        <input className={styles.dato} type="text" id="apodo" value={usuario.apodo} onChange={e => setUsuario({...usuario,apodo: e.target.value})}></input>
      </div>
      <div className={styles.crearcuentaChild3}>
        <input className={styles.dato} type="text" id="apellidos" value={usuario.apellidos} onChange={e => setUsuario({...usuario,apellidos: e.target.value})}></input>
      </div>
      <div className={styles.crearcuentaChild4}>
        <select className={styles.dato} id="genero" value={usuario.genero} onChange={e => actualizarGenero(e.target.value)}>
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
        <input className={styles.dato} type="date" value={usuario.nacimiento} id="nacimiento" onChange={(e) => actualizarEdad(e.target.value)} />
      </div>
      <div className={styles.crearcuentaChild7}>
        <input className={styles.dato} type="password" id="contra" value={usuario.contrasena} onChange={e => setUsuario({...usuario,contrasena: e.target.value})}></input>
      </div>
      <div className={styles.crearcuentaChild8}>
        <input className={styles.dato} type="password" id="contra2" value={contra2} onChange={e => setContra2(e.target.value)}></input>
      </div>
      <div className={styles.crearcuentaChild9} />
      <div className={styles.crearcuentaChild10} onClick={onCrearCuentaClick} />
      <div className={styles.nombre}>Nombre:</div>
      <div className={styles.universidad}>Universidad:</div>
      <div className={styles.edad}>Edad:</div>
      <div className={styles.apodo}>Apodo:</div>
      <div className={styles.apellido}>Apellido:</div>
      <div className={styles.genero}>Genero:</div>
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
      <img className={styles.polygonIcon} alt="" src="/polygon-34.svg" />
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
      <img className={styles.frameIcon} alt="" src="/frame7.svg" />
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
  );
};

export default CrearCuenta;
