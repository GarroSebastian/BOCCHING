import React from "react";
import styles from "./style.module.css"; // Importa tus estilos desde el archivo module CSS

export const BocchingLogo = () => {
    return (
    <div className={styles["bocching-logo"]}>
        <div className={styles["boch-logo"]} />
        <img className={styles["img"]} alt="Boch logo" src="/bochLogo2.svg" />
        <img className={styles["boch-logo-2"]} alt="Boch logo" src="/bochLogo3.svg" />
        <img className={styles["boch-logo-3"]} alt="Boch logo" src="/bochLogo4.svg" />
        <img className={styles["boch-logo-4"]} alt="Boch logo" src="/bochLogo5.svg" />
    </div>
    );
};

