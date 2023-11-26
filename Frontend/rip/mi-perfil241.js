import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil241.module.css";

const MiPerfil241 = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil21");
  }, [router]);

  const onIconClick = useCallback(() => {
    router.push("/mi-perfil242");
  }, [router]);

  const onIcon1Click = useCallback(() => {
    router.push("/mi-perfil243");
  }, [router]);

  const onVectorClick = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onGroupIconClick = useCallback(() => {
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
    <div className={styles.miperfil241}>
      <img
        className={styles.miperfil241Child}
        alt=""
        src="/rectangle-161.svg"
      />
      <img
        className={styles.miperfil241Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.miperfil241Inner}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle2Click}
      />
      <div className={styles.colecciones} onClick={onRectangle2Click}>Colecciones</div>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.transhumansReflectingIcon}
        alt=""
        src="/transhumans-reflecting@2x.png"
      />
      <div className={styles.miPerfil}>Mi Perfil</div>
      <div className={styles.informacin} onClick={onRectangle1Click}>Información</div>
      <div className={styles.privacidad}>Privacidad</div>
      <div className={styles.general}>General</div>
      <div className={styles.avanzando}>Avanzando</div>
      <div className={styles.miperfil241Child1} />
      <div className={styles.miperfil241Child2} />
      <div className={styles.soloAmigos}>Solo Amigos</div>
      <div className={styles.igualdadDeDato}>Igualdad de dato</div>
      <div className={styles.igualdadDeDato1}>
        ** Igualdad de dato = Si tu dato coincide con el de otra persona, este
        podrá visualizarlo, de lo contario no podrá.
      </div>
      <div className={styles.seleccionaLosApartados}>
        Selecciona los apartados que podrán ver solos tus amigos
      </div>
      <div className={styles.seleccionaLosApartados1}>
        Selecciona los apartados que serán visualizados
      </div>
      <img
        className={styles.icon}
        alt=""
        src="/icon.svg"
        onClick={onIconClick}
      />
      <img
        className={styles.icon1}
        alt=""
        src="/icon.svg"
        onClick={onIcon1Click}
      />
      <div className={styles.miperfil241Child3} />
      <img className={styles.groupIcon} alt="" src="/group-194.svg" />
      <img className={styles.miperfil241Child4} alt="" src="/group-195.svg" />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector22.svg"
        onClick={onVectorClick}
      />
      <img
        className={styles.miperfil241Child5}
        alt=""
        src="/group-197.svg"
        onClick={onGroupIconClick}
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

export default MiPerfil241;
