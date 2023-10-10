import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mensajes2.module.css";

const Mensajes2 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  const onConversacinTextClick = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  return (
    <div className={styles.mensajes2}>
      <img
        className={styles.mensajes2Child}
        alt=""
        src="/rectangle-16.svg"
        onClick={onRectangleClick}
      />
      <div className={styles.mensajes2Item} />
      <div className={styles.mensajes2Inner} />
      <div className={styles.daDeLa}>Día de la conversación</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.ellipseDiv} />
      <img className={styles.groupIcon} alt="" src="/group-147.svg" />
      <div className={styles.mensajes2Child1} />
      <div className={styles.mensajes2Child2} />
      <img className={styles.mensajes2Child3} alt="" src="/group-140.svg" />
      <img className={styles.mensajes2Child4} alt="" src="/group-140.svg" />
      <div className={styles.mensajes2Child5} />
      <div className={styles.mensajes2Child6} />
      <div className={styles.mensajes2Child7} />
      <div className={styles.mensajes2Child8} />
      <b className={styles.nombre01}>Nombre 01</b>
      <b className={styles.nombre011}>Nombre 01</b>
      <div className={styles.mensaje00011}>Mensaje 0001.1</div>
      <div className={styles.mensaje00012}>Mensaje 0001.2</div>
      <div className={styles.mensaje00013}>Mensaje 0001.3</div>
      <div className={styles.mensaje00014}>Mensaje 0001.4</div>
      <div className={styles.hora}>Hora</div>
      <div className={styles.hora1}>Hora</div>
      <div className={styles.hora2}>Hora</div>
      <div className={styles.hora3}>Hora</div>
      <div className={styles.mensajes2Child9} />
      <div className={styles.mensajes2Child10} />
      <div className={styles.escribirMensaje}>Escribir mensaje</div>
      <div className={styles.mensajes}>Mensajes</div>
      <div className={styles.conversacin} onClick={onConversacinTextClick}>
        Conversación
      </div>
      <div className={styles.mensajes2Child11} />
      <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.mensajes2Child12} />
      <div className={styles.mensajes2Child13} />
      <div className={styles.mensajes2Child14} />
      <div className={styles.mensajes2Child15} />
      <div className={styles.mensajes2Child16} />
      <div className={styles.mensajes2Child17} />
      <div className={styles.mensajes2Child18} />
      <div className={styles.bsqueda}>Búsqueda</div>
      <div className={styles.mensajes2Child19} />
      <div className={styles.mensajes2Child20} />
      <div className={styles.mensajes2Child21} />
      <div className={styles.mensajes2Child22} />
      <div className={styles.mensajes2Child23} />
      <div className={styles.mensajes2Child24} />
      <b className={styles.nombre1}>Nombre 1</b>
      <b className={styles.nombre2}>Nombre 2</b>
      <b className={styles.nombre3}>Nombre 3</b>
      <b className={styles.nombre4}>Nombre 4</b>
      <b className={styles.nombre5}>Nombre 5</b>
      <b className={styles.nombre6}>Nombre 6</b>
      <div className={styles.mensaje0001}>Mensaje 0001</div>
      <div className={styles.mensaje0002}>Mensaje 0002</div>
      <div className={styles.mensaje0003}>Mensaje 0003</div>
      <div className={styles.mensaje0004}>Mensaje 0004</div>
      <div className={styles.mensaje0005}>Mensaje 0005</div>
      <div className={styles.mensaje0006}>Mensaje 0006</div>
      <div className={styles.horaOFecha}>hora o fecha</div>
      <div className={styles.horaOFecha1}>hora o fecha</div>
      <div className={styles.horaOFecha2}>hora o fecha</div>
      <div className={styles.horaOFecha3}>hora o fecha</div>
      <div className={styles.horaOFecha4}>hora o fecha</div>
      <div className={styles.horaOFecha5}>hora o fecha</div>
      <img className={styles.mensajes2Child25} alt="" src="/group-147.svg" />
      <img className={styles.mensajes2Child26} alt="" src="/group-147.svg" />
      <img className={styles.mensajes2Child27} alt="" src="/group-147.svg" />
      <img className={styles.mensajes2Child28} alt="" src="/group-147.svg" />
      <img className={styles.mensajes2Child29} alt="" src="/group-147.svg" />
      <img className={styles.mensajes2Child30} alt="" src="/group-147.svg" />
      <div className={styles.nombre11}>Nombre 1</div>
      <div className={styles.mensajes2Child31} />
      <img className={styles.vectorIcon1} alt="" src="/vector6.svg" />
      <img className={styles.mensajes2Child32} alt="" src="/group-133.svg" />
    </div>
  );
};

export default Mensajes2;
