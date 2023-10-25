import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css";

export const PerfilIcon = ({ status, className }) => {
    return (
    <div className={`${styles["perfil-icon"]} ${styles[status]} ${className}`}>
        {status === "default" && (
        <img className={styles["icon-default"]} alt="Icon default" src="/IconDefault.png" />
        )}

        {status === "select" && (
        <div className={styles["icon-select"]}>
            <div className={styles["rectangle"]} />
            <img className={styles["per"]} alt="Per" src="/per3.svg" />
            <img className={styles["img"]} alt="Per" src="/per4.svg" />
        </div>
        )}
    </div>
);
};

PerfilIcon.propTypes = {
status: PropTypes.oneOf(["select", "default"]),
};
