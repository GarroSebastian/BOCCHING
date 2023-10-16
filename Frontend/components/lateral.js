import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./lateral.module.css";

const Lateral = () => {
    const router = useRouter();
    
    const onGroupClick = useCallback(() => {
        router.push("/menu");
    }, [router]);

    const onVector2Click = useCallback(() => {
        router.push("/amistades1");
    }, [router]);

    const onGroupIconClick = useCallback(() => {
        router.push("/mensajes1");
    }, [router]);
    
    const onVectorIcon3Click = useCallback(() => {
    router.push("/buscar1");
    }, [router]);

    const onVectorIcon4Click = useCallback(() => {
    router.push("/solicitudes1");
    }, [router]);

    const onXMLID273IconClick = useCallback(() => {
    router.push("/configuracin11");
    }, [router]);

    return(
        <div className={styles.menu}>
            <div className={styles.miperfil1Child14} />
            <img
            className={styles.groupIcon}
            alt=""
            src="/group-194.svg"
            onClick={onGroupClick}
            />
            <img className={styles.miperfil1Child15} alt="" src="/group-1951.svg" />
            <img
            className={styles.vectorIcon5}
            alt=""
            src="/vector17.svg"
            onClick={onVector2Click}
            />
            <img
            className={styles.miperfil1Child16}
            alt=""
            src="/group-197.svg"
            onClick={onGroupIconClick}
            />
            <img
            className={styles.vectorIcon6}
            alt=""
            src="/vector30.svg"
            onClick={onVectorIcon3Click}
            />
            <img
            className={styles.vectorIcon7}
            alt=""
            src="/vector31.svg"
            onClick={onVectorIcon4Click}
            />
            <img
            className={styles.xmlid273Icon}
            alt=""
            src="/xmlid-2732.svg"
            onClick={onXMLID273IconClick}
            />
        </div>
    )
}

export default Lateral;