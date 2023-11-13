import React from "react";
import styles from "./SolicitudItem.module.css";

const SolicitudItem = ({ solicitud, onDeleteSolicitud }) => {
  // Convierte la fecha en un objeto Date
  const dateObj = new Date(solicitud.date);

  // Obtiene el día, mes, año, hora y minutos
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Los meses comienzan en 0, por lo que sumamos 1
  const year = dateObj.getFullYear() % 100; // Obtiene los últimos dos dígitos del año
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Formatea la fecha y la hora
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  const handleDeleteSolicitud = () => {
    // Llama a la función onDeleteSolicitud y pasa la solicitud que se desea eliminar
    onDeleteSolicitud(solicitud);
  };

  return (
    <div className={styles.solicitudItem}>
      <div className={styles.iconContainer}>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.Caja}></div>
        <div className={styles.Elipse}></div>
        <div className={styles.contlax}></div>
        <img className={styles.lax} alt="" src="/group-180.svg" onClick={handleDeleteSolicitud} />
        <img className={styles.img} alt="" src="/group-147.svg" />
        <img className={styles.ojoMa} alt="" src="/vector2.svg" />
        <img className={styles.ojo} alt="" src="/frame1.svg" />
        <p className={styles.nombres}>
          {solicitud.receptor ? (
            <>
              {solicitud.receptor.nombre} / {solicitud.receptor.apodo || 'No disponible'}
            </>
          ) : 'No disponible'}
        </p>
        <div className={styles.linediv}></div> {/* Línea divisoria */}
        <p className={styles.fechas}>{formattedDate} - {formattedTime}</p>
      </div>
    </div>
  );
};

export default SolicitudItem;