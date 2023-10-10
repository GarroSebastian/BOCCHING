import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./mi-perfil1.module.css";

const MiPerfil1 = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onRectangle1Click = useCallback(() => {
    router.push("/mi-perfil21");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/menu");
  }, [router]);

  const onVector2Click = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onGroupIconClick = useCallback(() => {
    router.push("/mensajes1");
  }, [router]);

  const onVectorIcon3Click = useCallback(() => {
    router.push("/buscar1");
  }, [router]);

  const onVectorIcon4Click = useCallback(() => {
    router.push("/solicitudes1");
  }, [router]);

  const onXMLID273IconClick = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);

  return (
    <div className={styles.miperfil1}>
      <img
        className={styles.miperfil1Child}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangleClick}
      />
      <img
        className={styles.miperfil1Item}
        alt=""
        src="/rectangle-29.svg"
        onClick={onRectangle1Click}
      />
      <div className={styles.colecciones}>Colecciones</div>
      <img className={styles.miperfil1Inner} alt="" src="/rectangle-161.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.miperfil1Child1} />
      <div className={styles.miperfil1Child2} />
      <div className={styles.miperfil1Child3} />
      <div className={styles.miPerfil}>Mi Perfil</div>
      <div className={styles.informacin}>Información</div>
      <div className={styles.privacidad}>Privacidad</div>
      <div className={styles.general}>General</div>
      <div className={styles.correoInstitucional}>Correo Institucional:</div>
      <div className={styles.ejemplodecorreocorreoejemplo}>
        ejemplodecorreo@correoejemplo.com
      </div>
      <div className={styles.cdigoUniversitario}>Código Universitario:</div>
      <div className={styles.codigouniversitarioejemplo}>
        codigouniversitarioejemplo
      </div>
      <div className={styles.bchadri888}>BchAdri888</div>
      <div className={styles.idbocching}>IdBocching:</div>
      <div className={styles.edadejemploEnAos}>Edadejemplo en años</div>
      <div className={styles.edad}>Edad:</div>
      <div className={styles.estaInformacinNo}>
        **Esta información no se puede modificar
      </div>
      <div className={styles.nombres}>Nombres:</div>
      <div className={styles.nombre1Nombre}>Nombre 1 Nombre 2</div>
      <div className={styles.miperfil1Child4} />
      <div className={styles.apellidos}>Apellidos:</div>
      <div className={styles.apellido1Apellido}>Apellido 1 Apellido 2</div>
      <div className={styles.miperfil1Child5} />
      <div className={styles.apodo}>Apodo:</div>
      <div className={styles.apodoEjemplo}>Apodo ejemplo</div>
      <div className={styles.miperfil1Child6} />
      <div className={styles.gnero}>Género:</div>
      <div className={styles.gneroEjemploParent}>
        <div className={styles.gneroEjemplo}>Género ejemplo</div>
        <img className={styles.frameChild} alt="" src="/polygon-5.svg" />
      </div>
      <div className={styles.carrera}>Carrera:</div>
      <img className={styles.polygonIcon} alt="" src="/polygon-21.svg" />
      <div className={styles.carreraEjemplo}>Carrera ejemplo</div>
      <div className={styles.miperfil1Child7} />
      <div className={styles.facultad}>Facultad:</div>
      <img className={styles.miperfil1Child8} alt="" src="/polygon-3.svg" />
      <div className={styles.facultadEjemplo}>Facultad ejemplo</div>
      <div className={styles.miperfil1Child9} />
      <div className={styles.especialidad}>Especialidad</div>
      <div className={styles.especialidadEjemploParent}>
        <div className={styles.gneroEjemplo}>Especialidad ejemplo</div>
        <img className={styles.frameItem} alt="" src="/polygon-21.svg" />
      </div>
      <div className={styles.descripccin}>Descripcción</div>
      <div className={styles.descripcinAModoContainer}>
        <p className={styles.descripcinAModo}>
          Descripción a modo de ejemplo que
        </p>
        <p className={styles.descripcinAModo}>el usuario podrá escribir.</p>
      </div>
      <div className={styles.miperfil1Child10} />
      <div className={styles.miperfil1Child11} />
      <div className={styles.ellipseDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector25.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector26.svg" />
      <div className={styles.nombreapodo}>Nombre/Apodo</div>
      <img className={styles.miperfil1Child12} alt="" src="/polygon-6.svg" />
      <div className={styles.miperfil1Child13} />
      <img className={styles.vectorIcon2} alt="" src="/vector27.svg" />
      <img className={styles.vectorIcon3} alt="" src="/vector28.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector29.svg" />
      <div className={styles.miperfil1Child14} />
      <img
        className={styles.groupIcon}
        alt=""
        src="/group-194.svg"
        onClick={onGroupClick}
      />
      <img className={styles.miperfil1Child15} alt="" src="/group-1951.svg" />
      <img
        className={styles.vectorIcon5}
        alt=""
        src="/vector17.svg"
        onClick={onVector2Click}
      />
      <img
        className={styles.miperfil1Child16}
        alt=""
        src="/group-197.svg"
        onClick={onGroupIconClick}
      />
      <img
        className={styles.vectorIcon6}
        alt=""
        src="/vector30.svg"
        onClick={onVectorIcon3Click}
      />
      <img
        className={styles.vectorIcon7}
        alt=""
        src="/vector31.svg"
        onClick={onVectorIcon4Click}
      />
      <img
        className={styles.xmlid273Icon}
        alt=""
        src="/xmlid-2732.svg"
        onClick={onXMLID273IconClick}
      />
    </div>
  );
};

export default MiPerfil1;
