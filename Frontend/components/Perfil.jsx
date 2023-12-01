import { useCallback } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styles from "./Perfil.module.css";
import Lateral from "../components/lateral.js"
import InfoPerfil from "./infoPerfil.jsx"
import Gustos from "./gustos.jsx"


/*
- Unifiquen todo mi-perfil aquí. Cuando verifiquen que ya está todo, borren las otras pantallas con sus module.css
*/

const Perfil = ({id}) => { //si id es null, estás en mi-perfil (te deja editar los datos). si tiene valor, estás viendo otro perfil (no te deja editar)
  const [pag, setPag] = useState(1);

  const router = useRouter();

  const [contador, setContador] = useState(true);
  const onRectangle11Click = useCallback(() => { //Boton editar
    // Cambiar el valor de contador cuando se presiona el botón 
    setContador(prevContador => !prevContador);
  }, []);

  const onRectangle12Click = useCallback(() => {  //Boton añadir
    // Cambiar el valor de contador cuando se presiona el botón 
    console.log("Añadir presionado");
  }, []);

  const onRectangle2Click = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);

  const onPrivacidadTextClick = useCallback(() => {
    router.push("/mi-perfil241");
  }, [router]);
  
  return (
    <>
      <img
                className={styles.miperfil21Inner}
                alt=""
                src="/rectangle-29.svg"
                onClick={onRectangle2Click}
              />
      {
        pag==1?
          <>
            <InfoPerfil id={id}/>
            <img className={styles.miperfil1Item} alt="" src="/rectangle-29.svg" onClick={e => setPag(2)}/>
          </>
        :pag==2?
          <>
            <Gustos id={id}/>        
            <img className={styles.miperfil21Item} onClick={e => setPag(1)} alt="" src="/rectangle-29.svg"/>
            <div className={styles.informacin2} onClick={e => setPag(1)}>Información</div>      
          </>
        :
          null
      }
      <Lateral></Lateral>
    </>
  );
};

export default Perfil;