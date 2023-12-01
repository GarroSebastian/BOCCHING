import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./lateral.module.css";
import SolicitudApi from "../api/solicitud";
import React, { useState, useEffect } from 'react';

const Lateral = (props) => {
    const {pantalla} = props;
    const [cont, setCont] = useState(0);
    
    const router = useRouter();
    
    const onGroupClick = useCallback(() => {
        router.push("/menu");
    }, [router]);

    const onVector2Click = useCallback(() => {
        router.push("/amistades1");
    }, [router]);

    const onGroupIconClick = useCallback(() => {
        router.push("/mensajes");
    }, [router]);
    
    const onVectorIcon3Click = useCallback(() => {
    router.push("/buscar1");
    }, [router]);

    const onVectorIcon4Click = useCallback(() => {
    router.push("/solicitudes");
    }, [router]);

    const onXMLID273IconClick = useCallback(() => {
    router.push("/configuracin11");
    }, [router]);

    const solis = async () => {
        try {
          const solic = await SolicitudApi.SolicitudesRecibidasUsuario(window.localStorage.token);
          let count = 0;
          for (let i = 0; i < solic.data.length; i++) {
            if (solic.data[i].viewed === false) {
              count++;
            }
          }
          setCont(count);
        } catch (error) {
          console.error('Error fetching solicitud data', error);
        }
      };

      useEffect(() => {
        solis();
      }, []); // Se ejecuta una vez al montar el componente



    return(
        <div className={styles.menu}>
            <div className={styles.miperfil1Child14} />
            <img
            className={styles.groupIcon}
            alt=""
            src="/group-194.svg"
            onClick={onGroupClick}
            />
            <img className={styles.miperfil1Child15} alt="" src="/group-1951.svg" />
            {pantalla!="Amistades" &&
                <img className={styles.amistades} alt="" src="/vector17.svg" onClick={onVector2Click}/>
            }
            {pantalla!="Mensajes" &&
                <img className={styles.mensajes} alt="" src="/group-197.svg" onClick={onGroupIconClick}/>
            }
            {pantalla!="Buscar" &&
                <img className={styles.buscar} alt="" src="/vector30.svg" onClick={onVectorIcon3Click}/>
            }
            {pantalla !== "Solicitudes" && (
                <div className={styles.solicitudesContainer}>
                    <img
                        className={styles.solicitudes}
                        alt=""
                        src="/vector31.svg"
                        onClick={onVectorIcon4Click}
                    />
                    {cont > 0 && (
                        <span className={styles.contBadge}>{cont}</span>
                    )}
                </div>
            )}
            {pantalla !== "Configuracion" && (<img
            className={styles.configuracion}
            alt=""
            src="/xmlid-2732.svg"
            onClick={onXMLID273IconClick}
            />)}
            
        </div>
    )
}

export default Lateral;