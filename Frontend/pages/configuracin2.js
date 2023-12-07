import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin2.module.css";
import { Zoom } from "../extra/zoom.js";

const Configuracin2 = () => {
  Zoom()
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  const onCuentaTextClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  const onVectorClick = useCallback(() => {
    window.localStorage.removeItem("token");
    router.push("/");
  }, [router]);

  return (
    <div id='container'  className={styles.configuracin2}>
      <div className={styles.frame}>
        <img className={styles.frameChild} alt="" src="/rectangle-16.svg" />
        <img
          className={styles.frameItem}
          alt=""
          src="/rectangle-29.svg"
          onClick={onRectangle1Click}
        />
        <div className={styles.frameInner} />
        <div className={styles.cerrarSesin}>Cerrar sesión</div>
        <div className={styles.configuracin}>Configuración</div>
        <div className={styles.cuenta} onClick={onCuentaTextClick}>
          Cuenta
        </div>
        <img
          className={styles.transhumansNewBeginnings}
          alt=""
          src="/transhumans-new-beginnings@2x.png"
        />
        <img
          className={styles.vectorIcon}
          alt=""
          src="/vector.svg"
          onClick={onVectorClick}
        />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector1.svg"
          onClick={onVectorClick}
        />
        <div className={styles.deseasCerrarSesinContainer}>
          <p className={styles.deseasCerrar}>¿DESEAS CERRAR</p>
          <p className={styles.deseasCerrar}> SESIÓN?</p>
        </div>
        <div className={styles.presioneElBotn}>Presione el botón</div>
      </div>
      <img className={styles.configuracin2Child} alt="" src="/group-192.svg" />
    </div>
  );
};

export default Configuracin2;
