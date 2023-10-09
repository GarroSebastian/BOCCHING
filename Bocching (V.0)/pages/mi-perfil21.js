import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil21.module.css";

const MiPerfil21 = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil1");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onInformacinTextClick = useCallback(() => {
    router.push("/mi-perfil1");
  }, [router]);

  const onPrivacidadTextClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle11Click = useCallback(() => {
    router.push("/mi-perfil23");
  }, [router]);

  const onRectangle12Click = useCallback(() => {
    router.push("/mi-perfil22");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVectorClick = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onGroupIcon1Click = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  const onVectorIconClick = useCallback(() => {
    router.push("/buscar1");
  }, [router]);

  const onVectorIcon1Click = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onXMLID273IconClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  return (
    <div className={styles.miperfil21}>
      <img className={styles.miperfil21Child} alt="" src="/rectangle-161.svg" />
      <img
        className={styles.miperfil21Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.miperfil21Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <div className={styles.colecciones}>Colecciones</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.miperfil21Child1} />
      <img className={styles.recDerIcon} alt="" src="/rec-der1.svg" />
      <img className={styles.derechaIcon} alt="" src="/derecha3.svg" />
      <img className={styles.recDerIcon1} alt="" src="/rec-der1.svg" />
      <div className={styles.miperfil21Child2} />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.miperfil21Child3} />
      <div className={styles.miperfil21Child4} />
      <div className={styles.miperfil21Child5} />
      <div className={styles.miperfil21Child6} />
      <div className={styles.tipo}>Tipo</div>
      <div className={styles.subtipo}>Subtipo</div>
      <div className={styles.nombre}>Nombre</div>
      <div className={styles.afinidad}>Afinidad</div>
      <div className={styles.duracin}>Duración</div>
      <div className={styles.hobby}>Hobby</div>
      <div className={styles.hobby1}>Hobby</div>
      <div className={styles.hobby2}>Hobby</div>
      <div className={styles.hobby3}>Hobby</div>
      <div className={styles.xd}>xd</div>
      <div className={styles.xd1}>xd</div>
      <div className={styles.xd2}>xd</div>
      <div className={styles.xd3}>xd</div>
      <div className={styles.xd4}>xd</div>
      <div className={styles.xd5}>xd</div>
      <div className={styles.xd6}>xd</div>
      <div className={styles.xd7}>xd</div>
      <div className={styles.xd8}>xd</div>
      <div className={styles.xd9}>xd</div>
      <div className={styles.xd10}>xd</div>
      <div className={styles.xd11}>xd</div>
      <div className={styles.xd12}>xd</div>
      <div className={styles.xd13}>xd</div>
      <div className={styles.xd14}>xd</div>
      <div className={styles.xd15}>xd</div>
      <img className={styles.derechaIcon1} alt="" src="/derecha2.svg" />
      <div className={styles.miPerfil}>Mi Perfil</div>
      <div className={styles.informacin} onClick={onInformacinTextClick}>
        Información
      </div>
      <div className={styles.privacidad} onClick={onPrivacidadTextClick}>
        Privacidad
      </div>
      <div className={styles.misColecciones}>Mis Colecciones</div>
      <div className={styles.aquPodrsAgregar}>
        Aquí podrás agregar tus gustos personales, editarlos o eliminarlos
      </div>
      <div className={styles.miperfil21Child7} />
      <div className={styles.miperfil21Child8} onClick={onRectangle11Click} />
      <div className={styles.miperfil21Child9} onClick={onRectangle12Click} />
      <div className={styles.editar}>Editar</div>
      <div className={styles.aadir}>Añadir</div>
      <div className={styles.miperfil21Child10} />
      <img
        className={styles.miperfil21Child11}
        alt=""
        src="/group-194.svg"
        onClick={onGroupClick}
      />
      <img className={styles.miperfil21Child12} alt="" src="/group-195.svg" />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector22.svg"
        onClick={onVectorClick}
      />
      <img
        className={styles.miperfil21Child13}
        alt=""
        src="/group-197.svg"
        onClick={onGroupIcon1Click}
      />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector23.svg"
        onClick={onVectorIconClick}
      />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector24.svg"
        onClick={onVectorIcon1Click}
      />
      <img
        className={styles.xmlid273Icon}
        alt=""
        src="/xmlid-2731.svg"
        onClick={onXMLID273IconClick}
      />
    </div>
  );
};

export default MiPerfil21;
