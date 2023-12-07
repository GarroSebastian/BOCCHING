import React from "react";
import { SubpestaA } from "./SubPestañas/SubPestañas";
import styles from "./style.module.css"; // Importa el archivo de estilo como "styles"

export const Contendores = () => {
return (
<div className={styles.contenedor}>
    <div className={styles.pestaAs}>
    <SubpestaA className={styles.subInformacion} state="default" text="Información" />
    <SubpestaA className={styles.subColeccion} state="select" text="Gustos" />
    <SubpestaA className={styles.subPrivacidad} state="default" text="Privacidad" />
    </div>
    <div className={styles.finalConteiner}>
    <div className={styles.conteiner}>
        <div className={styles.rectangle} />
    </div>
    <div className={styles.textoFijo}>
        <div className={styles.textWrapper}>Mis Gustos</div>
        <p className={styles.div}>Aquí podrás agregar tus gustos personales, editarlos o eliminarlos</p>
        <div className={styles.rectangle2} />
        <p>Aquí creen una tabla HTML</p>
    </div>
    </div>
</div>
);
};
