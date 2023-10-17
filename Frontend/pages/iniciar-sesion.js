import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js"
import styles from "./iniciar-sesion.module.css";
import UsuarioApi from "../api/usuario.js"




const IniciarSesion = () => {
  Zoom()
  const router = useRouter();

  const [usuario, setUsuario] = useState(" ");
  const [password, setPassword] = useState("");

 /* EJEMPLO LOGIN CON BACKEND
 const loginHttp = async function(usuario,password){

    const response = await fetch(
      "/*BACKEND ejemplo:*/ /* http://localhost:8000/endpoints/login",
      {
        method:"POST",
        body: JSON.stringify(
          {
            username : username,
            password : password
          }
        )
      }
    )
    const data = await.response.json()

    return data.error
  } */

  //CONVERTIR EN FUNCION ASYNC QUE LLAME AL BACKEND, LO MISMO PARA onINGRESARTextClick
  const onFrameContainer5Click = useCallback (() => {
    //const res = await UsuarioApi.login(usuario, password)
    //alert(res);
    //if (usuario === "res.usuario" || password ==="res.password"){
      router.push("/menu");
      //}else{
        // alert("Error en usuario o contraseña")
  }, [router]);

  const onINGRESARTextClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onCrearCuentaTextClick = useCallback(() => {
    router.push("/crear-cuenta");
  }, [router]);

  return (
    <div id='container'>
    <div className={styles.iniciarsesion}>
      <div className={styles.inicioDeSesin}>Inicio de Sesión</div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.svg" />
            <div className={styles.correoInstitucional}>
            <input className={styles.dato} type="text" id="correo" value={usuario.correoInstitucional} onChange={e => setUsuario({...usuario,nombres: e.target.value})}></input>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.passwordParent}>
            <img className={styles.passwordIcon} alt="" src="/password.svg" />
            <div className={styles.contrasea}>
            <input className={styles.dato} type="password" id="contrasea" value={usuario.contrasea} onChange={e => setPassword({...password,nombres: e.target.value})}></input></div>
          </div>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.ingresarWrapper} onClick={onFrameContainer5Click}>
        <div className={styles.ingresar} onClick={onINGRESARTextClick}>
          INGRESAR
        </div>
      </div>
      <div className={styles.crearCuenta} onClick={onCrearCuentaTextClick}>
        Crear cuenta
      </div>
      <img
        className={styles.iniciarsesionChild}
        alt=""
        src="/rectangle-222.svg"
      />
      <div className={styles.iniciarsesionItem} />
      <div className={styles.iniciarsesionInner} />
      <div className={styles.ellipseDiv} />
      <img
        className={styles.transhumansPachecoIcon}
        alt=""
        src="/transhumans-pacheco@2x.png"
      />
      <div className={styles.iniciarsesionChild1} />
    </div>
    </div>
  );
};

export default IniciarSesion;
