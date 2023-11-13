import { useCallback } from "react";
import { useRouter } from "next/router";
import { Zoom } from "../extra/zoom.js"
import styles from "./amistades1.module.css";
import Lateral from "../components/lateral.js";
import Card from "../components/CardN.js";
import { useState, useEffect } from 'react';

const Amistades1 = () => {
  Zoom()
  const router = useRouter();

  

 


  const cardsData = [
    {
      id: 1,
      imgSrc: 'url_de_imagen_1.jpg',
      name: 'Nombre 1',
      text: 'Texto de la tarjeta 1',
    },
    {
      id: 2,
      imgSrc: 'url_de_imagen_2.jpg',
      name: 'Nombre 2',
      text: 'Texto de la tarjeta 2',
    },
    {
      id: 3,
      imgSrc: 'url_de_imagen_1.jpg',
      name: 'Nombre 1',
      text: 'Texto de la tarjeta 1',
    },
    {
      id: 4,
      imgSrc: 'url_de_imagen_2.jpg',
      name: 'Nombre 2',
      text: 'Texto de la tarjeta 2',
    },
    {
      id: 5,
      imgSrc: 'url_de_imagen_1.jpg',
      name: 'Nombre 1',
      text: 'Texto de la tarjeta 1',
    },
    {
      id: 6,
      imgSrc: 'url_de_imagen_2.jpg',
      name: 'Nombre 2',
      text: 'Texto de la tarjeta 2',
    },
    {
      id: 7,
      imgSrc: 'url_de_imagen_1.jpg',
      name: 'Nombre 1',
      text: 'Texto de la tarjeta 1',
    },
    {
      id: 8,
      imgSrc: 'url_de_imagen_2.jpg',
      name: 'Nombre 2',
      text: 'Texto de la tarjeta 2',
    },
    // ... Repite para las otras 7 tarjetas
  ];


  const handleCardClick = () => {
    router.push("/amistades2");
  };

  const [searchText, setSearchText] = useState("");
  const [filteredCards, setFilteredCards] = useState(cardsData);

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();

    // Filtra las tarjetas cuyo nombre contiene el texto buscado
    const filtered = cardsData.filter((card) => {
      const name = card.name.toLowerCase();
      return name.includes(searchText);
    });

    setFilteredCards(filtered);
    setSearchText(e.target.value); // Actualiza el estado del texto de búsqueda
  };

  return (
    <div id="container">
      <div className={styles.amistades1}>
        <img className={styles.amistades1Child} alt="" src="/rectangle-16.svg" />
        <div className={styles.amistades1Item}>
          {filteredCards.map((card) => (
            <div key={card.id} className="card-cell">
              <Card
                name={card.name}
                text={card.text}
                onClick={handleCardClick}
              />
            </div>
          ))}
        </div>
        <div className={styles.amistades}>Amistades</div>
        <div className={styles.amigos}>Amigos</div>
        <div>
          <input
            className={styles.inputContainer}
            type="text"
            placeholder="Escribe aquí..."
            value={searchText}
            onChange={handleSearch}
          />
        </div>
      </div>
      <Lateral pantalla="Amistades" />
    </div>
  );
};

export default Amistades1;