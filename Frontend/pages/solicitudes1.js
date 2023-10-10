import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes1.module.css";

const Solicitudes1 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onEnviadasTextClick = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onOcultasTextClick = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onGuardadasTextClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  return (
    <div className={styles.solicitudes1}>
      <img
        className={styles.solicitudes1Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img className={styles.solicitudes1Item} alt="" src="/rectangle-16.svg" />
      <img
        className={styles.solicitudes1Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle3Click}
      />
      <div className={styles.rectangleDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector9.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector9.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector9.svg" />
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.recibidas}>Recibidas</div>
      <div className={styles.solicitudesRecibidas}>Solicitudes recibidas</div>
      <div className={styles.aceptar}>Aceptar</div>
      <div className={styles.rechazar}>Rechazar</div>
      <div className={styles.enviadas} onClick={onEnviadasTextClick}>
        Enviadas
      </div>
      <div className={styles.ocultas} onClick={onOcultasTextClick}>
        Ocultas
      </div>
      <div className={styles.solicitudes1Child1} />
      <div className={styles.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>
      <div className={styles.solicitudes1Child2} />
      <div className={styles.solicitudes1Child3} />
      <div className={styles.solicitudes1Child4} />
      <div className={styles.solicitudes1Child5} />
      <div className={styles.ellipseDiv} />
      <div className={styles.solicitudes1Child6} />
      <div className={styles.solicitudes1Child7} />
      <div className={styles.solicitudes1Child8} />
      <b className={styles.nombreYApellido}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido1}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido2}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido3}>Nombre y Apellido / Apodo</b>
      <img className={styles.groupIcon} alt="" src="/group-119.svg" />
      <img className={styles.solicitudes1Child9} alt="" src="/group-119.svg" />
      <img className={styles.solicitudes1Child10} alt="" src="/group-119.svg" />
      <img className={styles.solicitudes1Child11} alt="" src="/group-119.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.solicitudes1Child12} />
      <div className={styles.solicitudes1Child13} />
      <div className={styles.solicitudes1Child14} />
      <div className={styles.fechaOHora}>Fecha o hora</div>
      <div className={styles.fechaOHora1}>Fecha o hora</div>
      <div className={styles.fechaOHora2}>Fecha o hora</div>
      <div className={styles.fechaOHora3}>Fecha o hora</div>
      <div className={styles.solicitudes1Child15} />
      <div className={styles.solicitudes1Child16} />
      <div className={styles.solicitudes1Child17} />
      <div className={styles.solicitudes1Child18} />
      <img className={styles.vectorIcon9} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon10} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon10} alt="" src="/vector9.svg" />
      <img className={styles.frameIcon} alt="" src="/frame2.svg" />
      <img className={styles.checkIcon} alt="" src="/check.svg" />
      <img className={styles.checkIcon1} alt="" src="/check.svg" />
      <img className={styles.checkIcon2} alt="" src="/check.svg" />
      <img
        className={styles.solicitudes1Child19}
        alt=""
        src="/group-1461.svg"
      />
    </div>
  );
};

export default Solicitudes1;
