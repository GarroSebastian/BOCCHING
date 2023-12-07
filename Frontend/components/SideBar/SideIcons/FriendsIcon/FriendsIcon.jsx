import PropTypes from "prop-types";
import React from "react";
import styles from "./style.module.css"; // Importa las clases CSS desde el módulo

export const FriendsIcon = ({ status, statusDefaultClassName }) => {
return (
<>
    {status === "default" && (
    <img
        className={`${styles.friendsIconStatusDefault} ${statusDefaultClassName}`}
        alt="Icon"
        src="/statusdefaultFriends.png"
    />
    )}

    {status === "select" && (
    <div className={`${styles.friendsIconStatusSelect} ${statusDefaultClassName}`}>
        <div className={styles.friendsIconSelect}>
        <div className={styles.rectangle} />
        <img className={styles.bochFriendIcon} alt="Icon" src="/BochFriendIcon2.svg" />
        </div>
    </div>
    )}
</>
);
};

FriendsIcon.propTypes = {
status: PropTypes.oneOf(["select", "default"]),
};
