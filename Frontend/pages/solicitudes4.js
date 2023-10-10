import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes4.module.css";

const Solicitudes4 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onRecibidasTextClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onEnviadasTextClick = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onOcultasTextClick = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  return (
    <div className={styles.solicitudes4}>
      <img
        className={styles.solicitudes4Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img
        className={styles.solicitudes4Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.solicitudes4Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-16.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles.ocultar}>Ocultar</div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
      <img className={styles.frameIcon1} alt="" src="/frame.svg" />
      <img className={styles.vectorIcon6} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon7} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon8} alt="" src="/vector2.svg" />
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.solicitudesGuardadas}>Solicitudes Guardadas</div>
      <div className={styles.enviar}>Enviar</div>
      <div className={styles.cancelar}>Cancelar</div>
      <div className={styles.solicitudes4Child1} />
      <div className={styles.solicitudes4Child2} />
      <div className={styles.solicitudes4Child3} />
      <div className={styles.solicitudes4Child4} />
      <div className={styles.ellipseDiv} />
      <div className={styles.solicitudes4Child5} />
      <div className={styles.solicitudes4Child6} />
      <b className={styles.nombreYApellido}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido1}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido2}>Nombre y Apellido / Apodo</b>
      <img className={styles.groupIcon} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes4Child7} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes4Child8} alt="" src="/group-147.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.solicitudes4Child9} />
      <div className={styles.solicitudes4Child10} />
      <div className={styles.fechaOHora}>Fecha o hora</div>
      <div className={styles.fechaOHora1}>Fecha o hora</div>
      <div className={styles.fechaOHora2}>Fecha o hora</div>
      <div className={styles.solicitudes4Child11} />
      <div className={styles.solicitudes4Child12} />
      <div className={styles.solicitudes4Child13} />
      <img className={styles.solicitudes4Child14} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes4Child15} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes4Child16} alt="" src="/group-180.svg" />
      <img className={styles.vectorIcon9} alt="" src="/vector6.svg" />
      <img className={styles.vectorIcon10} alt="" src="/vector6.svg" />
      <img className={styles.vectorIcon11} alt="" src="/vector6.svg" />
      <div className={styles.guardadasSon}>
        ** Guardadas = Son personas que dejaste pendiente enviarle una solicitud
        de amistad.
      </div>
      <div className={styles.recibidas} onClick={onRecibidasTextClick}>
        Recibidas
      </div>
      <div className={styles.enviadas} onClick={onEnviadasTextClick}>
        Enviadas
      </div>
      <div className={styles.ocultas} onClick={onOcultasTextClick}>
        Ocultas
      </div>
      <div className={styles.guardadas}>Guardadas</div>
      <div className={styles.frame} />
      <img className={styles.solicitudes4Child17} alt="" src="/group-146.svg" />
    </div>
  );
};

export default Solicitudes4;
