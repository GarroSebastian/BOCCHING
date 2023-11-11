import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin11.module.css";
import { Zoom } from "../extra/zoom.js";
import { useState } from "react";

const Configuracin11 = () => {
  Zoom()
  //Guardar datos de forma "especial", lo ve como un objeto
  const [password, setPassword] = useState("llama")
  //Contra Antigua
  const [contraseaAntigua, setcontraseaAntigua] = useState("");
  //Contra Nueva
  const [contraseaNueva, setcontraseaNueva] = useState("");
  
  const router = useRouter();
  
  const onRectangleClick = useCallback(() => {
    router.push("/configuracin2");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/eliminar-cuenta");
  }, [router]);

  const onCerrarSesinTextClick = useCallback(() => {
    router.push("/configuracin2");
  }, [router]);

  const handleButtonClick = () => {
    if(contraseaAntigua===password){
      setPassword(contraseaNueva);
      console.log(
        "contraseña cambiada"
      )
    }
    
  };


  return (
    <div id="container">
    <div id={styles.container} className={styles.configuracin11}>
      <img
        className={styles.configuracin11Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img
        className={styles.configuracin11Item}
        alt=""
        src="/rectangle-161.svg"
      />
      <div className={styles.configuracin11Inner} />
      <div className={styles.zonaPeligrosa}>** Zona peligrosa</div>
      <div className={styles.presioneElConoContainer}>
        <p
          className={styles.presioneElCono}
        >{`Presione el ícono si es que realmente deseas `}</p>
        <p className={styles.presioneElCono}>
          eliminar tu cuenta, pero recuerda que esto
        </p>
        <p className={styles.presioneElCono}>
          eliminaría tu registro del aplicativo.
        </p>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.cambiarContrasea}>
      <button  onClick={handleButtonClick}>Cambiar Contraseña</button>
      </div>
      <div className={styles.cambiarContrasea1}>Cambiar contraseña</div>
      <div className={styles.eliminarCuenta}>Eliminar cuenta</div>
      <div className={styles.configuracin11Child1} />
      <div className={styles.configuracin11Child2} />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-183.svg"
        onClick={onGroupClick}
      />
      <div className={styles.antiguaContrasea}>
        <input
          type="text"
          onChange={function(evt) {setcontraseaAntigua(evt.target.value)}}/>
        </div>
      <div className={styles.nuevaContrasea}>
        <input
          type="text"
          onChange={function(evt) {setcontraseaNueva(evt.target.value)}}/>    
        </div>
      <div className={styles.configuracin11Child3} />
      <div className={styles.configuracin11Child4} />
      <div className={styles.configuracin}>Configuración</div>
      <div className={styles.cuenta}>Cuenta</div>
      <div className={styles.cerrarSesin} onClick={onCerrarSesinTextClick}>
        Cerrar sesión
      </div>
      <img
        className={styles.configuracin11Child5}
        alt=""
        src="/group-1921.svg"
      />
      
    </div>
    </div>
  );
};

export default Configuracin11;
