import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin12.module.css";
import { Zoom } from "../extra/zoom.js";
import { useState } from "react";

const EliminarCuenta = () => {
  Zoom()
  const router = useRouter();
  //Guardar datos de forma "especial", lo ve como un objeto
  const [codigo, setcodigo] = useState("20201166")
  //Contra Antigua
  const [codigoCofirmacion, setcodigoCofirmacion] = useState("");

  const onRectangleClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onEliminarCuentaText1Click0 = useCallback(() => {
    router.push("/");
    
  }, [router]);

  const onEliminarCuentaText1Click = () => {
    if(codigoCofirmacion === codigo){
      onEliminarCuentaText1Click0()
    }else{
      console.log("ERROR de USUARIO")
    }
    
  };

  const onCancelarTextClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  return (
    <div id="container">
    <div id={styles.container} className={styles.configuracin12}>
      <div className={styles.eliminarCuenta}>Eliminar cuenta</div>
      <div className={styles.configuracin12Child} onClick={onRectangleClick} />
      <div className={styles.configuracin12Item} onClick={onRectangle1Click} />
      <div className={styles.configuracin12Inner} />
      <div className={styles.cdigoDeUsuario}>
      <input
          onChange={function(evt) {setcodigoCofirmacion(evt.target.value)}}/>
      </div>
      <div
        className={styles.eliminarCuenta1}
        onClick={onEliminarCuentaText1Click}
      >
        Eliminar Cuenta
      </div>
      <div className={styles.siEliminasTuContainer}>
        <p className={styles.siEliminasTu}>
          Si eliminas tu cuenta perderás todos los datos y historial registrado
        </p>
        <p className={styles.siEliminasTu}>
          a lo largo de tu estadía por Bocching sin opción a recupero.
        </p>
        <p className={styles.siEliminasTu}>&nbsp;</p>
        <p className={styles.siEliminasTu}>
          De estar consciente de la decisión, por motivos de seguridad te
          pediremos lo siguiente.
        </p>
      </div>
      <div className={styles.cancelar} onClick={onCancelarTextClick}>
        Cancelar
      </div>
      <div className={styles.ingreseSuCdigo}>
        Ingrese su código de usuario o correo
      </div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.transhumansMechanicalLove}
        alt=""
        src="/transhumans-mechanical-love@2x.png"
      />
      <div className={styles.txt01Parent}>
        <div className={styles.txt01}>Bocching</div>
        <div
          className={styles.rectangleWrapper}
          onClick={onFrameContainerClick}
        >
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default EliminarCuenta;
