import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css"; // Importa las clases CSS desde el módulo

export const RequestIcon = ({ status, statusDefaultClassName }) => {
return (
<>
    {status === "default" && (
    <img
        className={`${styles.requestIconStatusDefault} ${statusDefaultClassName}`}
        alt="Status default"
        src="/BochRequ1.svg"
    />
    )}

    {status === "select" && (
    <div className={`${styles.requestIconStatusSelect} ${statusDefaultClassName}`}>
        <div className={styles.requestIconSelect}>
        <div className={styles.rectangle} />
        <img className={styles.bochRequ} alt="Boch requ" src="/BochRequ2.svg" />
        </div>
    </div>
    )}
</>
);
};

RequestIcon.propTypes = {
status: PropTypes.oneOf(["select", "default"]),
};
