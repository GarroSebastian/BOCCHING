import { useCallback } from "react";
import { useRouter } from "next/router";
import { Zoom } from "../extra/zoom.js"
import styles from "./buscar1.module.css";
import Lateral from "../components/lateral.js"

const Buscar1 = () => {
  Zoom()
  const router = useRouter();

  const onRectangle9Click = useCallback(() => {
    router.push("/buscar21");
  }, [router]);

  return (
    <div id="container">
    <div className={styles.buscar1}>
      <img className={styles.buscar1Child} alt="" src="/rectangle-16.svg" />
      <div className={styles.buscar1Item} />
      <div className={styles.buscar}>Buscar</div>
      <div className={styles.manual}>Manual</div>
      <div className={styles.filtros}>Filtros</div>
      <b className={styles.categoraDeFiltro}>Categoría de filtro:</b>
      <b className={styles.categoraDeFiltro1}>Categoría de filtro:</b>
      <b className={styles.categoraDeFiltro2}>Categoría de filtro:</b>
      <div className={styles.filtro1}>Filtro 1</div>
      <div className={styles.filtro11}>Filtro 1</div>
      <div className={styles.filtro12}>Filtro 1</div>
      <div className={styles.filtro13}>Filtro 1</div>
      <div className={styles.filtro2}>Filtro 2</div>
      <div className={styles.filtro21}>Filtro 2</div>
      <div className={styles.buscar1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.buscar1Child1} />
      <div className={styles.buscar1Child2} />
      <div className={styles.buscar1Child3} />
      <div className={styles.buscar1Child4} />
      <div className={styles.buscar1Child5} />
      <div className={styles.buscar1Child6} onClick={onRectangle9Click} />
      <div className={styles.busquedaIdbocchingnombreco}>
        Busqueda: IdBocching/Nombre/Codigo
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.noHaRealizadoNingunaBsque}>
        <p className={styles.noHa}>No ha</p>
        <p className={styles.noHa}>realizado</p>
        <p className={styles.noHa}>ninguna</p>
        <p className={styles.noHa}>búsqueda</p>
      </div>
      <img
        className={styles.transhumansPuppyIcon}
        alt=""
        src="/transhumans-puppy@2x.png"
      />
    </div>
    <Lateral pantalla="Buscar"></Lateral>
    </div>
  );
};

export default Buscar1;
