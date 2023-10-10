import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Inicio = () => {
  const router = useRouter();

  const onFrameContainer10Click = useCallback(() => {
    router.push("/iniciar-sesion");
  }, [router]);

  const onCrearCuentaTextClick = useCallback(() => {
    router.push("/crear-cuenta");
  }, [router]);

  return (
    <div className={styles.inicio}>
      <div className={styles.quEsBocching}>¿Qué es Bocching?</div>
      <div className={styles.desarrolladores}>Desarrolladores</div>
      <div className={styles.bocchingEsUnContainer}>
        <p className={styles.bocchingEsUn}>
          Bocching es un novedoso aplicativo que busca agilizar los procesos
        </p>
        <p className={styles.bocchingEsUn}>
          sociales de sus usuarios, gracias a sus diversas funcionalidades.
        </p>
        <p className={styles.bocchingEsUn}>&nbsp;</p>
        <p className={styles.bocchingEsUn}>
          Actualmente disponible para los estudiantes de la Universidad de Lima.
        </p>
      </div>
      <div className={styles.inicioChild} />
      <div className={styles.inicioItem} />
      <div className={styles.footer}>
        <div className={styles.byTeambocching}>By: TeamBocching</div>
      </div>
      <img
        className={styles.transhumansExperimentsIcon}
        alt=""
        src="/transhumans-experiments@2x.png"
      />
      <div className={styles.frameParent}>
        <div className={styles.adrianParent}>
          <div className={styles.adrian}>Adrián</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
        <div className={styles.adrianParent}>
          <div className={styles.adrian}>Rodrigo</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
        <div className={styles.adrianParent}>
          <div className={styles.adrian}>Camayo</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
        <div className={styles.adrianParent}>
          <div className={styles.adrian}>Garro</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
        <div className={styles.adrianParent}>
          <div className={styles.adrian}>Aaron</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.adrianParent}>
          <div className={styles.ivan}>Iván</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
        <div className={styles.adrianParent}>
          <div className={styles.adrian}>George</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
        <div className={styles.adrianParent}>
          <div className={styles.profesores}>Profesores</div>
          <div className={styles.frameChild} />
          <img className={styles.userIcon} alt="" src="/user3.svg" />
        </div>
      </div>
      <div className={styles.inicioInner} />
      <div className={styles.icons} />
      <div
        className={styles.iniciarSesinWrapper}
        onClick={onFrameContainer10Click}
      >
        <div className={styles.byTeambocching}>Iniciar Sesión</div>
      </div>
      <div className={styles.crearCuenta} onClick={onCrearCuentaTextClick}>
        Crear cuenta
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.logo}>
        <div className={styles.logoChild} />
        <img className={styles.vectorIcon} alt="" src="/vector39.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector39.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector40.svg" />
        <img className={styles.vectorIcon3} alt="" src="/vector41.svg" />
        <div className={styles.txt01}>Bocching</div>
      </div>
    </div>
  );
};

export default Inicio;
