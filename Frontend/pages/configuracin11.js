import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./configuracin11.module.css";

const Configuracin11 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/configuracin2");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/configuracin12");
  }, [router]);

  const onCerrarSesinTextClick = useCallback(() => {
    router.push("/configuracin2");
  }, [router]);

  return (
    <div className={styles.configuracin11}>
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
      <div className={styles.cambiarContrasea}>Cambiar contraseña</div>
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
      <div className={styles.antiguaContrasea}>Antigua contraseña</div>
      <div className={styles.nuevaContrasea}>Nueva contraseña</div>
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
  );
};

export default Configuracin11;
