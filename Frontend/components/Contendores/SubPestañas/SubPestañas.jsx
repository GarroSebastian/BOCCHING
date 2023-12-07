import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css"; // Importa el archivo de estilo como "styles"

export const SubpestaA = ({ text = "Text", state, className }) => {
return (
<div className={`${styles.subpestaA} ${styles[state]} ${className}`}> {/* Utiliza las clases definidas en el archivo de estilo */}
    <div className={styles.text}>{text}</div>
</div>
);
};

SubpestaA.propTypes = {
text: PropTypes.string,
state: PropTypes.oneOf(["select", "default"]),
};
