import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes2.module.css";

const Solicitudes2 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onRectangle3Click = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const onRecibidasTextClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onOcultasTextClick = useCallback(() => {
    router.push("/solicitudes3");
  }, [router]);

  const onGuardadasTextClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  return (
    <div className={styles.solicitudes2}>
      <img
        className={styles.solicitudes2Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img className={styles.solicitudes2Item} alt="" src="/rectangle-16.svg" />
      <img
        className={styles.solicitudes2Inner}
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
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.solicitudesEnviadas}>Solicitudes Enviadas</div>
      <div className={styles.cancelar}>Cancelar</div>
      <div className={styles.ocultar}>Ocultar</div>
      <div className={styles.solicitudes2Child1} />
      <div className={styles.solicitudes2Child2} />
      <div className={styles.solicitudes2Child3} />
      <div className={styles.solicitudes2Child4} />
      <div className={styles.solicitudes2Child5} />
      <div className={styles.ellipseDiv} />
      <div className={styles.solicitudes2Child6} />
      <div className={styles.solicitudes2Child7} />
      <div className={styles.solicitudes2Child8} />
      <b className={styles.nombreYApellido}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido1}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido2}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido3}>Nombre y Apellido / Apodo</b>
      <img className={styles.groupIcon} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes2Child9} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes2Child10} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes2Child11} alt="" src="/group-147.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.solicitudes2Child12} />
      <div className={styles.solicitudes2Child13} />
      <div className={styles.solicitudes2Child14} />
      <div className={styles.fechaOHora}>Fecha o hora</div>
      <div className={styles.fechaOHora1}>Fecha o hora</div>
      <div className={styles.fechaOHora2}>Fecha o hora</div>
      <div className={styles.fechaOHora3}>Fecha o hora</div>
      <div className={styles.solicitudes2Child15} />
      <div className={styles.solicitudes2Child16} />
      <div className={styles.solicitudes2Child17} />
      <div className={styles.solicitudes2Child18} />
      <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
      <img className={styles.solicitudes2Child19} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes2Child20} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes2Child21} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes2Child22} alt="" src="/group-180.svg" />
      <img className={styles.frameIcon} alt="" src="/frame1.svg" />
      <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
      <div className={styles.recibidas} onClick={onRecibidasTextClick}>
        Recibidas
      </div>
      <div className={styles.enviadas}>Enviadas</div>
      <div className={styles.ocultas} onClick={onOcultasTextClick}>
        Ocultas
      </div>
      <div className={styles.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>
      <img className={styles.frameIcon2} alt="" src="/frame1.svg" />
      <img className={styles.frameIcon3} alt="" src="/frame1.svg" />
      <img className={styles.solicitudes2Child23} alt="" src="/group-146.svg" />
    </div>
  );
};

export default Solicitudes2;
