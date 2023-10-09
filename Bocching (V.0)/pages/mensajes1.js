import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mensajes1.module.css";

const Mensajes1 = () => {
  const router = useRouter();

  const onRectangle4Click = useCallback(() => {
    router.push("/mensajes2");
  }, [router]);

  const onEllipseClick = useCallback(() => {
    router.push("/mensajes2");
  }, [router]);

  const onNombre1TextClick = useCallback(() => {
    router.push("/mensajes2");
  }, [router]);

  const onMensaje0001TextClick = useCallback(() => {
    router.push("/mensajes2");
  }, [router]);

  const onHoraOFechaClick = useCallback(() => {
    router.push("/mensajes2");
  }, [router]);

  const onGroupIconClick = useCallback(() => {
    router.push("/mensajes2");
  }, [router]);

  const onEllipse6Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorIcon1Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorIcon2Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorIcon3Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorIcon4Click = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onGroupIcon6Click = useCallback(() => {
    router.push("/mi-perfil1");
  }, [router]);

  const onVectorClick = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onVectorIcon5Click = useCallback(() => {
    router.push("/buscar1");
  }, [router]);

  const onVectorIcon6Click = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onXMLID273IconClick = useCallback(() => {
    router.push("/mi-perfil21");
  }, [router]);

  return (
    <div className={styles.mensajes1}>
      <img className={styles.mensajes1Child} alt="" src="/rectangle-16.svg" />
      <div className={styles.mensajes1Item} />
      <div className={styles.mensajes}>Mensajes</div>
      <div className={styles.conversacin}>Conversación</div>
      <div className={styles.mensajes1Inner} />
      <img className={styles.vectorIcon} alt="" src="/vector12.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.rectangleDiv} />
      <div className={styles.mensajes1Child1} onClick={onRectangle4Click} />
      <div className={styles.mensajes1Child2} />
      <div className={styles.mensajes1Child3} />
      <div className={styles.mensajes1Child4} />
      <div className={styles.mensajes1Child5} />
      <div className={styles.mensajes1Child6} />
      <div className={styles.bsqueda}>Búsqueda</div>
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <div className={styles.mensajes1Child7} />
      <div className={styles.mensajes1Child8} />
      <div className={styles.mensajes1Child9} />
      <div className={styles.mensajes1Child10} />
      <div className={styles.mensajes1Child11} />
      <b className={styles.nombre1} onClick={onNombre1TextClick}>
        Nombre 1
      </b>
      <b className={styles.nombre2}>Nombre 2</b>
      <b className={styles.nombre3}>Nombre 3</b>
      <b className={styles.nombre4}>Nombre 4</b>
      <b className={styles.nombre5}>Nombre 5</b>
      <b className={styles.nombre6}>Nombre 6</b>
      <div className={styles.mensaje0001} onClick={onMensaje0001TextClick}>
        Mensaje 0001
      </div>
      <div className={styles.mensaje0002}>Mensaje 0002</div>
      <div className={styles.mensaje0003}>Mensaje 0003</div>
      <div className={styles.mensaje0004}>Mensaje 0004</div>
      <div className={styles.mensaje0005}>Mensaje 0005</div>
      <div className={styles.mensaje0006}>Mensaje 0006</div>
      <div className={styles.horaOFecha} onClick={onHoraOFechaClick}>
        hora o fecha
      </div>
      <div className={styles.horaOFecha1}>hora o fecha</div>
      <div className={styles.horaOFecha2}>hora o fecha</div>
      <div className={styles.horaOFecha3}>hora o fecha</div>
      <div className={styles.horaOFecha4}>hora o fecha</div>
      <div className={styles.horaOFecha5}>hora o fecha</div>
      <div className={styles.seleccioneUnaConversacin}>
        <p className={styles.seleccioneUna}>Seleccione una</p>
        <p className={styles.seleccioneUna}>conversación</p>
      </div>
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-119.svg"
        onClick={onGroupIconClick}
      />
      <img className={styles.mensajes1Child12} alt="" src="/group-119.svg" />
      <img className={styles.mensajes1Child13} alt="" src="/group-119.svg" />
      <img className={styles.mensajes1Child14} alt="" src="/group-119.svg" />
      <img className={styles.mensajes1Child15} alt="" src="/group-119.svg" />
      <img className={styles.mensajes1Child16} alt="" src="/group-119.svg" />
      <img
        className={styles.transhumansGrowthIcon}
        alt=""
        src="/transhumans-growth@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} onClick={onEllipse6Click} />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector13.svg"
          onClick={onVectorIcon1Click}
        />
        <img
          className={styles.vectorIcon2}
          alt=""
          src="/vector14.svg"
          onClick={onVectorIcon2Click}
        />
        <img
          className={styles.vectorIcon3}
          alt=""
          src="/vector15.svg"
          onClick={onVectorIcon3Click}
        />
        <img
          className={styles.vectorIcon4}
          alt=""
          src="/vector16.svg"
          onClick={onVectorIcon4Click}
        />
        <img
          className={styles.groupInner}
          alt=""
          src="/group-1191.svg"
          onClick={onGroupIcon6Click}
        />
        <img
          className={styles.vectorIcon5}
          alt=""
          src="/vector17.svg"
          onClick={onVectorClick}
        />
        <img
          className={styles.vectorIcon6}
          alt=""
          src="/vector18.svg"
          onClick={onVectorIcon5Click}
        />
        <img
          className={styles.vectorIcon7}
          alt=""
          src="/vector19.svg"
          onClick={onVectorIcon6Click}
        />
        <img
          className={styles.xmlid273Icon}
          alt=""
          src="/xmlid-273.svg"
          onClick={onXMLID273IconClick}
        />
        <img className={styles.groupChild1} alt="" src="/group-129.svg" />
      </div>
    </div>
  );
};

export default Mensajes1;
