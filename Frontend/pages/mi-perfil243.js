import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil243.module.css";

const MiPerfil243 = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onFrameContainer10Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  return (
    <div className={styles.miperfil243}>
      <div className={styles.igualdadDeDato}>Igualdad de dato</div>
      <div className={styles.miperfil243Child} />
      <div className={styles.miperfil243Item} onClick={onRectangle1Click} />
      <div className={styles.miperfil243Inner} onClick={onRectangle2Click} />
      <div className={styles.cancelar}>Cancelar</div>
      <div className={styles.continuar}>Continuar</div>
      <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
      <div className={styles.frameParent}>
        <div className={styles.id1HobbieParent}>
          <div className={styles.id1Hobbie}>Id_1: Hobbie</div>
          <img className={styles.frameChild} alt="" src="/group-105.svg" />
        </div>
        <div className={styles.id1HobbieParent}>
          <div className={styles.id1Hobbie}>Id_2: Hobbie</div>
          <img className={styles.frameChild} alt="" src="/group-104.svg" />
        </div>
        <div className={styles.id1HobbieParent}>
          <div className={styles.id1Hobbie}>Id_3: Hobbie</div>
          <img className={styles.frameChild} alt="" src="/group-103.svg" />
        </div>
        <div className={styles.id1HobbieParent}>
          <div className={styles.id1Hobbie}>Id_4: Hobbie</div>
          <img className={styles.frameChild} alt="" src="/group-104.svg" />
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.coleecciones}>Coleecciones</div>
      <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
      <div className={styles.miperfil243Child1} />
      <div className={styles.frameGroup}>
        <div className={styles.universidadParent}>
          <div className={styles.id1Hobbie}>Universidad</div>
          <img className={styles.frameChild} alt="" src="/group-114.svg" />
        </div>
        <div className={styles.facultadParent}>
          <div className={styles.id1Hobbie}>Facultad</div>
          <img className={styles.frameChild} alt="" src="/group-103.svg" />
        </div>
        <div className={styles.especialidadParent}>
          <div className={styles.id1Hobbie}>Especialidad</div>
          <img className={styles.frameChild} alt="" src="/group-103.svg" />
        </div>
        <div className={styles.gneroParent}>
          <div className={styles.id1Hobbie}>Género</div>
          <img className={styles.frameChild} alt="" src="/group-111.svg" />
        </div>
      </div>
      <div className={styles.txt01Parent}>
        <div className={styles.id1Hobbie}>Bocching</div>
        <div
          className={styles.rectangleWrapper}
          onClick={onFrameContainer10Click}
        >
          <div className={styles.frameChild5} />
        </div>
      </div>
    </div>
  );
};

export default MiPerfil243;
