import React from "react";
import { BocchingLogo } from "./SideIcons/BocchingLogo/BocchingLogo";
import { PerfilIcon } from "./SideIcons/PerfilIcon/PerfilIcon";
import { FriendsIcon } from "./SideIcons/FriendsIcon/FriendsIcon";
import { MessageIcon } from "./SideIcons/MessageIcon/MessageIcon";
import { RequestIcon } from "./SideIcons/RequestIcon/RequestIcon";
import { SettingsIcon } from "./SideIcons/SettingsIcon/SettingsIcon";
import { SearchIcon } from "./SideIcons/SearchIcon/SearchIcon";
import styles from "./style.module.css"; // Importa los estilos desde el módulo CSS

export const SideBar = () => {
return (
<div className={styles["side-bar"]}>
    <div className={styles.bar}>
    <div className={styles.rectangle} />
    </div>
    <div className={styles["barside-icons"]}>
    <BocchingLogo className={styles["icon-instance-node"]} />
    <div className={styles.icons}>
        <PerfilIcon status={"default"} className={styles["icon-instance-node"]} />
        <FriendsIcon status={"default"} className={styles["icon-instance-node"]} />
        <MessageIcon status={"default"} className={styles["icon-instance-node"]} />
        <SearchIcon status={"default"} className={styles["icon-instance-node"]} />
        <RequestIcon status={"default"} className={styles["icon-instance-node"]} />
        <SettingsIcon status={"default"} className={styles["icon-instance-node"]} />
    </div>
    </div>
</div>
);
};
