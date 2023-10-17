import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Zoom } from "../extra/zoom.js"
import styles from "./iniciar-sesion.module.css";
import UsuarioApi from "../api/usuario.js"




const IniciarSesion = () => {
  Zoom()
  const [Credenciales, setCredenciales] = useState({
    correo: '',
    contrasena: ''
  });
  const router = useRouter();

  
  const [usuario, setUsuario] = useState({
    correo: '',
    contrasena: ''
  });

  const onCorreoChange = (event) => {
  const updatedUsuario = { ...usuario, correo: event.target.value };
  setUsuario(updatedUsuario);
  setCredenciales(updatedUsuario);
  }

  const onContrasenaChange = (event) => {
    const updatedUsuario = { ...usuario, contrasena: event.target.value };
    setUsuario(updatedUsuario);
    setCredenciales(updatedUsuario);
  }

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

  const HandleLogin = async () => {
    const res = await UsuarioApi.login(Credenciales)
    console.log(res.data);
    if (res.data == true){
      onFrameContainer5Click();
    }else{
      alert("Se borrará system32")
      console.log(res.data("Message"))
    }
      
}

  const onFrameContainer5Click = useCallback (() => {

      console.log(Credenciales);

      router.push("/menu");

  }, [router] [Credenciales]);

    const onINGRESARTextClick = useCallback(() => {
      console.log(Credenciales);
      router.push("/menu");
  }, [router] [Credenciales]);

 // const onINGRESARTextClick = useCallback(() => {
    
 //   router.push("/menu");
 // }, [router]);

  const onCrearCuentaTextClick = useCallback(() => {
    router.push("/crear-cuenta");
  }, [router]);

  return (
    <div id="container">
    <div className={styles.iniciarsesion}>
      <div className={styles.inicioDeSesin}>Inicio de Sesión</div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.svg" />
            <div className={styles.correoInstitucional}>
            <input className={styles.barratexto} type="text" id="correo" value={usuario.correo} onChange={onCorreoChange}></input>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.passwordParent}>
            <img className={styles.passwordIcon} alt="" src="/password.svg" />
            <div className={styles.contrasea}>
            <input className={styles.barratexto2} type="password" id="contrasea" value={usuario.contrasena} onChange={onContrasenaChange}></input></div>
          </div>
          <div className={styles.frame} />
        </div>
      </div>
      <div className={styles.ingresarWrapper} onClick={HandleLogin}>
        <div className={styles.ingresar} onClick={HandleLogin}>
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
