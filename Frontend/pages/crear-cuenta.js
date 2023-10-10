import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState } from 'react'
import styles from "./crear-cuenta.module.css";

const CrearCuenta = () => {
  
  const defaultUsuario = {
    nombres: "dfd",
    apellidos: "",
    correo: "",
    genero: 0,
    nacimiento: null,
    edad: 0,
    apodo: "",
    contrasena: ""
  }
  const [usuario, setUsuario] = useState(defaultUsuario);
  
  const router = useRouter();

  const onRectangle13Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onCrearCuentaTextClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onCancelarTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

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
        <input type="text" value={usuario.nombres} onChange={e => setUsuario({...usuario,nombres: e.target.value})}></input>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.crearcuentaChild1} />
      <div className={styles.crearcuentaChild2} />
      <div className={styles.crearcuentaChild3} />
      <div className={styles.crearcuentaChild4} />
      <div className={styles.crearcuentaChild5} />
      <div className={styles.crearcuentaChild6} />
      <div className={styles.crearcuentaChild7} />
      <div className={styles.crearcuentaChild8} />
      <div className={styles.crearcuentaChild9} />
      <div className={styles.crearcuentaChild10} onClick={onRectangle13Click} />
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
      <div className={styles.crearCuenta} onClick={onCrearCuentaTextClick}>
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
