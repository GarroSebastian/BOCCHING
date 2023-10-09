import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./iniciar-sesion.module.css";

const IniciarSesion = () => {
  const router = useRouter();

  const onFrameContainer5Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onINGRESARTextClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onCrearCuentaTextClick = useCallback(() => {
    router.push("/crear-cuenta");
  }, [router]);

  return (
    <div className={styles.iniciarsesion}>
      <div className={styles.inicioDeSesin}>Inicio de Sesión</div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.userParent}>
            <img className={styles.userIcon} alt="" src="/user1.svg" />
            <div className={styles.correoInstitucional}>
              Correo Institucional
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.passwordParent}>
            <img className={styles.passwordIcon} alt="" src="/password.svg" />
            <div className={styles.contrasea}>Contraseña</div>
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
  );
};

export default IniciarSesion;
