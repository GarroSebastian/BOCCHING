import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./menu.module.css";
import { Zoom } from "../extra/zoom.js"
import React, { useState, useEffect } from 'react';
import SolicitudApi from "../api/solicitud.js";
const Menu = () => {
  Zoom()
  const router = useRouter();
  const [cont, setCont] = useState(0);

  const onFrameContainerClick = useCallback(() => {
    router.push("/mi-perfil");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/amistades1");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/mensajes");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/buscar1");
  }, [router]);

  const onFrameContainer4Click = useCallback(() => {
    router.push("/solicitudes");
  }, [router]);

  const onFrameContainer5Click = useCallback(() => {
    router.push("/configuracin11");
  }, [router]);
  const solis = async () => {
    try {
      const solic = await SolicitudApi.SolicitudesRecibidasUsuario(window.localStorage.token);
      let count = 0;
      console.log(solic)
      for (let i = 0; i < solic.data.length; i++) {
        if (solic.data[i].viewed === false) {
          count++;
        }
      }
      setCont(count);
      console.log
    } catch (error) {
      console.error('Error fetching solicitud data', error);
    }
  };

  useEffect(() => {
    solis();
  }, []); // Se ejecuta una vez al montar el componente
  return (
    <div id='container'>
      <div className={styles.menu}>
        <img className={styles.menuChild} alt="" src="/rectangle-13.svg" />
        <div className={styles.menuItem} />
        <div className={styles.bocching}>BOCCHING</div>
        <div className={styles.menuInner} />
        <div className={styles.rectangleParent} onClick={onFrameContainerClick}>
          <div className={styles.frameChild} />
          <div className={styles.miPerfil}>Mi Perfil</div>
          <div className={styles.frameItem} />
          <img className={styles.userIcon} alt="" src="/user.svg" />
        </div>
        <div className={styles.rectangleGroup} onClick={onFrameContainer1Click}>
          <div className={styles.frameInner} />
          <div className={styles.miPerfil}>Amistades</div>
          <div className={styles.ellipseDiv} />
          <img className={styles.vectorIcon} alt="" src="/vector34.svg" />
        </div>
        <div
          className={styles.rectangleContainer}
          onClick={onFrameContainer2Click}
        >
          <div className={styles.frameInner} />
          <div className={styles.miPerfil}>Mensajes</div>
          <div className={styles.frameChild1} />
          <img className={styles.vectorIcon} alt="" src="/group-16.svg" />
        </div>
        <div className={styles.frameDiv} onClick={onFrameContainer3Click}>
          <div className={styles.frameChild2} />
          <div className={styles.buscar}>Buscar</div>
          <div className={styles.frameChild3} />
          <img className={styles.vectorIcon} alt="" src="/vector32.svg" />
        </div>
        <div className={styles.rectangleParent1} onClick={onFrameContainer4Click}>
          <div className={styles.frameChild4} />
          <div className={styles.miPerfil}>Solicitudes</div>
          <div className={styles.frameChild5} />
          <img className={styles.vectorIcon1} alt="" src="/vector33.svg" />
          {cont > 0 && (
            <span className={styles.contBadge}>{cont}</span>
          )}
        </div>
        <div className={styles.rectangleParent2} onClick={onFrameContainer5Click}>
          <div className={styles.frameChild} />
          <div className={styles.miPerfil}>Configuración</div>
          <div className={styles.frameChild7} />
          <img className={styles.xmlid273Icon} alt="" src="/xmlid-2733.svg" />
        </div>
        <div className={styles.menuChild1} />
        
        <img className={styles.vectorIcon3} alt="" src="/vector13.svg" />
        <img className={styles.vectorIcon4} alt="" src="/vector14.svg" />
        <img className={styles.vectorIcon5} alt="" src="/vector15.svg" />
        <img className={styles.vectorIcon6} alt="" src="/vector16.svg" />
        <img
          className={styles.transhumansAstroIcon}
          alt=""
          src="/transhumans-astro@2x.png"
        />
      </div>
    </div>
  );
};

export default Menu;