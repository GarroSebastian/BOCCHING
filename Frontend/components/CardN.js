import React from 'react';
import styles from './CardN.module.css';

const Card = ({ name, text, onClick, img }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardImgContainer}>
        <img src={img} alt={name} className={styles.cardImg} />
      </div>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{name}</h5>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;