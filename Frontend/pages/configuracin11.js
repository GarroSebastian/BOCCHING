import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin11.module.css";
import styles2 from "./configuracin2.module.css";
import { Zoom } from "../extra/zoom.js";
import { useState } from "react";

const Configuracin11 = () => {
  const [pag, setPag] = useState(1);
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

  const onVectorClick = useCallback(() => {
    window.localStorage.removeItem("token");
    router.push("/");
  }, [router]);
/*
return 
<div>
{
  pag==1?
  <div>

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

  </div>
  :
    <>
  {
    pag==2? 
    <div>
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
    </div> : null 
  } </> 
}
</div>
*/

  return (
    <div id="container">
      {
        pag==1?
    <div id={styles.container} className={styles.configuracin11}>
      <img
        className={styles.configuracin11Child}
        alt=""
        src="/rectangle-29.svg"
        //onClick={onRectangleClick}
        onClick={e => setPag(2)}
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
      <div className={styles.cerrarSesin} onClick={e => setPag(2)}>
        Cerrar sesión
      </div>
      <img
        className={styles.configuracin11Child5}
        alt=""
        src="/group-1921.svg"
      />
      
    </div>
    :
    <>
  {
    pag==2? 
    

      <div id='container' className={styles2.configuracin2}>
      <div className={styles2.frame}>
        <img className={styles2.frameChild} alt="" src="/rectangle-16.svg" />
        <img
          className={styles2.frameItem}
          alt=""
          src="/rectangle-29.svg"
          onClick={e => setPag(1)}
        />
        <div className={styles2.frameInner} />
        <div className={styles2.cerrarSesin}>Cerrar sesión</div>
        <div className={styles2.configuracin}>Configuración</div>
        <div className={styles2.cuenta} onClick={e => setPag(1)}>
          Cuenta
        </div>
        <img
          className={styles2.transhumansNewBeginnings}
          alt=""
          src="/transhumans-new-beginnings@2x.png"
        />
        <img
          className={styles2.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onVectorClick}
        />
        <img
          className={styles2.vectorIcon1}
          alt=""
          src="/vector1.svg"
          onClick={onVectorClick}
        />
        <div className={styles2.deseasCerrarSesinContainer}>
          <p className={styles2.deseasCerrar}>¿DESEAS CERRAR</p>
          <p className={styles2.deseasCerrar}> SESIÓN?</p>
        </div>
        <div className={styles2.presioneElBotn}>Presione el botón</div>
      </div>
      <img className={styles2.configuracin2Child} alt="" src="/group-192.svg" />

    </div>
     
     : null 
  } </> 
    }
    </div>
  );
};

export default Configuracin11;
