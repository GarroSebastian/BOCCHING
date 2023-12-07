import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css"; // Importa las clases CSS desde el módulo

export const MessageIcon = ({ status, statusDefaultClassName }) => {
return (
<>
    {status === "default" && (
    <img
        className={`${styles.messageIconStatusDefault} ${statusDefaultClassName}`}
        alt="Status default"
        src="/statusdefaultMessage.png"
    />
    )}

    {status === "select" && (
    <div className={`${styles.messageIconStatusSelect} ${statusDefaultClassName}`}>
        <div className={styles.messageIconSelect}>
        <div className={styles.rectangle} />
        <img className={styles.bochMessa} alt="Boch messa" src="/BochMessa4.svg" />
        <img className={styles.img} alt="Boch messa" src="/BochMessa5.svg" />
        <img className={styles.bochMessa2} alt="Boch messa" src="/BochMessa6.svg" />
        </div>
    </div>
    )}
</>
);
};

MessageIcon.propTypes = {
status: PropTypes.oneOf(["select", "default"]),
};
