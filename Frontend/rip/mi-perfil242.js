import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil242.module.css";

const MiPerfil242 = () => {
  const router = useRouter();

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onFrameContainer15Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  return (
    <div className={styles.miperfil242}>
      <div className={styles.soloAmigos}>Solo Amigos</div>
      <div className={styles.miperfil242Child} />
      <div className={styles.miperfil242Item} onClick={onRectangle1Click} />
      <div className={styles.miperfil242Inner} onClick={onRectangle2Click} />
      <div className={styles.cancelar}>Cancelar</div>
      <div className={styles.continuar}>Continuar</div>
      <img className={styles.layer1Icon} alt="" src="/layer-11.svg" />
      <div className={styles.frameParent}>
        <div className={styles.perfilParent}>
          <div className={styles.perfil}>{`Perfil `}</div>
          <img className={styles.frameChild} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.nombresParent}>
          <div className={styles.perfil}>Nombres</div>
          <img className={styles.frameChild} alt="" src="/group-76.svg" />
        </div>
        <div className={styles.apellidosParent}>
          <div className={styles.perfil}>Apellidos</div>
          <img className={styles.frameChild} alt="" src="/group-76.svg" />
        </div>
        <div className={styles.apodoParent}>
          <div className={styles.perfil}>Apodo</div>
          <img className={styles.frameChild} alt="" src="/group-76.svg" />
        </div>
        <div className={styles.universidadParent}>
          <div className={styles.universidad}>Universidad</div>
          <img className={styles.frameChild1} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.facultadParent}>
          <div className={styles.perfil}>Facultad</div>
          <img className={styles.frameChild} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.especialidadParent}>
          <div className={styles.perfil}>Especialidad</div>
          <img className={styles.frameChild} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.fotoParent}>
          <div className={styles.perfil}>Foto</div>
          <img className={styles.frameChild} alt="" src="/group-76.svg" />
        </div>
        <div className={styles.descripcinParent}>
          <div className={styles.perfil}>Descripción</div>
          <img className={styles.frameChild} alt="" src="/group-76.svg" />
        </div>
        <div className={styles.generoParent}>
          <div className={styles.perfil}>Genero</div>
          <img className={styles.frameChild} alt="" src="/group-84.svg" />
        </div>
        <div className={styles.coleccionesParent}>
          <div className={styles.perfil}>Colecciones</div>
          <img className={styles.frameChild} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.celularParent}>
          <div className={styles.perfil}>Celular</div>
          <img className={styles.frameChild} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.universidadParent}>
          <div className={styles.universidad}>Mensajes</div>
          <img className={styles.frameChild1} alt="" src="/group-74.svg" />
        </div>
        <div className={styles.solicitudesParent}>
          <div className={styles.perfil}>Solicitudes</div>
          <img className={styles.frameChild} alt="" src="/group-76.svg" />
        </div>
      </div>
      <div className={styles.txt01Parent}>
        <div className={styles.perfil}>Bocching</div>
        <div
          className={styles.rectangleWrapper}
          onClick={onFrameContainer15Click}
        >
          <div className={styles.rectangleDiv} />
        </div>
      </div>
    </div>
  );
};

export default MiPerfil242;
