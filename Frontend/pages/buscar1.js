import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Zoom } from "../extra/zoom.js"
import styles from "./buscar1.module.css";
import Lateral from "../components/lateral.js"

/*Búsqueda: Pueden cambiar el orden de los componentes
Datos de entrada: El algoritmo retorna los usuarios que cumplan con al menos 1 criterio. Coordinar con Rodrigo para aspecto visual
- <input> único: Acepta idBocching o nombre+apellidos o código institucional o correo institucional
- <checkboxes> género [Masculino, Femenino, Otros]
- <checkboxes> estudio: [Otras facultades, Misma facultad, Otras carreras (misma facultad), Misma carrera, Otras especialidades (misma carrera), Misma especialidad]
- <textarea> palabras: El usuario escribe frases separadas por Enter. El algoritmo buscará perfiles que las hayan escrito
- <checkboxes> Gustos: Salen los nombres de todos los gustos del usuario
Botones: Coordinar con Rodrigo para aspecto visual. Aparecen por cada <checkboxes>
- "Cualquiera": Asigna todos los datos a "Cualquiera" (o vacío, dependiendo del caso)
- "Igual a mí": Asigna a todos los datos a "Igual a mí" (o seleccionando todo, dependiendo del caso)
- Switch de 2 opciones: En el <checkboxes> Gustos, considerar solo Tipo-Subtipo-Nombre-Afinidad vs considerar también Duración-Compañía
- Switch de 2 opciones: Considerar solo amigos
- Buscar: Realiza la búsqueda

FALTAN LOS DATOS PARA BUSCAR SEGÚN HORARIO, LOS PONDRÉ PRÓXIMAMENTE
- Cambiar nombre de pantalla a "buscar"
*/

const Buscar1 = () => {
  Zoom()
  const router = useRouter()

  const [idBocching, setIdBocching] = useState("");
  const [nombre, setNombre] = useState("");
  const [codigoInstitucional, setCodigoInstitucional] = useState("");
  const [correoInstitucional, setCorreoInstitucional] = useState("");
  const [genero, setGenero] = useState("");
  const [estudio, setEstudio] = useState([]);
  const [frases, setFrases] = useState("");
  const [gustosSwitch, setGustosSwitch] = useState("Tipo-Subtipo-Nombre-Afinidad");
  const [amigosSwitch, setAmigosSwitch] = useState(false);
  
  const [mismaFacultad, setMismaFacultad] = useState(false)
  const [tareas, setTareas] = useState("")
  const [gustos, setGustos] = useState([])

  const onBuscarClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users/search_ga", {
        idBocching,
        nombre,
        codigoInstitucional,
        correoInstitucional,
        genero,
        estudio,
        frases,
        gustosSwitch,
        amigosSwitch,
      });

      // Maneja la respuesta según tus necesidades
      console.log(response.data);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };


  const onRectangle9Click = useCallback(() => {
    router.push("/buscar21");
  }, [router]);

  return (
    <div id="container">
    <div className={styles.buscar1}>
      <img className={styles.buscar1Child} alt="" src="/rectangle-16.svg" />
      <div className={styles.buscar1Item} />
      <div className={styles.buscar}>Buscar</div>
      <div className={styles.manual}>Manual</div>
      <div className={styles.filtros}>Filtros</div>
      <div id="container">
      <div className={styles.buscar1}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        
        <div>
          <label>Genero:</label>
          <input
            type="checkbox"
            value="masculino"
            checked={genero === "masculino"}
            onChange={() => setGenero("masculino")}
          />
          <span>Masculino</span>

          <input
            type="checkbox"
            value="femenino"
            checked={genero === "femenino"}
            onChange={() => setGenero("femenino")}
          />
          <span>Femenino</span>

          <input
            type="checkbox"
            value="otros"
            checked={genero === "otros"}
            onChange={() => setGenero("otros")}
          />
          <span>Otros</span>
        </div>

        <div>
          <input
            type="checkbox"
            checked={mismaFacultad}
            onChange={() => setMismaFacultad(!mismaFacultad)}
          />
          <span>Misma Facultad</span>
        </div>

        <textarea
          placeholder="Tareas"
          value={tareas}
          onChange={(e) => setTareas(e.target.value)}
        />

        {/* Gustos (Asumiendo que gustos es un array de strings) */}
        <div>
          <label>Gustos:</label>
          <input
            type="checkbox"
            value="Gusto1"
            checked={gustos.includes("Gusto1")}
            onChange={() => setGustos((prev) => toggleArrayValue(prev, "Gusto1"))}
          />
          <span>Gusto1</span>

          {/* Agrega más checkbox según los gustos disponibles */}
        </div>

        <button onClick={onBuscarClick}>Buscar</button>
      </div>
    </div>
      
      <div className={styles.buscar1Child6} onClick={onRectangle9Click} />
      <div className={styles.busquedaIdbocchingnombreco}>
        Busqueda: IdBocching/Nombre/Codigo
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.noHaRealizadoNingunaBsque}>
        <p className={styles.noHa}>No ha</p>
        <p className={styles.noHa}>realizado</p>
        <p className={styles.noHa}>ninguna</p>
        <p className={styles.noHa}>búsqueda</p>
      </div>
      <img
        className={styles.transhumansPuppyIcon}
        alt=""
        src="/transhumans-puppy@2x.png"
      />
    </div>
    <Lateral pantalla="Buscar"></Lateral>
    </div>
  );
};

export default Buscar1;
