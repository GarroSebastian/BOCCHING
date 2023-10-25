import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css"; // Importa las clases CSS desde el módulo

export const SearchIcon = ({ status, statusDefaultClassName }) => {
return (
<>
    {status === "default" && (
    <img
        className={`${styles.searchIconStatusDefault} ${statusDefaultClassName}`}
        alt="Status default"
        src="/BocchLook1.svg"
    />
    )}

    {status === "select" && (
    <div className={`${styles.searchIconStatusSelect} ${statusDefaultClassName}`}>
        <div className={styles.searchIconSelect}>
        <div className={styles.rectangle} />
        <img className={styles.bocchLook} alt="Bocch look" src="/BocchLook2.svg" />
        </div>
    </div>
    )}
</>
);
};

SearchIcon.propTypes = {
status: PropTypes.oneOf(["select", "default"]),
};
