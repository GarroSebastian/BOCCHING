import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css"; // Importa las clases CSS desde el módulo

export const SettingsIcon = ({ status, statusDefaultClassName }) => {
return (
<>
    {status === "default" && (
    <img
        className={`${styles.settingsIconStatusDefault} ${statusDefaultClassName}`}
        alt="Status default"
        src="/BochSett1.svg"
    />
    )}

    {status === "select" && (
    <div className={`${styles.settingsIconStatusSelect} ${statusDefaultClassName}`}>
        <div className={styles.settingsIconSelect}>
        <div className={styles.rectangle} />
        <img className={styles.bochSett} alt="Boch sett" src="/BochSett2.svg" />
        </div>
    </div>
    )}
</>
);
};

SettingsIcon.propTypes = {
status: PropTypes.oneOf(["select", "default"]),
};
