import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./solicitudes3.module.css";

const Solicitudes3 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onRecibidasTextClick = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onEnviadasTextClick = useCallback(() => {
    router.push("/solicitudes2");
  }, [router]);

  const onGuardadasTextClick = useCallback(() => {
    router.push("/solicitudes4");
  }, [router]);

  return (
    <div className={styles.solicitudes3}>
      <img
        className={styles.solicitudes3Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img
        className={styles.solicitudes3Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.solicitudes3Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-16.svg" />
      <div className={styles.rectangleDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <div className={styles.solicitudes}>Solicitudes</div>
      <div className={styles.solicitudesOcultas}>Solicitudes Ocultas</div>
      <div className={styles.enviar}>Enviar</div>
      <div className={styles.cancelar}>Cancelar</div>
      <div className={styles.solicitudes3Child1} />
      <div className={styles.solicitudes3Child2} />
      <div className={styles.solicitudes3Child3} />
      <div className={styles.solicitudes3Child4} />
      <div className={styles.ellipseDiv} />
      <div className={styles.solicitudes3Child5} />
      <div className={styles.solicitudes3Child6} />
      <b className={styles.nombreYApellido}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido1}>Nombre y Apellido / Apodo</b>
      <b className={styles.nombreYApellido2}>Nombre y Apellido / Apodo</b>
      <img className={styles.groupIcon} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes3Child7} alt="" src="/group-147.svg" />
      <img className={styles.solicitudes3Child8} alt="" src="/group-147.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.solicitudes3Child9} />
      <div className={styles.solicitudes3Child10} />
      <div className={styles.fechaOHora}>Fecha o hora</div>
      <div className={styles.fechaOHora1}>Fecha o hora</div>
      <div className={styles.fechaOHora2}>Fecha o hora</div>
      <div className={styles.solicitudes3Child11} />
      <div className={styles.solicitudes3Child12} />
      <div className={styles.solicitudes3Child13} />
      <img className={styles.solicitudes3Child14} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes3Child15} alt="" src="/group-180.svg" />
      <img className={styles.solicitudes3Child16} alt="" src="/group-180.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector6.svg" />
      <div className={styles.recibidas} onClick={onRecibidasTextClick}>
        Recibidas
      </div>
      <div className={styles.enviadas} onClick={onEnviadasTextClick}>
        Enviadas
      </div>
      <div className={styles.guardadas} onClick={onGuardadasTextClick}>
        Guardadas
      </div>
      <div className={styles.ocultas}>Ocultas</div>
      <div className={styles.ocultarLaContainer}>
        <p className={styles.ocultarLa}>
          ** Ocultar = La persona no verá que le enviaste la solicitud, pero si
          esta
        </p>
        <p className={styles.ocultarLa}>
          te envía una solicitud oculta, ambos se harán amigos.
        </p>
      </div>
      <img className={styles.solicitudes3Child17} alt="" src="/group-146.svg" />
    </div>
  );
};

export default Solicitudes3;
