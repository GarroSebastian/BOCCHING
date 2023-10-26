import React from "react";
import { SideBar } from "../../components/SideBar/SideBar";
import { Contendores } from "../../components/Contendores/Contendores";
import styles from "./style.module.css"; // Importa el archivo de estilo como "styles"

function MiPerfilGustos() {
    return (
        <div className={styles.miPerfilGustos}>
            <div className={styles.div2}>
            <div className={styles.tittle}>
                <div className={styles.textWrapper2}>Mi Perfil</div>
                <Contendores className={styles.contenedorInstance} />
            </div>
                <SideBar className={styles.image} />
            </div>
        </div>
        );
};

export default MiPerfilGustos